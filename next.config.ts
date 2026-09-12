import type { NextConfig } from 'next';

// Running as a real server on Railway now, not a static export — this
// is what makes the rewrites() proxy below possible. qresta.in serves
// this marketing site directly for everything except the app routes
// below, which are transparently forwarded to the qresta-web service
// over Railway's private network. The URL bar never changes; the
// visitor never sees insightful-endurance.railway.internal.
//
// The /app-assets/:path* rule exists because qresta-web sets its own
// assetPrefix to /app-assets (see its next.config.ts) — that keeps
// its JS/CSS files from colliding with this app's own /_next/ files
// under the same domain, while leaving qresta-web's actual page
// routes completely clean and unprefixed.
const nextConfig: NextConfig = {
  async rewrites() {
    const APP_ORIGIN = 'http://insightful-endurance.railway.internal:8080';
    // FitBizz (gym management) is a separate Next.js service built with
    // basePath '/fitbizz', so every page and asset of it lives under that
    // one prefix — qresta.in/fitbizz/login, /fitbizz/dashboard, and its
    // /fitbizz/_next/* chunks — and a single rule forwards all of it.
    const FITBIZZ_ORIGIN = 'http://fitbizz-web.railway.internal:8080';
    // CloudKitchen is arranged the same way, under basePath '/cloudkitchen'.
    const CLOUDKITCHEN_ORIGIN = 'http://cloudkitchen-web.railway.internal:8080';
    return [
      { source: '/login', destination: `${APP_ORIGIN}/login` },
      { source: '/forgot-password', destination: `${APP_ORIGIN}/forgot-password` },
      { source: '/dashboard', destination: `${APP_ORIGIN}/dashboard` },
      { source: '/dashboard/:path*', destination: `${APP_ORIGIN}/dashboard/:path*` },
      // The Admin Management Portal — QResta's own super admins and
      // admin executives, with its own sign-in at
      // /adminmanagementportal/login. Both rules for the same reason
      // /dashboard needs two: :path* does not match the bare path.
      { source: '/adminmanagementportal', destination: `${APP_ORIGIN}/adminmanagementportal` },
      { source: '/adminmanagementportal/:path*', destination: `${APP_ORIGIN}/adminmanagementportal/:path*` },
      { source: '/menu/:path*', destination: `${APP_ORIGIN}/menu/:path*` },
      { source: '/order/:path*', destination: `${APP_ORIGIN}/order/:path*` },
      // Offline stall menus. Printed QR codes point at /stall/<slug>,
      // so without this rule every one of them would 404 here rather
      // than reach qresta-web.
      { source: '/stall/:path*', destination: `${APP_ORIGIN}/stall/:path*` },
      { source: '/app-assets/:path*', destination: `${APP_ORIGIN}/app-assets/:path*` },
      // Only the sub-paths are forwarded: bare /fitbizz is the product's
      // marketing page, rendered by this site (src/app/fitbizz). The app's
      // own root merely redirected to /fitbizz/login anyway.
      { source: '/fitbizz/:path*', destination: `${FITBIZZ_ORIGIN}/fitbizz/:path*` },
      // Same split for CloudKitchen: bare /cloudkitchen is this site's
      // product page, everything under it belongs to the app.
      { source: '/cloudkitchen/:path*', destination: `${CLOUDKITCHEN_ORIGIN}/cloudkitchen/:path*` },
    ];
  },
};

export default nextConfig;
