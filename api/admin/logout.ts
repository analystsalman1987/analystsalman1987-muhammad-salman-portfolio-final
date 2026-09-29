import type { IncomingMessage, ServerResponse } from 'node:http';
import { clearSessionCookie } from '../_lib/adminAuth.ts';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const isProduction = process.env.NODE_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';
  clearSessionCookie(res, isProduction);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify({ success: true, authenticated: false }));
}
