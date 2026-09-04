'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLeadModals } from '@/components/lead-modals';

const FEATURES = [
  {
    icon: '▦',
    title: 'QR Digital Menu',
    body: 'Guests scan a table code and get your live menu instantly — photos, prices and availability, always up to date.',
  },
  {
    icon: '🧾',
    title: 'Order Management',
    body: 'Orders, billing and kitchen workflow in one place, so nothing gets lost between the table and the till.',
  },
  {
    icon: '🛎',
    title: 'Chef & Waiter Panel',
    body: 'Dedicated screens for kitchen and floor staff, so every order moves fast without a single shouted ticket.',
  },
  {
    icon: '📈',
    title: 'Advanced Analytics',
    body: 'See your best-selling dishes, peak hours and revenue trends without opening a spreadsheet.',
  },
  {
    icon: '☁',
    title: 'Cloud SaaS Platform',
    body: 'Log in securely from any device, at any outlet — your dashboard is never tied to one till or one laptop.',
  },
  {
    icon: '🎧',
    title: 'Live Support',
    body: 'Onboarding help and ongoing support whenever something needs a hand, not just during business hours.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Guest scans the table QR',
    body: 'No app to install — the menu opens straight in the browser, in seconds.',
  },
  {
    num: '02',
    title: 'Guest browses & orders',
    body: 'Photos, descriptions and live availability help guests decide faster and order more confidently.',
  },
  {
    num: '03',
    title: 'Kitchen & waiter get notified instantly',
    body: "The order lands on the chef and waiter panels the moment it's placed, so preparation starts immediately.",
  },
];

const SOLUTIONS = [
  { icon: '🍽', title: 'Restaurants', body: 'Manage menus, orders, waiters, kitchen workflow and the full guest experience.' },
  { icon: '☕', title: 'Cafes', body: 'A digital menu with QR ordering that keeps a fast-moving counter running smoothly.' },
  { icon: '🏨', title: 'Hotels', body: 'Restaurant and in-room dining management built for hotel-scale operations.' },
  { icon: '🏬', title: 'Food Courts', body: "Multiple counters, one system — keep every stall's orders and billing organised." },
  { icon: '🍳', title: 'Cloud Kitchens', body: 'Streamline order intake and kitchen coordination even without a dining floor.' },
];

const FAQS = [
  {
    q: 'Do I need to buy any special hardware?',
    a: 'No. Staff can use the smartphones or tablets you already have, and table QR codes are simply printed and placed on each table.',
  },
  {
    q: 'How long does setup take?',
    a: "Our team digitises your menu and gets your dashboard ready after signup — timing depends on the size of your menu. We'll walk you through the exact timeline during your demo.",
  },
  {
    q: 'Is there a long-term contract?',
    a: 'Our plans are billed on a simple recurring basis, with no separate multi-year lock-in beyond your current subscription term. Ask us about current pricing during your demo.',
  },
  {
    q: 'Can I update my menu myself?',
    a: 'Yes — items, prices, photos and availability can all be updated any time from your dashboard, with changes reflecting instantly for guests.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Live chat support built directly into the platform, plus email and phone support, with hands-on help during onboarding so your team feels confident from day one.',
  },
];

export default function HomePage() {
  const { openDemoModal } = useLeadModals();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-14">
        <div
          className="absolute rounded-full"
          style={{
            width: 560,
            height: 560,
            background: 'radial-gradient(circle, var(--blue-50) 0%, transparent 70%)',
            top: -260,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--blue-600)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ff7a30' }} />
                QR ordering, built for Indian restaurants
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Turn every table into a <em style={{ color: 'var(--blue-600)', fontStyle: 'italic' }}>fully staffed</em> digital waiter.
              </h1>

              <p className="text-lg mb-8" style={{ color: 'var(--ink-soft)' }}>
                QResta replaces paper menus and manual order-taking with QR ordering, live
                kitchen tickets and a waiter panel your staff will actually enjoy using — all
                from one simple dashboard.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={openDemoModal}
                  className="rounded-full px-6 py-3.5 text-sm font-semibold text-white"
                  style={{ background: 'var(--ink)' }}
                >
                  Book a free demo →
                </button>
                <Link
                  href="/#how-it-works"
                  className="rounded-full px-6 py-3.5 text-sm font-semibold"
                  style={{ border: '1.5px solid var(--line)' }}
                >
                  See how it works
                </Link>
              </div>

              <div className="text-sm" style={{ color: 'var(--ink-faint)' }}>
                ✓ No app download for guests &nbsp;·&nbsp; ✓ Works on any smartphone
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="rounded-3xl p-6 mx-auto max-w-xs"
                style={{ background: 'var(--card)', border: '1px solid var(--line)', boxShadow: '0 20px 50px -20px rgba(18,20,28,0.18)' }}
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold mb-4">
                  <span>QRESTA</span>
                  <span style={{ color: 'var(--ink-faint)' }}>TABLE 04</span>
                </div>
                <div style={{ borderTop: '1.5px dashed var(--line)' }} className="mb-4" />
                <div className="text-center mb-4">
                  <div className="text-2xl mb-1">▦</div>
                  <p className="text-xs font-mono" style={{ color: 'var(--ink-soft)' }}>
                    SCAN → ORDER → SERVED
                  </p>
                </div>
                <div style={{ borderTop: '1.5px dashed var(--line)' }} className="mb-3" />
                <div className="grid gap-1.5 text-sm mb-3">
                  <div className="flex justify-between"><span>1x Paneer Tikka</span><span>₹220</span></div>
                  <div className="flex justify-between"><span>2x Butter Naan</span><span>₹80</span></div>
                  <div className="flex justify-between"><span>1x Masala Chai</span><span>₹40</span></div>
                  <div
                    className="flex justify-between font-semibold pt-2 mt-1"
                    style={{ borderTop: '1px solid var(--line)' }}
                  >
                    <span>Total</span><span>₹340</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono" style={{ color: '#178a46' }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: '#178a46' }} />
                  KITCHEN: PREPARING
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-8" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
          <div>₹ Simple, transparent pricing</div>
          <div>⚡ Fast onboarding, no hardware to buy</div>
          <div>📱 No app download for guests</div>
          <div>🎧 Real humans on support</div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--blue-600)' }}>
            Platform
          </div>
          <h2 className="font-display text-3xl font-bold mb-3">
            Everything your front and back of house needs
          </h2>
          <p style={{ color: 'var(--ink-soft)' }}>
            One dashboard to digitise your menu, take orders, run the kitchen and understand
            your business — no juggling separate tools.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
              <div className="text-2xl mb-3">{f.icon}</div>
              <div className="font-display text-lg font-semibold mb-2">{f.title}</div>
              <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20" style={{ background: 'var(--card)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--blue-600)' }}>
              The order flow
            </div>
            <h2 className="font-display text-3xl font-bold mb-3">From table to kitchen in three steps</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              No app, no waiting for a waiter to be free, no handwritten tickets lost in the shuffle.
            </p>
          </div>

          <div className="grid gap-8">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ background: 'var(--blue-50)', color: 'var(--blue-600)' }}
                  >
                    {s.num}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: 'var(--line)' }} />
                  )}
                </div>
                <div className="pb-2">
                  <div className="font-semibold mb-1">{s.title}</div>
                  <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--blue-600)' }}>
            Who it's for
          </div>
          <h2 className="font-display text-3xl font-bold mb-3">Built for every kind of dining business</h2>
          <p style={{ color: 'var(--ink-soft)' }}>
            QResta adapts to how you actually run service, whatever format your business takes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 text-center" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="font-display text-lg font-semibold mb-2">{s.title}</div>
              <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--blue-600)' }}>
            Questions
          </div>
          <h2 className="font-display text-3xl font-bold">Frequently asked questions</h2>
        </div>

        <div className="grid gap-1">
          {FAQS.map((f, i) => (
            <div key={f.q} style={{ borderBottom: '1px solid var(--line)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between gap-4"
              >
                <span className="font-display font-semibold text-lg">{f.q}</span>
                <span style={{ color: 'var(--ink-faint)' }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <p className="pb-5 text-sm max-w-xl" style={{ color: 'var(--ink-soft)' }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div
          className="rounded-3xl p-12 sm:p-20 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--ink) 0%, #232840 100%)', color: '#fff' }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready to digitise your restaurant?</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Join QResta and modernise your restaurant with QR ordering, kitchen automation and
            a dashboard that keeps you in control of every table.
          </p>
          <button
            onClick={openDemoModal}
            className="rounded-full px-6 py-3.5 text-sm font-semibold"
            style={{ background: '#fff', color: 'var(--ink)' }}
          >
            Book your free demo →
          </button>
        </div>
      </section>
    </div>
  );
}
