import crypto from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'node:http';

// Session cookie constants
export const SESSION_COOKIE_NAME = 'ms_admin_session';
export const SESSION_MAX_AGE_SECONDS = 86400; // 24 hours

// Rate limiting in-memory storage (sliding window)
interface AttemptRecord {
  count: number;
  firstAttemptAt: number;
  blockedUntil?: number;
}
const ipAttempts = new Map<string, AttemptRecord>();
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_BLOCK_MS = 5 * 60 * 1000;  // 5 minutes lockout

// Clean up stale rate-limiting entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of ipAttempts.entries()) {
    if (now - record.firstAttemptAt > RATE_LIMIT_WINDOW_MS && (!record.blockedUntil || now > record.blockedUntil)) {
      ipAttempts.delete(ip);
    }
  }
}, 10 * 60 * 1000).unref?.();

export function getClientIp(req: IncomingMessage): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].trim();
  }
  return req.socket?.remoteAddress || '127.0.0.1';
}

export function checkRateLimit(ip: string): { blocked: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const record = ipAttempts.get(ip);
  if (!record) return { blocked: false };

  if (record.blockedUntil && now < record.blockedUntil) {
    const remaining = Math.ceil((record.blockedUntil - now) / 1000);
    return { blocked: true, retryAfterSeconds: remaining };
  }

  // If window expired, reset
  if (now - record.firstAttemptAt > RATE_LIMIT_WINDOW_MS) {
    ipAttempts.delete(ip);
    return { blocked: false };
  }

  return { blocked: false };
}

export function recordFailedAttempt(ip: string): { blocked: boolean; remainingAttempts: number } {
  const now = Date.now();
  let record = ipAttempts.get(ip);

  if (!record || now - record.firstAttemptAt > RATE_LIMIT_WINDOW_MS) {
    record = { count: 1, firstAttemptAt: now };
    ipAttempts.set(ip, record);
    return { blocked: false, remainingAttempts: RATE_LIMIT_MAX_ATTEMPTS - 1 };
  }

  record.count += 1;
  if (record.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    record.blockedUntil = now + RATE_LIMIT_BLOCK_MS;
    return { blocked: true, remainingAttempts: 0 };
  }

  return { blocked: false, remainingAttempts: RATE_LIMIT_MAX_ATTEMPTS - record.count };
}

export function clearRateLimit(ip: string): void {
  ipAttempts.delete(ip);
}

// Derive a HMAC secret key for signing session cookies
function getSessionSecretKey(): string {
  const explicitSecret = process.env.ADMIN_SESSION_SECRET;
  if (explicitSecret && explicitSecret.trim().length > 8) {
    return explicitSecret.trim();
  }
  // Fallback: derive from password hash or password
  const seed = process.env.ADMIN_PASSWORD_HASH || process.env.ADMIN_PASSWORD || 'msalman-secure-default-seed';
  return crypto.createHash('sha256').update(seed + ':ms_session_salt_2026').digest('hex');
}

// Verify entered password against ADMIN_PASSWORD_HASH or ADMIN_PASSWORD
export function verifyAdminPassword(enteredPassword: string): { valid: boolean; configured: boolean } {
  const cleanEntered = enteredPassword.trim();
  const configuredHash = process.env.ADMIN_PASSWORD_HASH?.trim().toLowerCase();
  const configuredPlain = process.env.ADMIN_PASSWORD?.trim();

  // If neither is configured
  if (!configuredHash && !configuredPlain) {
    return { valid: false, configured: false };
  }

  // 1. If SHA-256 hash is configured
  if (configuredHash) {
    const enteredHash = crypto.createHash('sha256').update(cleanEntered).digest('hex').toLowerCase();
    if (enteredHash.length === configuredHash.length) {
      try {
        const isMatch = crypto.timingSafeEqual(
          Buffer.from(enteredHash, 'utf-8'),
          Buffer.from(configuredHash, 'utf-8')
        );
        if (isMatch) return { valid: true, configured: true };
      } catch {
        // Fall through on buffer mismatch
      }
    }
  }

  // 2. If plain-text password is configured as fallback
  if (configuredPlain) {
    const enteredBuf = crypto.createHash('sha256').update(cleanEntered).digest();
    const targetBuf = crypto.createHash('sha256').update(configuredPlain).digest();
    const isMatch = crypto.timingSafeEqual(enteredBuf, targetBuf);
    if (isMatch) return { valid: true, configured: true };
  }

  return { valid: false, configured: true };
}

// Create signed session token: payload.signature
export function createSessionToken(): string {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    role: 'admin',
    iat: now,
    exp: now + SESSION_MAX_AGE_SECONDS,
  };
  const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const secretKey = getSessionSecretKey();
  const signature = crypto.createHmac('sha256', secretKey).update(payloadEncoded).digest('base64url');
  return `${payloadEncoded}.${signature}`;
}

// Verify a session token
export function verifySessionToken(token: string): boolean {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payloadEncoded, signature] = parts;
  const secretKey = getSessionSecretKey();
  const expectedSig = crypto.createHmac('sha256', secretKey).update(payloadEncoded).digest('base64url');

  if (signature.length !== expectedSig.length) return false;
  try {
    const isSigValid = crypto.timingSafeEqual(
      Buffer.from(signature, 'utf-8'),
      Buffer.from(expectedSig, 'utf-8')
    );
    if (!isSigValid) return false;
  } catch {
    return false;
  }

  try {
    const payloadJson = Buffer.from(payloadEncoded, 'base64url').toString('utf-8');
    const payload = JSON.parse(payloadJson);
    if (payload.role !== 'admin') return false;
    const now = Math.floor(Date.now() / 1000);
    if (!payload.exp || payload.exp < now) return false;
    return true;
  } catch {
    return false;
  }
}

// Extract cookies from request
export function parseCookies(req: IncomingMessage): Record<string, string> {
  const header = req.headers.cookie;
  if (!header) return {};
  const list: Record<string, string> = {};
  header.split(';').forEach((cookie) => {
    const parts = cookie.split('=');
    const name = parts[0]?.trim();
    if (name) {
      list[name] = decodeURIComponent(parts.slice(1).join('=').trim());
    }
  });
  return list;
}

// Set session cookie header
export function setSessionCookie(res: ServerResponse, token: string, isProduction: boolean): void {
  const secureFlag = isProduction ? '; Secure' : '';
  const cookieValue = `${SESSION_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_SECONDS}${secureFlag}`;
  res.setHeader('Set-Cookie', cookieValue);
}

// Clear session cookie header
export function clearSessionCookie(res: ServerResponse, isProduction: boolean): void {
  const secureFlag = isProduction ? '; Secure' : '';
  const cookieValue = `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT${secureFlag}`;
  res.setHeader('Set-Cookie', cookieValue);
}

// Read body helper
export function readJsonBody<T = any>(req: IncomingMessage): Promise<T | null> {
  return new Promise((resolve) => {
    // If body already parsed by serverless platform
    if ((req as any).body && typeof (req as any).body === 'object') {
      return resolve((req as any).body as T);
    }
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1e5) {
        // 100kb flood attack protection
        req.destroy();
        resolve(null);
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : null);
      } catch {
        resolve(null);
      }
    });
    req.on('error', () => resolve(null));
  });
}
