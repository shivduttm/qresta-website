import type { MetadataRoute } from 'next';
import { DISALLOWED_PATHS, SITE_URL } from '@/lib/site';

// Served at /robots.txt. Everything marketing is crawlable; the routes
// qresta.in proxies to the app (dashboard, login, a guest's live menu or
// order) are not — they are private or per-session and have nothing to
// rank for.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: DISALLOWED_PATHS }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
