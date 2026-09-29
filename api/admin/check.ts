import type { IncomingMessage, ServerResponse } from 'node:http';
import {
  parseCookies,
  verifySessionToken,
  SESSION_COOKIE_NAME,
} from '../_lib/adminAuth.ts';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  const cookies = parseCookies(req);
  const sessionToken = cookies[SESSION_COOKIE_NAME];

  if (!sessionToken) {
    res.statusCode = 200;
    res.end(JSON.stringify({ authenticated: false }));
    return;
  }

  const isValid = verifySessionToken(sessionToken);

  res.statusCode = 200;
  res.end(JSON.stringify({ authenticated: isValid }));
}
