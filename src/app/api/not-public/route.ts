import { NextResponse } from 'next/server';

/**
 * Where the proxy sends app paths it refuses to forward (see
 * next.config.ts).
 *
 * Qresta Invoice serves its admin-management contract from the same
 * Next.js service that serves its public pages, so the only place to
 * keep /invoice/api/platform-admins off the open internet is here, at
 * the edge that publishes it. qresta-api reaches those routes directly
 * at qresta-invoice.railway.internal, which never passes through this
 * site.
 */
export const dynamic = 'force-dynamic';

function gone() {
  return NextResponse.json({ statusCode: 404, message: 'Not found' }, { status: 404 });
}

export const GET = gone;
export const POST = gone;
export const PATCH = gone;
export const PUT = gone;
export const DELETE = gone;
