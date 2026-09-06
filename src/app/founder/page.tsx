import type { Metadata } from 'next';
import Link from 'next/link';
import { FOUNDER, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  // Absolute, so this page reads as "Shivdutt Mohanty | Founder & CEO
  // of Qresta" in results rather than picking up the "· Qresta" suffix
  // the root layout appends to every other page.
  title: { absolute: `${FOUNDER.name} | ${FOUNDER.jobTitle} of ${SITE_NAME}` },
  description: FOUNDER.description,
  alternates: { canonical: '/founder' },
  openGraph: {
    type: 'profile',
    title: `${FOUNDER.name} | ${FOUNDER.jobTitle} of ${SITE_NAME}`,
    description: FOUNDER.description,
    url: '/founder',
  },
};

export default function FounderPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      {/* Marks this page as the canonical profile of the person. The
          Person and Organization nodes themselves are defined once in
          the site-wide graph (components/structured-data.tsx); this
          only points at them by @id, so the facts live in one place. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            '@id': `${SITE_URL}/founder#profilepage`,
            url: FOUNDER.url,
            name: `${FOUNDER.name} | ${FOUNDER.jobTitle} of ${SITE_NAME}`,
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': FOUNDER.id },
            mainEntity: { '@id': FOUNDER.id },
          }),
        }}
      />

      <h1 className="font-display text-3xl font-bold mb-1">Shivdutt Mohanty</h1>
      <p className="text-sm font-semibold mb-8" style={{ color: 'var(--blue-600)' }}>
        Founder & CEO of Qresta
      </p>

      <div className="grid gap-6 text-sm" style={{ color: 'var(--ink-soft)' }}>
        <p>
          Shivdutt Mohanty is the founder and CEO of Qresta, a restaurant SaaS platform
          focused on helping restaurants and cafes digitise their operations.
        </p>
        <p>
          He started Qresta with a straightforward goal: to make modern restaurant
          technology — digital menus, QR ordering, kitchen and waiter workflows,
          automation — accessible to businesses of every size, not just large chains
          with dedicated IT teams.
        </p>
        <p>
          Qresta itself reflects that goal directly: one platform covering digital
          menus, QR ordering, waiter and chef operations, and the day-to-day
          automation a restaurant actually needs to run.
        </p>
      </div>

      <div className="grid gap-3 mt-10">
        <Link href="/" className="text-sm font-semibold" style={{ color: 'var(--blue-600)' }}>
          ← Visit Qresta
        </Link>
        <Link href="/about" className="text-sm font-semibold" style={{ color: 'var(--blue-600)' }}>
          Learn more about Qresta →
        </Link>
      </div>
    </div>
  );
}
