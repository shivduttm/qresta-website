'use client';

import Link from 'next/link';
import { useLeadModals } from '@/components/lead-modals';

const WHY_US = [
  { icon: '▦', title: 'QR Menu', body: 'A digital menu guests can access instantly by scanning a table code — no app download required.' },
  { icon: '🧾', title: 'Order Management', body: 'Orders, billing and kitchen workflow managed efficiently from a single, easy-to-use dashboard.' },
  { icon: '☁', title: 'Cloud Platform', body: "Access your restaurant's data securely from anywhere, on any device, at any outlet." },
];

const STATS = [
  { number: '100+', title: 'Restaurants' },
  { number: '5,000+', title: 'Orders Managed' },
  { number: '99%', title: 'Customer Satisfaction' },
  { number: '24×7', title: 'Support' },
];

export default function AboutPage() {
  const { openDemoModal } = useLeadModals();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 text-center">
        <div
          className="absolute rounded-full"
          style={{
            width: 560, height: 560,
            background: 'radial-gradient(circle, var(--blue-50) 0%, transparent 70%)',
            top: -260, left: '50%', transform: 'translateX(-50%)',
          }}
        />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: 'var(--blue-600)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ff7a30' }} />
            About Qresta
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Restaurant technology, built by people who understand{' '}
            <em style={{ color: 'var(--blue-600)', fontStyle: 'italic' }}>restaurants</em>.
          </h1>
          <p className="text-lg" style={{ color: 'var(--ink-soft)' }}>
            India's restaurant automation platform — helping restaurants digitise menus,
            orders, staff workflows and the guest experience, from one simple dashboard.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl p-8" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
            <div className="text-2xl mb-3">🎯</div>
            <div className="font-display text-lg font-semibold mb-2">Our Mission</div>
            <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
              To help restaurants grow faster by replacing manual, paper-based operations with
              technology, automation and digital experiences that guests and staff both enjoy using.
            </p>
          </div>
          <div className="rounded-2xl p-8" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
            <div className="text-2xl mb-3">🧭</div>
            <div className="font-display text-lg font-semibold mb-2">Our Vision</div>
            <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
              To become India's most trusted restaurant technology ecosystem — the platform
              restaurants of every size rely on to run their day-to-day operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Qresta */}
      <section className="py-16" style={{ background: 'var(--card)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--blue-600)' }}>
              Why us
            </div>
            <h2 className="font-display text-3xl font-bold mb-3">Why restaurants choose Qresta</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              Built specifically for the way Indian restaurants run service — not a generic
              tool bolted onto a menu.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {WHY_US.map((w) => (
              <div key={w.title} className="rounded-2xl p-6 text-center" style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}>
                <div className="text-2xl mb-3">{w.icon}</div>
                <div className="font-semibold mb-2">{w.title}</div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.title}>
              <div className="font-display text-3xl font-bold" style={{ color: 'var(--blue-600)' }}>{s.number}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--ink-soft)' }}>{s.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-16" style={{ background: 'var(--card)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-2xl mb-4" style={{ color: 'var(--blue-600)' }}>❝</div>
          <p className="font-display text-xl mb-6" style={{ color: 'var(--ink)' }}>
            "I started Qresta with a simple vision: to help small and large restaurants and
            cafes digitise their operations and adopt modern technology."
          </p>
          <Link href="/founder" className="font-semibold" style={{ color: 'var(--ink)' }}>
            Shivdutt Mohanty
          </Link>
          <div className="text-sm mb-4" style={{ color: 'var(--ink-faint)' }}>Founder & CEO, Qresta</div>
          <Link
            href="/founder"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{ border: '1.5px solid var(--line)' }}
          >
            About Shivdutt Mohanty →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div
          className="rounded-3xl p-12 sm:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, var(--blue-700) 0%, var(--blue-600) 100%)', color: '#fff' }}
        >
          <h2 className="font-display text-3xl font-bold mb-3">Ready to transform your restaurant?</h2>
          <p className="mb-7" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Book a free demo and see Qresta running on a real menu, in about 20 minutes.
          </p>
          <button
            onClick={openDemoModal}
            className="rounded-full px-6 py-3.5 text-sm font-semibold"
            style={{ background: '#fff', color: 'var(--blue-700)' }}
          >
            Book a demo →
          </button>
        </div>
      </section>
    </div>
  );
}
