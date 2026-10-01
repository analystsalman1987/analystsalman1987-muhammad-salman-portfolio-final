import type { IncomingMessage, ServerResponse } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { Redis } from '@upstash/redis';
import { getClientIp } from './_lib/adminAuth.ts';

// IP-based anti-spam rate limiting for likes (prevent curl abuse)
const recentLikesByIp = new Map<string, number>();

function isIpThrottled(ip: string): boolean {
  const lastLikeTime = recentLikesByIp.get(ip);
  const now = Date.now();
  if (lastLikeTime && now - lastLikeTime < 2500) {
    return true;
  }
  recentLikesByIp.set(ip, now);
  // Clean up old entries periodically
  if (recentLikesByIp.size > 500) {
    for (const [key, timestamp] of recentLikesByIp.entries()) {
      if (now - timestamp > 60000) {
        recentLikesByIp.delete(key);
      }
    }
  }
  return false;
}

// Local fallback file path (for local development or before KV is connected on Vercel)
const LOCAL_STORAGE_FILE = path.join(process.cwd(), '.data', 'likes.json');

function getLocalLikes(): number {
  try {
    if (fs.existsSync(LOCAL_STORAGE_FILE)) {
      const data = JSON.parse(fs.readFileSync(LOCAL_STORAGE_FILE, 'utf-8'));
      return typeof data.likes === 'number' ? data.likes : 0;
    }
  } catch {
    // fallback
  }
  return 0;
}

function setLocalLikes(count: number): void {
  try {
    const dir = path.dirname(LOCAL_STORAGE_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify({ likes: count, updatedAt: new Date().toISOString() }));
  } catch {
    // fallback
  }
}

function getRedisClient(): Redis | null {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    try {
      return new Redis({ url, token });
    } catch {
      return null;
    }
  }
  return null;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // Set JSON headers and CORS headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const redis = getRedisClient();

  if (req.method === 'GET') {
    try {
      if (redis) {
        const raw = await redis.get<number | string>('portfolio_total_likes');
        const count = raw !== null && raw !== undefined ? Number(raw) : 0;
        res.statusCode = 200;
        res.end(JSON.stringify({ likes: isNaN(count) ? 0 : count, persistent: true }));
        return;
      }

      // Fallback to local file when KV is not yet provisioned
      const localCount = getLocalLikes();
      res.statusCode = 200;
      res.end(JSON.stringify({ likes: localCount, persistent: false }));
    } catch {
      const localCount = getLocalLikes();
      res.statusCode = 200;
      res.end(JSON.stringify({ likes: localCount, persistent: false, warning: 'Database query fallback' }));
    }
    return;
  }

  if (req.method === 'POST') {
    const ip = getClientIp(req);
    if (isIpThrottled(ip)) {
      res.statusCode = 429;
      res.end(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }));
      return;
    }

    try {
      if (redis) {
        // Atomic increment in Redis
        const updated = await redis.incr('portfolio_total_likes');
        res.statusCode = 200;
        res.end(JSON.stringify({ likes: Number(updated), success: true, persistent: true }));
        return;
      }

      // Fallback increment for local development
      const current = getLocalLikes();
      const updated = current + 1;
      setLocalLikes(updated);
      res.statusCode = 200;
      res.end(JSON.stringify({ likes: updated, success: true, persistent: false }));
    } catch {
      const current = getLocalLikes();
      const updated = current + 1;
      setLocalLikes(updated);
      res.statusCode = 200;
      res.end(JSON.stringify({ likes: updated, success: true, persistent: false, warning: 'Database write fallback' }));
    }
    return;
  }

  res.statusCode = 405;
  res.end(JSON.stringify({ error: 'Method Not Allowed' }));
}
