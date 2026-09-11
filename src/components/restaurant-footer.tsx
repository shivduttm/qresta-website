import Link from 'next/link';
import { QrestaMark } from '@/components/brand';
import { ProductLinks } from '@/components/product-links';
import { CONTACT, RESTAURANT, SITE_NAME } from '@/lib/site';

// Footer columns for the restaurant product site. The three products
// themselves come from <ProductLinks>, so every footer lists them the
// same way. Every href resolves to a page
// this site serves or to a section anchor — a dead footer link is worse
// than a missing one. `app: true` marks a route served by proxying to
// another service; those must be plain <a> tags, because a client-side
// <Link> would route inside this app and 404.
const FOOTER_COLUMNS: Array<{ title: string; links: Array<{ label: string; href: string; app?: boolean }> }> = [
  {
    title: 'Features',
    links: [
      { label: 'POS billing', href: '/restaurant#modules' },
      { label: 'Kitchen display', href: '/restaurant#modules' },
      { label: 'QR ordering', href: '/restaurant#modules' },
      { label: 'Online orders', href: '/restaurant#online-orders' },
      { label: 'Inventory', href: '/restaurant#modules' },
      { label: 'Reports & head office', href: '/restaurant#owner' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Restaurants', href: '/restaurant#customers' },
      { label: 'Cafés & QSR', href: '/restaurant#customers' },
      { label: 'Cloud kitchens', href: '/restaurant#customers' },
      { label: 'Food courts', href: '/restaurant#customers' },
      { label: 'Hotels', href: '/restaurant#customers' },
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
export function RestaurantFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--paper-alt)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href={RESTAURANT.path} className="inline-flex items-center gap-2.5">
              <QrestaMark size={32} />
              <span className="font-display text-lg font-bold tracking-tight">
                {SITE_NAME}
                <span className="font-body text-[11px] font-semibold ml-2" style={{ color: 'var(--ink-faint)' }}>
                  Restaurant
                </span>
              </span>
            </Link>
            <p className="text-sm mt-4 max-w-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              Restaurant management for India — billing, kitchen, QR ordering, online
              orders, inventory and reports on one platform, offline-first and GST-ready.
            </p>
            <div className="grid gap-1.5 text-sm mt-5" style={{ color: 'var(--ink-soft)' }}>
              <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="hover:underline">
                {CONTACT.phoneDisplay}
              </a>
              <span style={{ color: 'var(--ink-faint)' }}>Odisha, India</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <ProductLinks current="restaurant" />
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
          <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
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
