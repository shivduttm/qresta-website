import type { NextConfig } from 'next';

// Static export — this is what keeps hosting genuinely flexible.
// A statically-exported site is just plain HTML/CSS/JS files, so it
// runs correctly on ordinary shared hosting (like a typical Hostinger
// plan, which can't run a live Node.js server) just as well as on
// Vercel or anywhere else. The demo request form still works fully —
// it submits directly to the QResta API from the browser via fetch(),
// which doesn't need a Next.js server to handle it.
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // Next's built-in image optimization needs a running server —
    // not available in a static export, so this turns it off rather
    // than the build silently failing on it.
    unoptimized: true,
  },
};

export default nextConfig;
