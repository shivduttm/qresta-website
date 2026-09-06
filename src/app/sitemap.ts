import type { MetadataRoute } from 'next';
import { ROUTES, SITE_URL } from '@/lib/site';

// Served at /sitemap.xml. This is the file you submit in Google Search
// Console under Sitemaps; it lists only pages this site actually
// renders, never the app routes proxied through to qresta-web.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path === '/' ? '/' : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
