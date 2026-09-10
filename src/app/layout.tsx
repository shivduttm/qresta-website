import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { LeadModalsProvider } from '@/components/lead-modals';
import { SiteChrome } from '@/components/site-chrome';
import { StructuredData } from '@/components/structured-data';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';

// Next's own font loader — self-hosts the font files at build time
// (no runtime request to Google's servers) and avoids the CSS
// @import-ordering issue entirely, rather than the raw
// `@import url(...)` approach globals.css used before. Each one
// exposes its own CSS variable, matching the --font-display/
// --font-body/--font-mono names already used throughout the site.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  // Lets every page give a relative canonical / OG image URL and have
  // Next resolve it against the live origin.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    // Page titles read "About Qresta · Qresta" style without each page
    // having to repeat the brand.
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  keywords: [
    'restaurant POS India',
    'restaurant billing software',
    'QR menu ordering',
    'kitchen display system',
    'Zomato Swiggy order management',
    'restaurant inventory software',
    'GST billing for restaurants',
    'gym management software India',
    'FitBizz gym software',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // Google Search Console's "HTML tag" verification. Set
  // GOOGLE_SITE_VERIFICATION on the Railway service to the token Google
  // gives you and redeploy; leaving it unset simply omits the tag.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  // These cover the whole qresta.in domain, the proxied qresta-web
  // routes included: only this app serves the root, so its /public is
  // the one place root-level icon requests can resolve.
  icons: {
    icon: [
      // Google wants a square favicon of at least 48px for search
      // results, so the .ico carries 16/32/48 and the PNGs cover the
      // larger slots; the SVG is what modern browsers actually use.
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/qresta-glyph.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
};

// Footer columns. Every href here resolves to a page this site actually
// serves, or to a section anchor on the home page — a dead link in a
// footer is worse than a missing one.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <StructuredData />
        <LeadModalsProvider>
          {/* Header and footer depend on which site the path belongs to:
              the restaurant site at the root, or FitBizz under /fitbizz. */}
          <SiteChrome>{children}</SiteChrome>
        </LeadModalsProvider>
      </body>
    </html>
  );
}
