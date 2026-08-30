import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shivdutt Mohanty | Founder & CEO of QResta',
  description:
    'Shivdutt Mohanty is the Founder & CEO of QResta, a restaurant SaaS platform helping restaurants and cafes digitise their operations.',
};

export default function FounderPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      {/* Structured data — genuinely useful for search engines, kept
          from the original page even though the prose below was
          rewritten to not just repeat the same two facts five times. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            '@id': 'https://qresta.in/founder#profilepage',
            url: 'https://qresta.in/founder',
            name: 'Shivdutt Mohanty | Founder & CEO of QResta',
            mainEntity: {
              '@type': 'Person',
              '@id': 'https://qresta.in/founder#shivdutt-mohanty',
              name: 'Shivdutt Mohanty',
              jobTitle: 'Founder & CEO',
              worksFor: {
                '@type': 'Organization',
                '@id': 'https://qresta.in/#organization',
                name: 'QResta',
                url: 'https://qresta.in/',
              },
              description:
                'Shivdutt Mohanty is the Founder & CEO of QResta, a restaurant SaaS platform helping restaurants and cafes digitise their operations.',
              url: 'https://qresta.in/founder',
            },
          }),
        }}
      />

      <h1 className="font-display text-3xl font-bold mb-1">Shivdutt Mohanty</h1>
      <p className="text-sm font-semibold mb-8" style={{ color: 'var(--blue-600)' }}>
        Founder & CEO of QResta
      </p>

      <div className="grid gap-6 text-sm" style={{ color: 'var(--ink-soft)' }}>
        <p>
          Shivdutt Mohanty is the founder and CEO of QResta, a restaurant SaaS platform
          focused on helping restaurants and cafes digitise their operations.
        </p>
        <p>
          He started QResta with a straightforward goal: to make modern restaurant
          technology — digital menus, QR ordering, kitchen and waiter workflows,
          automation — accessible to businesses of every size, not just large chains
          with dedicated IT teams.
        </p>
        <p>
          QResta itself reflects that goal directly: one platform covering digital
          menus, QR ordering, waiter and chef operations, and the day-to-day
          automation a restaurant actually needs to run.
        </p>
      </div>

      <div className="grid gap-3 mt-10">
        <Link href="/" className="text-sm font-semibold" style={{ color: 'var(--blue-600)' }}>
          ← Visit QResta
        </Link>
        <Link href="/about" className="text-sm font-semibold" style={{ color: 'var(--blue-600)' }}>
          Learn more about QResta →
        </Link>
      </div>
    </div>
  );
}
