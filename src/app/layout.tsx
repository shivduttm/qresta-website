import type { Metadata } from 'next';
import Link from 'next/link';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { LeadModalsProvider } from '@/components/lead-modals';
import { SiteHeader } from '@/components/site-header';

// Next's own font loader — self-hosts the font files at build time
// (no runtime request to Google's servers) and avoids the CSS
// @import-ordering issue entirely, rather than the raw
// `@import url(...)` approach globals.css used before. Each one
// exposes its own CSS variable, matching the --font-display/
// --font-body/--font-mono names already used throughout the site.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'QResta | Restaurant SaaS Platform',
  description:
    'QResta helps restaurants manage QR menus, digital ordering, waiter panels, chef management and restaurant automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <LeadModalsProvider>
          <SiteHeader />

          <main>{children}</main>

          <footer
            className="px-6 py-14 mt-20"
            style={{ borderTop: '1px solid var(--line)', background: 'var(--card)' }}
          >
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="/qresta-logo.png" alt="" className="w-7 h-7" />
                  <div className="font-display text-lg font-bold">
                    Q<span style={{ color: 'var(--blue-600)' }}>Resta</span>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Restaurant QR menu, digital ordering, waiter app, chef panel and restaurant
                  automation platform.
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--ink-faint)' }}>
                  Company
                </div>
                <div className="grid gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  <Link href="/about">About Us</Link>
                  <Link href="/careers">Careers</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--ink-faint)' }}>
                  Legal
                </div>
                <div className="grid gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/terms">Terms &amp; Conditions</Link>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--ink-faint)' }}>
                  Contact
                </div>
                <div className="grid gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  <a href="mailto:info@qresta.in">info@qresta.in</a>
                  <a href="tel:+918249190169">+91 82491 90169</a>
                  <span style={{ color: 'var(--ink-soft)' }}>Odisha, India</span>
                </div>
              </div>
            </div>

            <div
              className="max-w-6xl mx-auto text-center text-xs mt-10 pt-6"
              style={{ borderTop: '1px solid var(--line)', color: 'var(--ink-faint)' }}
            >
              © {new Date().getFullYear()} QResta. All rights reserved.
            </div>
          </footer>
        </LeadModalsProvider>
      </body>
    </html>
  );
}
