import type { NextConfig } from 'next';

// Running as a real server on Railway now, not a static export — this
// is what makes the rewrites() proxy below possible. qresta.in serves
// this marketing site directly for everything except the app routes
// below, which are transparently forwarded to the qresta-web service
// over Railway's private network. The URL bar never changes; the
// visitor never sees insightful-endurance.railway.internal.
const nextConfig: NextConfig = {
  async rewrites() {
    const APP_ORIGIN = 'http://insightful-endurance.railway.internal:8080';
    return [
      { source: '/login', destination: `${APP_ORIGIN}/login` },
      { source: '/forgot-password', destination: `${APP_ORIGIN}/forgot-password` },
      { source: '/dashboard', destination: `${APP_ORIGIN}/dashboard` },
      { source: '/dashboard/:path*', destination: `${APP_ORIGIN}/dashboard/:path*` },
      { source: '/menu/:path*', destination: `${APP_ORIGIN}/menu/:path*` },
      { source: '/order/:path*', destination: `${APP_ORIGIN}/order/:path*` },
    ];
  },
};

export default nextConfig;
