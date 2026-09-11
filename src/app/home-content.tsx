'use client';

import Link from 'next/link';
import { useLeadModals } from '@/components/lead-modals';
import { CloudKitchenMark, FitBizzMark, QrestaMark } from '@/components/brand';
import { PRODUCTS, SITE_NAME } from '@/lib/site';

/* =====================================================================
   qresta.in — the company, not any one product
   =====================================================================

   Three products now share this domain, and a visitor arrives knowing
   what business they run, not which of our brand names fits it. So this
   page is a router first: say what the company builds, put the three
   products in front of them with the business each one is for, then
   explain what is the same across all three and why that matters.

   Everything a marketer would edit is data up here; the layout below
   stays layout. Same rules as the product pages: no prices, plans or
   trials — that conversation happens on the demo call — and every
   number is a checkable product fact, never a business metric. Customer
   counts and quotes live in the empty-until-real arrays at the bottom.
   ===================================================================== */

const CAPABILITY_STRIP = ['Works offline', 'GST-ready billing', 'Built in India', 'One login per business', 'Android & web', 'Your own payment gateway'];

/** What every Qresta product shares — the reason they are one company. */
const PLATFORM_POINTS = [
  {
    icon: 'offline',
    title: 'It keeps working when the internet does not',
    body: 'A counter, a kitchen screen and a front desk cannot stop because a link dropped. Billing and order capture run locally and reconcile when the connection returns.',
  },
  {
    icon: 'gst',
    title: 'GST is built in, not bolted on',
    body: 'Tax invoices with CGST/SGST or IGST, your own numbering series, credit notes and period reports — in the shape a chartered accountant in India expects to receive them.',
  },
  {
    icon: 'roles',
    title: 'Every role sees only its own work',
    body: 'A permissions matrix per role, in every product. The kitchen sees tickets, the counter sees bills, the owner sees money, and anything consequential is written to an audit log.',
  },
  {
    icon: 'money',
    title: 'Your customers pay you, not us',
    body: 'Connect your own payment gateway and settlements land in your account. We are never in the middle of the money, in any of the three products.',
  },
  {
    icon: 'multi',
    title: 'One outlet or twenty',
    body: 'Stock, staff and reports are tracked per outlet, and the owner view rolls up across all of them without anyone exporting a spreadsheet at the end of the day.',
  },
  {
    icon: 'support',
    title: 'Set up with you, on your own data',
    body: 'The demo runs on your menu, your plans or your dishes. Onboarding is done together, so the day you go live is not the day you start figuring it out.',
  },
] as const;

/** Product facts phrased as numbers — none of these is a performance claim. */
const PRODUCT_FACTS = [
  { value: '3', label: 'Products, one company', sub: 'Restaurant, cloud kitchen, gym' },
  { value: '1', label: 'Platform underneath', sub: 'Same billing, roles, GST and audit trail' },
  { value: '100%', label: 'Of billing works offline', sub: 'Queued and reconciled, never lost' },
  { value: 'India', label: 'Built for, and built in', sub: 'Odisha — GST, UPI and aggregators first' },
];

const FAQS = [
  {
    q: 'Which product do I need?',
    a: 'If guests sit down or walk up to a counter, Restaurant Management. If every order arrives from Swiggy, Zomato or your own app and nobody eats on site, Cloud Kitchen. If you sell memberships and sessions, Gym Automation. A restaurant with a separate delivery kitchen often runs the first two side by side.',
  },
  {
    q: 'Can I run more than one brand or outlet?',
    a: 'Yes. Each product tracks stock, staff and reports per outlet, and Cloud Kitchen is built for several virtual brands out of one address. The owner view rolls up across all of them.',
  },
  {
    q: 'Does it work when the internet goes down?',
    a: 'Billing and order capture keep running locally and sync when the connection returns. That is the first thing we test in any demo, because it is the first thing that fails in practice.',
  },
  {
    q: 'How do payments reach me?',
    a: 'You connect your own payment gateway, and money settles into your account. Qresta never holds your takings — we charge you for the software, not a cut of your sales.',
  },
  {
    q: 'Do you help move from what I use today?',
    a: 'Yes. We import your menu, plans or item list before the demo so you see the system running on your own data, and we do the switch-over with you rather than handing you a manual.',
  },
  {
    q: 'Is there an Android app?',
    a: 'Each product ships one. Restaurant has captain and kitchen apps, Cloud Kitchen has a single app covering every station role, and Gym Automation has a trainer and front-desk app.',
  },
];

/**
 * Real customers, once any have agreed to be named. EMPTY ON PURPOSE —
 * an invented logo wall costs more trust than a missing one.
 */
const CUSTOMER_LOGOS: Array<{ name: string }> = [];
const TESTIMONIALS: Array<{ quote: string; name: string; role: string }> = [];

/* ===================================================================== */

export default function HomePage() {
  const { openDemoModal } = useLeadModals();

  return (
    <div className="overflow-x-hidden">
      <Hero onDemo={openDemoModal} />
      <CapabilityStrip />
      <Products />
      <WhichOne />
      <Platform />
      <ProductFacts />
      {CUSTOMER_LOGOS.length > 0 && <Logos />}
      {TESTIMONIALS.length > 0 && <Testimonials />}
      <Faq />
      <ClosingCta onDemo={openDemoModal} />
    </div>
  );
}

/* ------------------------------- hero -------------------------------- */

function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" style={{ height: 820 }} />
      <div className="absolute pointer-events-none glow" style={{ width: 900, height: 520, top: -170, left: '50%', transform: 'translateX(-50%)' }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-12 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold"
          style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)', color: 'var(--ink)' }}
        >
          <QrestaMark size={16} />
          Three products · One platform · Built in India
        </div>

        <h1
          className="font-display font-bold mx-auto mt-7 mb-6"
          style={{ fontSize: 'clamp(2.35rem, 6.2vw, 4.4rem)', lineHeight: 1.04, letterSpacing: '-0.03em', maxWidth: 1000 }}
        >
          The software Indian restaurants, kitchens and gyms run on.
        </h1>

        <p className="mx-auto text-base sm:text-lg" style={{ color: 'var(--ink-soft)', maxWidth: 720, lineHeight: 1.6 }}>
          A dine-in floor, a delivery-only kitchen and a gym do not run the same way, so we do
          not sell them the same product. Each gets software built for its own counter, its own
          clock and its own customer — on one platform that bills, reports and keeps working
          offline the same way underneath.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
          <button
            onClick={onDemo}
            className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--blue-600)', boxShadow: '0 12px 32px -12px rgba(30,94,255,0.9)' }}
          >
            Book a demo
          </button>
          <Link
            href="/#products"
            className="rounded-xl px-6 py-3.5 text-sm font-bold inline-flex items-center gap-2 transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            See the three products
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 1l5 4-5 4z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <section className="py-6" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {CAPABILITY_STRIP.map((item) => (
          <span key={item} className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--ink-faint)' }}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-5 h-px" style={{ background: 'var(--blue-500)' }} />
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--blue-500)' }}>
        {children}
      </span>
    </div>
  );
}

/* ----------------------------- products ------------------------------ */

const PRODUCT_MARK: Record<string, (p: { size?: number }) => React.ReactNode> = {
  restaurant: ({ size = 30 }) => <QrestaMark size={size} />,
  cloudkitchen: ({ size = 30 }) => <CloudKitchenMark size={size} />,
  fitbizz: ({ size = 30 }) => <FitBizzMark size={size} />,
};

function Products() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <SectionLabel>What we build</SectionLabel>
        </div>
        <h2 className="font-display font-bold mx-auto mb-4" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', maxWidth: 760 }}>
          Three products, each built for one kind of floor.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 620 }}>
          Pick the one that matches how your business actually runs. If two of them do, they
          work side by side on the same account.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {PRODUCTS.map((p) => {
          const Mark = PRODUCT_MARK[p.key];
          return (
            <Link
              key={p.key}
              href={p.path}
              className="group rounded-2xl p-6 card-lit flex flex-col transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Mark size={32} />
                <div className="min-w-0">
                  <div className="font-display text-lg font-semibold leading-tight">{p.label}</div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>
                    {p.name}
                  </div>
                </div>
              </div>

              <div className="text-xs font-semibold mb-3" style={{ color: 'var(--blue-500)' }}>
                {p.for}
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-soft)' }}>
                {p.blurb}
              </p>

              <div className="grid gap-2 mt-5">
                {p.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5">
                    <Check />
                    <span className="text-[13px]" style={{ color: 'var(--ink-soft)' }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-bold mt-5" style={{ color: 'var(--blue-500)' }}>
                Explore {p.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-0.5 w-4 h-4 rounded grid place-items-center flex-shrink-0" style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}>
      <svg width="9" height="7" viewBox="0 0 9 7" aria-hidden="true">
        <path d="M1 3.6L3.2 5.8 8 1" fill="none" stroke="var(--blue-500)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* --------------------------- which one? ------------------------------ */

const ROWS: Array<{ situation: string; product: string; href: string }> = [
  { situation: 'Guests sit down, order at the table or a counter', product: 'Restaurant Management', href: '/restaurant' },
  { situation: 'A café or QSR with a fast counter and takeaway queue', product: 'Restaurant Management', href: '/restaurant' },
  { situation: 'Several counters in a food court, one set of books', product: 'Restaurant Management', href: '/restaurant' },
  { situation: 'Every order comes from Swiggy, Zomato or your own app', product: 'Cloud Kitchen', href: '/cloudkitchen' },
  { situation: 'Four brands cooked out of one address, no dining room', product: 'Cloud Kitchen', href: '/cloudkitchen' },
  { situation: 'A restaurant running a separate delivery kitchen', product: 'Both, side by side', href: '/cloudkitchen' },
  { situation: 'Memberships, renewals and check-in at a front desk', product: 'Gym Automation', href: '/fitbizz' },
  { situation: 'Personal training packages, sessions and trainers', product: 'Gym Automation', href: '/fitbizz' },
];

function WhichOne() {
  return (
    <section id="which" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <SectionLabel>Not sure which one</SectionLabel>
          <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Find your business in this list.
          </h2>
          <p className="text-sm sm:text-base mb-6" style={{ color: 'var(--ink-soft)' }}>
            You do not have to know our product names to get started. Tell us how orders reach
            you and who pays at the end, and the right one is obvious in a minute.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            Ask us which one fits
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="lg:col-span-7 rounded-2xl overflow-hidden card-lit">
          {ROWS.map((r, i) => (
            <Link
              key={r.situation}
              href={r.href}
              className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-white/[0.03]"
              style={{ borderTop: i === 0 ? undefined : '1px solid var(--line)' }}
            >
              <span className="text-sm flex-1 min-w-0" style={{ color: 'var(--ink-soft)' }}>
                {r.situation}
              </span>
              <span className="text-[12px] font-bold whitespace-nowrap" style={{ color: 'var(--blue-500)' }}>
                {r.product}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- platform ------------------------------- */

function Platform() {
  return (
    <section id="platform" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <SectionLabel>One platform underneath</SectionLabel>
        </div>
        <h2 className="font-display font-bold mx-auto mb-4" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', maxWidth: 700 }}>
          Different floors. The same things that must never break.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 640 }}>
          Whichever product you run, this is what it is built on — and it is why a business that
          grows into a second kind of operation does not start over.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PLATFORM_POINTS.map((p) => (
          <div key={p.title} className="rounded-2xl p-6 card-lit">
            <PlatformIcon kind={p.icon} />
            <div className="font-display text-lg font-semibold mt-4 mb-2">{p.title}</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlatformIcon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    offline: (
      <>
        <path d="M2.5 7.5a10.5 10.5 0 0 1 15 0" />
        <path d="M5.5 11a6.4 6.4 0 0 1 9 0" />
        <circle cx="10" cy="15" r="1.1" />
        <path d="M3 3l14 14" />
      </>
    ),
    gst: (
      <>
        <rect x="4" y="2.5" width="12" height="15" rx="1.5" />
        <path d="M7 6.5h6M7 9.5h6M7 12.5h3" />
      </>
    ),
    roles: (
      <>
        <circle cx="7" cy="7" r="2.6" />
        <path d="M2.5 16c0-2.7 2-4.6 4.5-4.6S11.5 13.3 11.5 16" />
        <circle cx="14.5" cy="8" r="2" />
        <path d="M13.4 12.2c2.2.2 3.6 1.7 3.6 3.8" />
      </>
    ),
    money: (
      <>
        <rect x="2" y="4.5" width="16" height="11" rx="1.8" />
        <path d="M2 8.5h16" />
        <path d="M5 12.5h3" />
      </>
    ),
    multi: (
      <>
        <path d="M3 17V8l4-3 4 3v9" />
        <path d="M11 17V10l3-2 3 2v7" />
        <path d="M2 17h16" />
        <path d="M6 12.5h2M14 13h1" />
      </>
    ),
    support: (
      <>
        <circle cx="10" cy="10" r="7.2" />
        <path d="M7.8 8a2.3 2.3 0 1 1 3.1 2.2c-.6.3-.9.8-.9 1.4v.3" />
        <circle cx="10" cy="14.4" r="0.9" />
      </>
    ),
  };
  return (
    <span className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--blue-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths[kind]}
      </svg>
    </span>
  );
}

/* ----------------------------- numbers ------------------------------- */

function ProductFacts() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {PRODUCT_FACTS.map((f) => (
          <div key={f.label} className="rounded-2xl p-6 card-lit">
            <div className="font-display text-4xl font-bold" style={{ color: 'var(--blue-500)', letterSpacing: '-0.03em' }}>
              {f.value}
            </div>
            <div className="text-sm font-semibold mt-2">{f.label}</div>
            <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>
              {f.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
      <div className="text-center mb-8">
        <SectionLabel>Trusted by</SectionLabel>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {CUSTOMER_LOGOS.map((c) => (
          <span key={c.name} className="font-display text-lg font-semibold" style={{ color: 'var(--ink-faint)' }}>
            {c.name}
          </span>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16">
      <div className="grid md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl p-6 card-lit">
            <blockquote className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              “{t.quote}”
            </blockquote>
            <figcaption className="text-xs mt-4">
              <span className="font-semibold">{t.name}</span>
              <span style={{ color: 'var(--ink-faint)' }}> · {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- faq -------------------------------- */

function Faq() {
  return (
    <section id="faq" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <SectionLabel>Questions</SectionLabel>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            The things people ask before the demo.
          </h2>
          <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
            Anything else, ask us directly — {SITE_NAME} is a small team and you will reach a
            person who knows the answer.
          </p>
        </div>

        <div className="lg:col-span-8 grid gap-3">
          {FAQS.map((f) => (
            <details key={f.q} className="rounded-2xl px-5 py-4 card-lit group">
              <summary className="text-sm font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                {f.q}
                <span className="text-lg leading-none transition-transform group-open:rotate-45" style={{ color: 'var(--blue-500)' }} aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- close ------------------------------- */

function ClosingCta({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-20 sm:pb-24">
      <div
        className="relative rounded-3xl px-6 py-14 sm:py-20 text-center overflow-hidden"
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
          <div className="flex justify-center mb-5">
            <QrestaMark size={44} />
          </div>
          <h2 className="font-display font-bold mb-4 text-white" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.9rem)', letterSpacing: '-0.02em' }}>
            See it running on your own business.
          </h2>
          <p className="mx-auto mb-9 text-base" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 580 }}>
            Book a 20-minute demo. Tell us what you run and we will set it up on your own menu,
            dishes or membership plans before the call ends.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={onDemo} className="rounded-xl px-6 py-3.5 text-sm font-bold" style={{ background: '#fff', color: 'var(--blue-700)' }}>
              Book a demo
            </button>
            <Link href="/contact" className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.55)' }}>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
