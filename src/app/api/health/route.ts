import { NextResponse } from 'next/server';

// This route exists for one specific reason: Route Handlers can only
// run on a live Node.js server, never as part of a static export. Its
// presence is what tells Railway's build system (Railpack) that this
// app genuinely needs `next start`, not a static Caddy file server —
// which is what was silently swallowing next.config.ts's rewrites()
// and serving the homepage for every unmatched path, including
// /login. Doubles as an actual health check if useful later.
export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
