import Link from 'next/link';
import { QrestaMark } from '@/components/brand';

// Footer columns for the restaurant site. Every href resolves to a page
// this site serves or to a section anchor — a dead footer link is worse
// than a missing one. `app: true` marks a route served by proxying to
// another service; those must be plain <a> tags, because a client-side
// <Link> would route inside this app and 404.
const FOOTER_COLUMNS: Array<{ title: string; links: Array<{ label: string; href: string; app?: boolean }> }> = [
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
    title: 'FitBizz',
    links: [
      { label: 'Gym management software', href: '/fitbizz' },
      { label: 'Members & check-in', href: '/fitbizz#modules' },
      { label: 'Your own payment gateway', href: '/fitbizz#payments' },
      { label: 'Contact FitBizz', href: '/fitbizz/contact' },
    ],
  },
  {
    title: 'CloudKitchen',
    links: [
      { label: 'Cloud kitchen software', href: '/cloudkitchen' },
      { label: 'Orders from every channel', href: '/cloudkitchen#channels' },
      { label: 'Recipes & food cost', href: '/cloudkitchen#costing' },
      { label: 'Contact CloudKitchen', href: '/cloudkitchen/contact' },
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

/** The restaurant site's footer (everything outside /fitbizz and /cloudkitchen). */
export function SiteFooter() {
  return (
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
              online orders, inventory and reports on one platform. And the same care
              applied to gyms, in FitBizz, and to delivery-only kitchens, in CloudKitchen.
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

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] mb-4"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  {col.title}
                </div>
                <div className="grid gap-2.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  {col.links.map((l) =>
                    l.app ? (
                      <a key={l.label} href={l.href} className="hover:text-white transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    ),
                  )}
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
          </span>
        </div>
      </div>
    </footer>
  );
}
