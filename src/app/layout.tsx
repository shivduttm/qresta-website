import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { QrestaMark } from '@/components/brand';
import { LeadModalsProvider } from '@/components/lead-modals';
import { SiteHeader } from '@/components/site-header';
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
      { url: '/qresta-glyph.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
};

// Footer columns. Every href here resolves to a page this site actually
// serves, or to a section anchor on the home page — a dead link in a
// footer is worse than a missing one.
const FOOTER_COLUMNS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: 'Product',
    links: [
      { label: 'POS billing', href: '/#modules' },
      { label: 'Kitchen display', href: '/#modules' },
      { label: 'QR ordering', href: '/#modules' },
      { label: 'Online orders', href: '/#online-orders' },
      { label: 'Inventory', href: '/#modules' },
      { label: 'Reports & head office', href: '/#owner' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Restaurants', href: '/#customers' },
      { label: 'Cafés & QSR', href: '/#customers' },
      { label: 'Cloud kitchens', href: '/#customers' },
      { label: 'Food courts', href: '/#customers' },
      { label: 'Hotels', href: '/#customers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Founder', href: '/founder' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a demo', href: '/demo' },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <StructuredData />
        <LeadModalsProvider>
          <SiteHeader />

          <main>{children}</main>

          <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--paper-alt)' }}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <Link href="/" className="inline-flex items-center gap-2.5">
                    <QrestaMark size={32} />
                    <span className="font-display text-lg font-bold tracking-tight">Qresta</span>
                  </Link>
                  <p className="text-sm mt-4 max-w-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                    The restaurant operating system for India — billing, kitchen, QR ordering,
                    online orders, inventory and reports on one platform.
                  </p>
                  <div className="grid gap-1.5 text-sm mt-5" style={{ color: 'var(--ink-soft)' }}>
                    <a href="mailto:info@qresta.in" className="hover:underline">
                      info@qresta.in
                    </a>
                    <a href="tel:+918249190169" className="hover:underline">
                      +91 82491 90169
                    </a>
                    <span style={{ color: 'var(--ink-faint)' }}>Odisha, India</span>
                  </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {FOOTER_COLUMNS.map((col) => (
                    <div key={col.title}>
                      <div
                        className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] mb-4"
                        style={{ color: 'var(--ink-faint)' }}
                      >
                        {col.title}
                      </div>
                      <div className="grid gap-2.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
                        {col.links.map((l) => (
                          <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 text-xs"
                style={{ borderTop: '1px solid var(--line)', color: 'var(--ink-faint)' }}
              >
                <span>© {new Date().getFullYear()} Qresta. All rights reserved.</span>
                <span className="flex items-center gap-5">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                  {/* Proxied to the app by next.config.ts — a plain anchor, not a Link. */}
                  <a href="/login" className="hover:text-white transition-colors">
                    Sign in
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </LeadModalsProvider>
      </body>
    </html>
  );
}
