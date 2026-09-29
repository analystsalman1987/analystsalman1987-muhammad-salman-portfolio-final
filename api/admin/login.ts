import type { IncomingMessage, ServerResponse } from 'node:http';
import {
  getClientIp,
  checkRateLimit,
  recordFailedAttempt,
  clearRateLimit,
  verifyAdminPassword,
  createSessionToken,
  setSessionCookie,
  readJsonBody,
} from '../_lib/adminAuth.ts';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // Only accept POST
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  const clientIp = getClientIp(req);
  const rateLimitStatus = checkRateLimit(clientIp);

  if (rateLimitStatus.blocked) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Retry-After', String(rateLimitStatus.retryAfterSeconds || 300));
    res.end(
      JSON.stringify({
        error: `Too many login attempts. Please wait ${Math.ceil((rateLimitStatus.retryAfterSeconds || 300) / 60)} minutes before trying again.`,
      })
    );
    return;
  }

  const body = await readJsonBody<{ password?: string; pin?: string }>(req);
  const password = body?.password || body?.pin || '';

  if (!password || typeof password !== 'string') {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Password is required.' }));
    return;
  }

  // Artificial anti-timing delay
  await new Promise((resolve) => setTimeout(resolve, 350));

  const result = verifyAdminPassword(password);

  if (!result.configured) {
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error: 'Admin authentication is not configured. Please set ADMIN_PASSWORD_HASH in Vercel Environment Variables.',
      })
    );
    return;
  }

  if (!result.valid) {
    const attempt = recordFailedAttempt(clientIp);
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    if (attempt.blocked) {
      res.end(
        JSON.stringify({
          error: 'Too many failed login attempts. Temporarily locked for 5 minutes.',
        })
      );
    } else {
      res.end(JSON.stringify({ error: 'Invalid login credentials.' }));
    }
    return;
  }

  // Valid authentication
  clearRateLimit(clientIp);
  const token = createSessionToken();
  const isProduction = process.env.NODE_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';
  setSessionCookie(res, token, isProduction);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ success: true, authenticated: true }));
}
