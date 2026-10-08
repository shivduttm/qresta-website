'use client';

import Link from 'next/link';
import { useLeadModals } from '@/components/lead-modals';
import { CloudKitchenMark, FitBizzMark, QrestaHrMark, QrestaInvoiceMark, QrestaMark } from '@/components/brand';
import { FOUNDER, PRODUCTS, SITE_NAME } from '@/lib/site';

/* The company page. Five products share this domain, so this is where a
   visitor learns who builds them and how the company thinks, rather than
   reading about one product alone.

   Same rule as every other page here: no business metrics we cannot
   evidence. Customer counts, order volumes and satisfaction scores stay
   out until there is a real number behind them — the facts below are all
   checkable properties of the products. */

const PRINCIPLES = [
  {
    title: 'Build for one floor at a time',
    body: 'A dine-in restaurant, a gym, a delivery-only kitchen, a billing counter and an HR desk do not run the same way. We ship five products rather than one product with five sets of settings, because the settings version always fits somebody badly.',
  },
  {
    title: 'Assume the connection will drop',
    body: 'Software for a counter has to survive a bad link, a power cut and a busy hour at the same time. The restaurant till bills locally and reconciles later, and the HR app queues punches made offline — decisions made early, not features added after complaints.',
  },
  {
    title: 'Let customers pay you directly',
    body: 'In FitBizz and Qresta Invoice, customers pay only into your own payment gateway — there is no Qresta account in between. In Restaurant Management they do too once the outlet connects its own gateway; until then, guest QR payments go through Qresta’s PayU account. Gateway keys are stored encrypted and never shown back to anyone.',
  },
  {
    title: 'Make the record answerable',
    body: 'A discount, a refund, a cancelled order, a stock adjustment — each one stays on the record, and a void or a refund asks for a reason. When the month does not add up, the answer should be in the system rather than in somebody’s memory.',
  },
];

/** Product facts, not business claims — each one is checkable in the software. */
const FACTS = [
  { number: '5', title: 'Products', sub: 'Restaurant, gym, cloud kitchen, billing, HR' },
  { number: '9', title: 'Payment gateways', sub: 'You connect, in Restaurant and FitBizz' },
  { number: 'Offline', title: 'The restaurant till keeps billing', sub: 'Queued locally, reconciled after' },
  { number: 'India', title: 'Built for and built in', sub: 'Odisha — GST, UPI, Indian payroll' },
];

const MARKS: Record<string, (p: { size?: number }) => React.ReactNode> = {
  restaurant: ({ size = 28 }) => <QrestaMark size={size} />,
  cloudkitchen: ({ size = 28 }) => <CloudKitchenMark size={size} />,
  fitbizz: ({ size = 28 }) => <FitBizzMark size={size} />,
  invoice: ({ size = 28 }) => <QrestaInvoiceMark size={size} />,
  hr: ({ size = 28 }) => <QrestaHrMark size={size} />,
};

export default function AboutPage() {
  const { openDemoModal } = useLeadModals();

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 grid-bg pointer-events-none" style={{ height: 520 }} />
        <div className="absolute pointer-events-none glow" style={{ width: 760, height: 440, top: -160, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px" style={{ background: 'var(--blue-500)' }} />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--blue-500)' }}>
              About {SITE_NAME}
            </span>
          </div>
          <h1 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(2.1rem, 5vw, 3.4rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}>
            Software built by people who have watched the rush hour.
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            {SITE_NAME} builds the systems Indian businesses run on — a restaurant floor, a gym,
            a delivery-only kitchen, a billing counter and an HR desk each get a product shaped
            around how that work actually happens.
          </p>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 pb-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-7 card-lit">
            <div className="font-display text-lg font-semibold mb-2">What we are here to do</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              Replace the register, the diary, the printed ticket spike and the end-of-month
              spreadsheet with one system the whole floor reads — without asking an owner to
              become an IT department to get there.
            </p>
          </div>
          <div className="rounded-2xl p-7 card-lit">
            <div className="font-display text-lg font-semibold mb-2">Where we are going</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              To be the software an Indian business picks first and does not outgrow — from a
              single counter to several outlets, several brands and a growing team, without
              starting over each time it grows.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold mb-3" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', letterSpacing: '-0.02em' }}>
            What we build
          </h2>
          <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 560 }}>
            Five products, each with its own screens, its own vocabulary and its own idea of
            what a busy hour looks like.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => {
            const Mark = MARKS[p.key];
            return (
              <Link key={p.key} href={p.href} className="group rounded-2xl p-6 card-lit transition-colors hover:bg-white/[0.03]">
                <Mark size={30} />
                <div className="font-display text-lg font-semibold mt-4 mb-1">{p.label}</div>
                <div className="text-xs font-semibold mb-2" style={{ color: 'var(--blue-500)' }}>
                  {p.for}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {p.blurb}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold mt-4" style={{ color: 'var(--blue-500)' }}>
                  Explore
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* How we build */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold mb-3" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', letterSpacing: '-0.02em' }}>
            How we build it
          </h2>
          <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 560 }}>
            Four decisions that shape every product we ship.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="rounded-2xl p-6 card-lit">
              <div className="font-mono text-xs font-semibold mb-3" style={{ color: 'var(--blue-500)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-display text-lg font-semibold mb-2">{p.title}</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Facts */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {FACTS.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 card-lit">
              <div className="font-display text-3xl font-bold" style={{ color: 'var(--blue-500)', letterSpacing: '-0.03em' }}>
                {s.number}
              </div>
              <div className="text-sm font-semibold mt-2">{s.title}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="max-w-2xl mx-auto px-5 sm:px-6 py-14 text-center">
        <div className="text-2xl mb-4" style={{ color: 'var(--blue-500)' }}>
          ❝
        </div>
        <p className="font-display text-xl leading-relaxed mb-6">
          I started {SITE_NAME} to help small and large businesses digitise how they run — and
          the more businesses we sat behind, the clearer it became that each kind of work
          deserves its own product rather than a compromise.
        </p>
        <Link href="/founder" className="font-semibold">
          {FOUNDER.name}
        </Link>
        <div className="text-sm mb-5" style={{ color: 'var(--ink-faint)' }}>
          {FOUNDER.jobTitle}, {SITE_NAME}
        </div>
        <Link
          href="/founder"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors hover:bg-white/5"
          style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
        >
          About {FOUNDER.name}
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-20">
        <div
          className="relative rounded-3xl px-6 py-14 sm:py-16 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--blue-700) 0%, var(--blue-600) 55%, var(--blue-500) 100%)' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />
          <div className="relative">
            <h2 className="font-display font-bold mb-3 text-white" style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              See it running on your own business.
            </h2>
            <p className="mx-auto mb-8 text-base" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 520 }}>
              Twenty minutes, on your own menu, membership plans, items or team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button onClick={openDemoModal} className="rounded-xl px-6 py-3.5 text-sm font-bold" style={{ background: '#fff', color: 'var(--blue-700)' }}>
                Book a demo
              </button>
              <Link href="/contact" className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.55)' }}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
