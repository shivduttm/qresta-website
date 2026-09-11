'use client';

import Link from 'next/link';
import { useLeadModals } from '@/components/lead-modals';
import { CloudKitchenMark, CloudKitchenWordmark, FitBizzMark, FitBizzWordmark } from '@/components/brand';
import { QrestaMark } from '@/components/brand';

/* =====================================================================
   Content
   =====================================================================

   Everything a marketer would want to edit lives up here as data, so the
   layout below stays layout.

   Deliberately NOT on this page: prices, plans and anything that reads
   as commercial terms. Pricing is handled in conversation, on the demo
   call — see the CTA at the bottom of the page.
   ===================================================================== */

/** True product capabilities, not business metrics — see BUSINESS_STATS. */
const CAPABILITY_STRIP = [
  'Offline-first POS',
  'Sub-second KOTs',
  'Zomato & Swiggy',
  'ONDC ready',
  'GST invoicing',
  'Multi-outlet',
];

/**
 * Headline business numbers (outlets, bills processed, uptime …).
 *
 * Left EMPTY on purpose: these are claims about the company that only
 * Qresta can stand behind, and a wrong one on a public page is a
 * problem, not a placeholder. Fill it in with real, checkable figures
 * and the band renders itself.
 *
 * e.g. [{ value: '1,200+', label: 'Outlets live' }, …]
 */
const BUSINESS_STATS: Array<{ value: string; label: string }> = [];

const MODULES = [
  {
    icon: 'pos',
    title: 'POS billing',
    body: '3-click bills, split and merge, dynamic UPI QR, GST invoices, keyboard-first. Keeps billing when the internet drops and syncs the moment it is back.',
  },
  {
    icon: 'kot',
    title: 'KOT & Kitchen Display',
    body: 'Station-wise routing, colour-coded timers, item summaries, and stock-out toggles that reach POS and the aggregators instantly.',
  },
  {
    icon: 'qr',
    title: 'QR scan & order',
    body: 'Guests scan and order from the table without an app — no download, no login. Captain approves before anything reaches the kitchen.',
  },
  {
    icon: 'online',
    title: 'Online orders hub',
    body: 'Zomato, Swiggy, ONDC, WhatsApp and your own website in one screen, with auto-accept rules, rider tracking and payout reconciliation.',
  },
  {
    icon: 'inventory',
    title: 'Inventory & recipes',
    body: 'Recipe-level deduction on every KOT, low-stock alerts, purchase orders and vendor bills, wastage logging and variance reports.',
  },
  {
    icon: 'reports',
    title: 'Reports & head office',
    body: 'Day-end close, 40+ reports, scheduled email summaries, and one group view across every outlet and central kitchen.',
  },
] as const;

const AGGREGATOR_POINTS = [
  'Auto-accept with rules for stock, hours and rush mode',
  'Menu and stock-outs sync both ways, in seconds',
  'Rider OTP, packaging stickers and hand-over tracking',
  'Weekly payout reconciliation flags missing money and wrong commissions',
];

const OWNER_POINTS = [
  'Live sales, food cost and day-end status across the chain',
  'Void and discount approvals, so managers never wait for you',
  'Push alerts the moment a counter goes offline or a bill is voided',
];

/** Product facts, phrased as numbers — none of these is a performance claim. */
const PRODUCT_FACTS = [
  { value: '6', label: 'Modules in one platform', sub: 'Billing, kitchen, QR, online, stock, reports' },
  { value: '0', label: 'Apps for guests to install', sub: 'The QR menu opens in the browser' },
  { value: '1', label: 'Queue for every channel', sub: 'Dine-in, takeaway, QR and aggregators' },
  { value: '24/7', label: 'Billing, online or not', sub: 'Offline cache keeps the counter running' },
];

const CUSTOMER_TYPES = [
  { title: 'Restaurants', body: 'Floors, tables and multi-station kitchens, with captains on phones and a display at the pass.' },
  { title: 'Cafés & QSR', body: 'A counter that never queues: keyboard billing, takeaway tokens and repeat-guest loyalty.' },
  { title: 'Cloud kitchens', body: 'Aggregator-first operations with no dining floor — every brand and channel in one queue.' },
  { title: 'Food courts', body: "Many counters under one roof, each stall's orders and settlements kept straight." },
  { title: 'Hotels', body: 'Restaurant service and in-room dining on the same platform, room-posted or settled at the desk.' },
  { title: 'Bars & lounges', body: 'Running tabs, split bills and pour-tight stock control on fast-moving inventory.' },
];

/**
 * Customer quotes.
 *
 * Also empty on purpose. A testimonial names a real person and a real
 * business, so it can only come from someone who actually said it and
 * agreed to be quoted. Add them here and the section appears.
 *
 * e.g. [{ quote: '…', name: 'Full name', role: 'Manager, Outlet' }]
 */
const TESTIMONIALS: Array<{ quote: string; name: string; role: string }> = [];

/** The second product, teased once on the home page and sold on /fitbizz. */
const FITBIZZ_POINTS = [
  'Memberships, QR and biometric check-in, trainers and PT',
  'GST invoices, payment links and a supplements POS',
  'Members pay into the gym’s own payment gateway',
];

/** The third product, teased the same way and sold on /cloudkitchen. */
const CLOUDKITCHEN_POINTS = [
  'Swiggy, Zomato, ONDC and your own orders in one queue',
  'A kitchen display that keeps time by station',
  'Recipes that cost every dish against live stock',
];

/* ===================================================================== */

export default function HomePage() {
  const { openDemoModal } = useLeadModals();

  return (
    <div className="overflow-x-hidden">
      <Hero onDemo={openDemoModal} />
      <CapabilityStrip />
      {BUSINESS_STATS.length > 0 && <BusinessStats />}
      <Modules />
      <OnlineOrders />
      <OwnerView />
      <ProductFacts />
      <Customers />
      {TESTIMONIALS.length > 0 && <Testimonials />}
      <OtherProducts />
      <ClosingCta onDemo={openDemoModal} />
    </div>
  );
}

/* ------------------------------- hero -------------------------------- */

function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" style={{ height: 900 }} />
      <div
        className="absolute pointer-events-none glow"
        style={{ width: 900, height: 520, top: -170, left: '50%', transform: 'translateX(-50%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-10 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold"
          style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)', color: 'var(--ink)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
          One platform for billing, kitchen, QR and online orders
        </div>

        <h1
          className="font-display font-bold mx-auto mt-7 mb-6"
          style={{ fontSize: 'clamp(2.35rem, 6.2vw, 4.4rem)', lineHeight: 1.04, letterSpacing: '-0.03em', maxWidth: 980 }}
        >
          The restaurant operating system built for India&apos;s rush hour.
        </h1>

        <p className="mx-auto text-base sm:text-lg" style={{ color: 'var(--ink-soft)', maxWidth: 680, lineHeight: 1.6 }}>
          Billing, kitchen, QR ordering, Zomato &amp; Swiggy, inventory and reports in one
          platform. Orders reach the kitchen the moment they are placed, and the counter keeps
          billing even when the internet does not.
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
            href="/#modules"
            className="rounded-xl px-6 py-3.5 text-sm font-bold inline-flex items-center gap-2 transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            See it in action
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 1l5 4-5 4z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pb-4">
        <PosMockup />
      </div>
    </section>
  );
}

/* ----------------------------- mockups ------------------------------- */

/** The hero's product shot: the POS screen, with the KDS and the captain
 *  phone tucked in at its edges. Drawn in markup rather than shipped as a
 *  screenshot so it stays crisp and never goes stale. */
function PosMockup() {
  return (
    <div className="relative">
      <div
        className="rounded-2xl overflow-hidden card-lit"
        style={{ boxShadow: '0 50px 120px -40px rgba(0,0,0,0.95)' }}
      >
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid var(--line)' }}>
          <span className="flex gap-1.5">
            <Dot color="#FF5F57" />
            <Dot color="#FEBC2E" />
            <Dot color="#28C840" />
          </span>
          <div
            className="ml-2 flex-1 rounded-md px-3 py-1 text-[11px] font-mono"
            style={{ background: 'var(--paper-alt)', color: 'var(--ink-faint)' }}
          >
            qresta.in/dashboard/pos
          </div>
        </div>

        <div className="scroll-x">
          <div className="flex min-w-[880px]" style={{ background: 'var(--paper-alt)' }}>
            {/* sidebar */}
            <div className="w-[186px] flex-shrink-0 p-3" style={{ background: 'var(--blue-900)' }}>
              <div className="flex items-center gap-2 px-1 pb-3">
                <QrestaMark size={22} />
                <div>
                  <div className="text-[12px] font-bold leading-none">Qresta</div>
                  <div className="text-[7px] font-mono tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    RESTAURANT OS
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg px-2 py-1.5 mb-3"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                <div className="text-[10px] font-bold">Spice Route</div>
                <div className="text-[8px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Outlet 2 of 4 · Bengaluru
                </div>
              </div>
              <SidebarLabel>Operate</SidebarLabel>
              {['Dashboard', 'POS Billing', 'Tables & Floor', 'Kitchen Display', 'Online Orders', 'Orders & Bills'].map((item) => (
                <SidebarItem key={item} label={item} active={item === 'POS Billing'} />
              ))}
              <SidebarLabel>Manage</SidebarLabel>
              {['Menu', 'Inventory', 'Customers', 'Reports'].map((item) => (
                <SidebarItem key={item} label={item} />
              ))}
            </div>

            {/* main */}
            <div className="flex-1 min-w-0 p-3">
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <div className="text-[13px] font-bold leading-none">POS Billing</div>
                  <div className="text-[8px] mt-1" style={{ color: 'var(--ink-faint)' }}>
                    Terminal SR-KOR-T01 · Cashier: Priya
                  </div>
                </div>
                <div
                  className="rounded-full px-2 py-0.5 text-[8px] font-semibold inline-flex items-center gap-1"
                  style={{ background: 'rgba(18,183,106,0.14)', color: 'var(--green)' }}
                >
                  <span className="w-1 h-1 rounded-full" style={{ background: 'var(--green)' }} />
                  Online · Synced 2s ago
                </div>
              </div>

              <div className="flex gap-1.5 mb-2.5">
                {['All', 'Veg', 'Non-veg', "Chef's special", 'Hold bills (2)', 'Open orders (6)'].map((chip, i) => (
                  <span
                    key={chip}
                    className="rounded-full px-2 py-1 text-[8.5px] font-semibold whitespace-nowrap"
                    style={
                      i === 0
                        ? { background: 'var(--blue-600)', color: '#fff' }
                        : { background: 'var(--card)', color: 'var(--ink-soft)', border: '1px solid var(--line)' }
                    }
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex gap-2.5">
                <div className="w-[74px] flex-shrink-0 grid gap-1">
                  {['Favourites', 'Starters', 'Main Course', 'Breads', 'Biryani', 'Desserts'].map((c, i) => (
                    <div
                      key={c}
                      className="rounded-md px-1.5 py-1 text-[8.5px] font-semibold"
                      style={
                        i === 1
                          ? { background: 'var(--blue-600)', color: '#fff' }
                          : { background: 'var(--card)', color: 'var(--ink-soft)' }
                      }
                    >
                      {c}
                    </div>
                  ))}
                </div>

                <div className="flex-1 min-w-0 grid grid-cols-4 gap-1.5">
                  {[
                    ['Paneer Tikka', '₹280', true],
                    ['Chicken Malai Kebab', '₹340', false],
                    ['Veg Manchurian', '₹220', true],
                    ['Fish Amritsari', '₹390', false],
                    ['Dahi Ke Kebab', '₹260', true],
                    ['Mutton Seekh', '₹420', false],
                    ['Crispy Corn', '₹210', true],
                    ['Prawns Koliwada', '₹450', false],
                  ].map(([name, price, veg]) => (
                    <div
                      key={name as string}
                      className="rounded-lg p-1.5"
                      style={{ background: 'var(--card)', border: '1px solid var(--line)' }}
                    >
                      <div className="flex items-start gap-1">
                        <span
                          className="mt-[3px] w-1.5 h-1.5 flex-shrink-0"
                          style={{ border: `1px solid ${veg ? 'var(--green)' : '#EF4444'}` }}
                        />
                        <div className="text-[8.5px] font-semibold leading-tight">{name as string}</div>
                      </div>
                      <div className="text-[9px] font-bold mt-1.5">{price as string}</div>
                    </div>
                  ))}
                </div>

                {/* bill */}
                <div
                  className="w-[168px] flex-shrink-0 rounded-lg p-2"
                  style={{ background: 'var(--card)', border: '1px solid var(--line)' }}
                >
                  <div className="flex gap-1 mb-2">
                    {['Dine-in', 'Table T-07', 'Takeaway'].map((t, i) => (
                      <span
                        key={t}
                        className="rounded px-1.5 py-0.5 text-[7.5px] font-semibold"
                        style={
                          i === 1
                            ? { background: 'var(--blue-600)', color: '#fff' }
                            : { color: 'var(--ink-faint)' }
                        }
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    className="rounded px-1.5 py-1 mb-2 text-[7.5px] flex items-center justify-between"
                    style={{ background: 'var(--paper-alt)' }}
                  >
                    <span style={{ color: 'var(--ink-soft)' }}>Anita S. · 98450 12345</span>
                    <span className="font-semibold" style={{ color: 'var(--amber)' }}>
                      Gold
                    </span>
                  </div>
                  {[
                    ['Paneer Tikka', '2', '₹560'],
                    ['Fish Amritsari', '1', '₹390'],
                    ['Butter Naan', '4', '₹160'],
                  ].map(([n, q, amt]) => (
                    <div key={n} className="flex items-center justify-between text-[8px] py-0.5">
                      <span className="truncate" style={{ color: 'var(--ink-soft)' }}>
                        {n}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span style={{ color: 'var(--ink-faint)' }}>×{q}</span>
                        <span className="font-semibold">{amt}</span>
                      </span>
                    </div>
                  ))}
                  <div className="mt-2 pt-1.5" style={{ borderTop: '1px dashed var(--line-strong)' }}>
                    <Row label="Subtotal" value="₹1,110" />
                    <Row label="CGST 2.5%" value="₹27.75" />
                    <Row label="SGST 2.5%" value="₹27.75" />
                  </div>
                  <div
                    className="flex items-center justify-between mt-1.5 pt-1.5 text-[10px] font-bold"
                    style={{ borderTop: '1px solid var(--line)' }}
                  >
                    <span>Total payable</span>
                    <span>₹1,166</span>
                  </div>
                  <div
                    className="mt-2 rounded-md py-1.5 text-center text-[9px] font-bold text-white"
                    style={{ background: 'var(--blue-600)' }}
                  >
                    Settle bill
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KDS card, tucked under the left edge */}
      <div
        className="hidden md:block absolute rounded-xl overflow-hidden"
        style={{
          width: 232,
          left: -26,
          bottom: -46,
          background: '#0B1424',
          border: '1px solid var(--line-strong)',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.9)',
        }}
      >
        <div className="px-2.5 py-1.5 flex items-center justify-between" style={{ background: '#101A2E' }}>
          <span className="text-[8px] font-bold tracking-wider" style={{ color: '#9DB4E8' }}>
            KITCHEN DISPLAY
          </span>
          <span className="text-[8px] font-mono" style={{ color: 'var(--green)' }}>
            6 live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1 p-1.5">
          {[
            ['NEW', 'var(--blue-500)'],
            ['COOKING', 'var(--amber)'],
            ['READY', 'var(--green)'],
          ].map(([label, color]) => (
            <div key={label as string}>
              <div className="text-[7px] font-bold mb-1" style={{ color: color as string }}>
                {label as string}
              </div>
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="rounded p-1 mb-1"
                  style={{ background: '#141F35', borderLeft: `2px solid ${color as string}` }}
                >
                  <div className="text-[7px] font-bold" style={{ color: '#DCE6FF' }}>
                    T-0{i + 3} · {i + 2} items
                  </div>
                  <div className="text-[6.5px] mt-0.5" style={{ color: '#5D74A8' }}>
                    {i === 0 ? '2m 10s' : '5m 42s'}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Captain phone, tucked under the right edge */}
      <div
        className="hidden lg:block absolute rounded-[18px] overflow-hidden"
        style={{
          width: 132,
          right: -14,
          bottom: -54,
          background: 'var(--card)',
          border: '4px solid #0B1424',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.9)',
        }}
      >
        <div className="px-2 py-1.5" style={{ background: 'var(--blue-900)' }}>
          <div className="text-[7.5px] font-bold">Qresta Captain</div>
          <div className="text-[6px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Waiter · 6 tables
          </div>
        </div>
        <div className="p-1.5">
          <div
            className="rounded p-1.5 mb-1.5"
            style={{ background: 'rgba(30,94,255,0.12)', border: '1px solid rgba(30,94,255,0.35)' }}
          >
            <div className="text-[7px] font-bold">New QR order · T2</div>
            <div className="text-[6px] mt-0.5" style={{ color: 'var(--ink-faint)' }}>
              3 items · ₹547
            </div>
            <div
              className="mt-1 rounded py-1 text-center text-[6.5px] font-bold text-white"
              style={{ background: 'var(--green)' }}
            >
              Accept
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {['T1', 'T2', 'T3', 'T4', 'T5', 'T6'].map((t, i) => (
              <div
                key={t}
                className="rounded text-[6.5px] font-bold py-1.5 text-center"
                style={{
                  background: 'var(--paper-alt)',
                  borderTop: `2px solid ${i < 3 ? 'var(--amber)' : 'var(--green)'}`,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <span className="w-2 h-2 rounded-full block" style={{ background: color }} />;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[7.5px] py-[1px]">
      <span style={{ color: 'var(--ink-faint)' }}>{label}</span>
      <span style={{ color: 'var(--ink-soft)' }}>{value}</span>
    </div>
  );
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[7px] font-bold tracking-widest uppercase px-1 pt-2.5 pb-1"
      style={{ color: 'rgba(255,255,255,0.35)' }}
    >
      {children}
    </div>
  );
}

function SidebarItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className="rounded-md px-2 py-1 text-[9px] font-semibold mb-0.5"
      style={
        active
          ? { background: 'var(--blue-600)', color: '#fff' }
          : { color: 'rgba(255,255,255,0.62)' }
      }
    >
      {label}
    </div>
  );
}

/* ------------------------------ sections ----------------------------- */

function CapabilityStrip() {
  return (
    <section
      className="mt-24 sm:mt-28 py-6"
      style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {CAPABILITY_STRIP.map((item) => (
          <span
            key={item}
            className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--ink-faint)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function BusinessStats() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {BUSINESS_STATS.map((s) => (
          <div key={s.label} className="rounded-2xl p-5 card-lit">
            <div className="font-display text-3xl font-bold">{s.value}</div>
            <div className="text-sm mt-1" style={{ color: 'var(--ink-soft)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-5 h-px" style={{ background: 'var(--blue-500)' }} />
      <span
        className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: 'var(--blue-500)' }}
      >
        {children}
      </span>
    </div>
  );
}

function Modules() {
  return (
    <section id="modules" className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <SectionLabel>One platform · six modules</SectionLabel>
        </div>
        <h2
          className="font-display font-bold mx-auto mb-4"
          style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', maxWidth: 720 }}
        >
          Everything your outlet needs, nothing it doesn&apos;t.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 620 }}>
          Each module is strong on its own. Together they remove the double entry, the missed
          orders and the blind spots that cost restaurants money.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODULES.map((m) => (
          <div key={m.title} className="rounded-2xl p-6 card-lit transition-colors hover:bg-white/[0.03]">
            <ModuleIcon kind={m.icon} />
            <div className="font-display text-lg font-semibold mt-4 mb-2">{m.title}</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              {m.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ModuleIcon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    pos: (
      <>
        <rect x="3" y="4" width="14" height="12" rx="2" />
        <path d="M3 8h14M7 12h3" />
      </>
    ),
    kot: (
      <>
        <rect x="4" y="3" width="12" height="14" rx="2" />
        <path d="M7 7h6M7 10h6M7 13h3" />
      </>
    ),
    qr: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="11" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="11" width="6" height="6" rx="1" />
        <path d="M11 11h2v2h-2zM15 15h2v2h-2z" />
      </>
    ),
    online: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="M3 10h14M10 3c2 2.5 2 11.5 0 14M10 3c-2 2.5-2 11.5 0 14" />
      </>
    ),
    inventory: (
      <>
        <path d="M3 6l7-3 7 3v8l-7 3-7-3z" />
        <path d="M3 6l7 3 7-3M10 9v8" />
      </>
    ),
    reports: (
      <>
        <path d="M3 16V9M8 16V4M13 16v-5M18 16v-9" />
      </>
    ),
  };
  return (
    <span
      className="inline-grid place-items-center rounded-xl"
      style={{ width: 38, height: 38, background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="var(--blue-500)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[kind]}
      </svg>
    </span>
  );
}

function OnlineOrders() {
  return (
    <section id="online-orders" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="rounded-2xl overflow-hidden card-lit order-2 lg:order-1">
          <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--line)' }}>
            <span className="text-xs font-bold">Online orders</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--green)' }}>
              Auto-accept ON
            </span>
          </div>
          <div className="p-3 grid gap-2">
            {[
              ['Zomato', '#E23744', 'ZOM-48213', 'Preparing', '₹640', 'var(--amber)'],
              ['Swiggy', '#FC8019', 'SWG-91744', 'Rider assigned', '₹1,180', 'var(--blue-500)'],
              ['ONDC', '#1E5EFF', 'ONDC-2201', 'New', '₹420', 'var(--green)'],
              ['Website', '#7A5AF8', 'WEB-0338', 'Packed', '₹890', 'var(--green)'],
            ].map(([brand, color, id, status, amount, statusColor]) => (
              <div
                key={id as string}
                className="rounded-xl p-3 flex items-center gap-3"
                style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}
              >
                <span
                  className="w-8 h-8 rounded-lg grid place-items-center text-[9px] font-bold flex-shrink-0"
                  style={{ background: `${color as string}22`, color: color as string }}
                >
                  {(brand as string).slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold">{brand as string}</div>
                  <div className="text-[10px] font-mono truncate" style={{ color: 'var(--ink-faint)' }}>
                    {id as string}
                  </div>
                </div>
                <span className="text-[10px] font-semibold" style={{ color: statusColor as string }}>
                  {status as string}
                </span>
                <span className="text-xs font-bold w-14 text-right">{amount as string}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel>Aggregators, tamed</SectionLabel>
          <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Stop juggling tablets. Every Zomato and Swiggy order lands in one queue.
          </h2>
          <div className="grid gap-3 mb-7">
            {AGGREGATOR_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <Check />
                <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  {p}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            Talk to us about your channels
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span
      className="mt-0.5 w-4 h-4 rounded grid place-items-center flex-shrink-0"
      style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}
    >
      <svg width="9" height="7" viewBox="0 0 9 7" aria-hidden="true">
        <path d="M1 3.6L3.2 5.8 8 1" fill="none" stroke="var(--blue-500)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function OwnerView() {
  return (
    <section id="owner" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <SectionLabel>Owner&apos;s view</SectionLabel>
          <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Every outlet in your pocket. Approvals in one tap.
          </h2>
          <div className="grid gap-3 mb-7">
            {OWNER_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <Check />
                <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  {p}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3" style={{ maxWidth: 380 }}>
            <div className="rounded-2xl p-4 card-lit">
              <div className="font-display text-2xl font-bold">One screen</div>
              <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>
                for the whole chain
              </div>
            </div>
            <div className="rounded-2xl p-4 card-lit">
              <div className="font-display text-2xl font-bold">One tap</div>
              <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>
                approvals from anywhere
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <PhoneCard title="Today" accent="var(--blue-600)">
            <div className="text-[9px]" style={{ color: 'var(--ink-faint)' }}>
              Net sales · all outlets
            </div>
            <div className="font-display text-xl font-bold mt-0.5">₹4,86,900</div>
            <div className="flex items-end gap-1 h-16 mt-3">
              {[38, 52, 44, 68, 84, 62, 92, 74].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t"
                  style={{ height: `${h}%`, background: i > 5 ? 'var(--blue-500)' : 'var(--blue-700)' }}
                />
              ))}
            </div>
            <div className="grid gap-1.5 mt-3">
              {[
                ['Koramangala', '₹1,84,200'],
                ['Indiranagar', '₹1,42,600'],
                ['HSR Layout', '₹1,60,100'],
              ].map(([name, amt]) => (
                <div key={name} className="flex justify-between text-[9px]">
                  <span style={{ color: 'var(--ink-soft)' }}>{name}</span>
                  <span className="font-semibold">{amt}</span>
                </div>
              ))}
            </div>
          </PhoneCard>

          <PhoneCard title="Approvals" accent="var(--amber)" className="hidden sm:block mt-8">
            <div className="text-[9px] mb-2" style={{ color: 'var(--ink-faint)' }}>
              3 waiting on you
            </div>
            {[
              ['Discount 20%', 'Indiranagar · Bill #4471'],
              ['Void bill', 'Koramangala · ₹1,240'],
              ['Wastage entry', 'HSR · 2.4 kg paneer'],
            ].map(([title, sub]) => (
              <div
                key={title}
                className="rounded-lg p-2 mb-1.5"
                style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}
              >
                <div className="text-[9px] font-bold">{title}</div>
                <div className="text-[8px] mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                  {sub}
                </div>
                <div className="flex gap-1 mt-1.5">
                  <span className="flex-1 rounded py-1 text-center text-[8px] font-bold text-white" style={{ background: 'var(--green)' }}>
                    Approve
                  </span>
                  <span className="flex-1 rounded py-1 text-center text-[8px] font-bold" style={{ border: '1px solid var(--line-strong)', color: 'var(--ink-soft)' }}>
                    Decline
                  </span>
                </div>
              </div>
            ))}
          </PhoneCard>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({
  title,
  accent,
  children,
  className = '',
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[22px] overflow-hidden flex-shrink-0 ${className}`}
      style={{
        width: 178,
        background: 'var(--card)',
        border: '5px solid #0B1424',
        boxShadow: '0 34px 70px -26px rgba(0,0,0,0.9)',
      }}
    >
      <div className="px-3 py-2 flex items-center justify-between" style={{ background: 'var(--blue-900)' }}>
        <span className="text-[10px] font-bold">{title}</span>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function ProductFacts() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
      <div className="text-center mb-10">
        <div className="flex justify-center">
          <SectionLabel>What changes</SectionLabel>
        </div>
        <h2 className="font-display font-bold mx-auto" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', maxWidth: 640 }}>
          One platform instead of five, from the first shift.
        </h2>
      </div>
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

function Customers() {
  return (
    <section id="customers" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <SectionLabel>Who it&apos;s for</SectionLabel>
        </div>
        <h2 className="font-display font-bold mx-auto mb-4" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', maxWidth: 640 }}>
          Built for every kind of dining business.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 580 }}>
          The same platform, configured for how your floor actually runs.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CUSTOMER_TYPES.map((c) => (
          <div key={c.title} className="rounded-2xl p-6 card-lit">
            <div className="font-display text-lg font-semibold mb-2">{c.title}</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl p-6 card-lit">
            <div className="text-sm mb-4" style={{ color: 'var(--amber)' }} aria-hidden="true">
              ★★★★★
            </div>
            <blockquote className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 pt-4 text-sm" style={{ borderTop: '1px solid var(--line)' }}>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                {t.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/** One card each for the other two products, so a gym owner or a cloud
 *  kitchen who lands here finds their way — without turning the
 *  restaurant page into a catalogue. */
function OtherProducts() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-16 sm:pb-20 grid gap-5">
      <Link
        href="/fitbizz"
        className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-3xl p-6 sm:p-8 card-lit transition-colors hover:bg-white/[0.03]"
      >
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <FitBizzMark size={30} />
            <FitBizzWordmark size={18} />
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] rounded px-1.5 py-0.5 ml-1"
              style={{ background: 'var(--blue-50)', color: 'var(--blue-500)' }}
            >
              Also from Qresta
            </span>
          </div>
          <h2 className="font-display font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Run a gym or a studio? The same care, built for the fitness floor.
          </h2>
          <p className="text-sm sm:text-base mb-5" style={{ color: 'var(--ink-soft)', maxWidth: 560 }}>
            FitBizz is our gym management software: the front desk, the trainers and the owner on
            one system, with every rupee your members pay settling into your own account.
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--blue-500)' }}>
            Explore FitBizz
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
        <div className="lg:col-span-5 grid gap-2.5">
          {FITBIZZ_POINTS.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}>
              <Check />
              <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                {p}
              </span>
            </div>
          ))}
        </div>
      </Link>

      <Link
        href="/cloudkitchen"
        className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-3xl p-6 sm:p-8 card-lit transition-colors hover:bg-white/[0.03]"
      >
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <CloudKitchenMark size={30} />
            <CloudKitchenWordmark size={18} />
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] rounded px-1.5 py-0.5 ml-1"
              style={{ background: 'var(--blue-50)', color: 'var(--blue-500)' }}
            >
              Also from Qresta
            </span>
          </div>
          <h2 className="font-display font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Delivery only, no dining room? There is a version built for that.
          </h2>
          <p className="text-sm sm:text-base mb-5" style={{ color: 'var(--ink-soft)', maxWidth: 560 }}>
            CloudKitchen is our cloud kitchen software: every channel in one queue, a kitchen
            display that keeps time, and a real food cost behind every dish you send out.
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--blue-500)' }}>
            Explore CloudKitchen
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
        <div className="lg:col-span-5 grid gap-2.5">
          {CLOUDKITCHEN_POINTS.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}>
              <Check />
              <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                {p}
              </span>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}

function ClosingCta({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-20 sm:pb-24">
      <div
        className="relative rounded-3xl px-6 py-14 sm:py-20 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--blue-700) 0%, var(--blue-600) 55%, var(--blue-500) 100%)',
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="relative">
          <h2
            className="font-display font-bold mb-4 text-white"
            style={{ fontSize: 'clamp(1.85rem, 4vw, 2.9rem)', letterSpacing: '-0.02em' }}
          >
            See Qresta on your own menu.
          </h2>
          <p className="mx-auto mb-9 text-base" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 560 }}>
            Book a 20-minute demo. We import your menu and show you a live bill before the call
            ends, on your own dishes and your own tables.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onDemo}
              className="rounded-xl px-6 py-3.5 text-sm font-bold"
              style={{ background: '#fff', color: 'var(--blue-700)' }}
            >
              Book a demo
            </button>
            <Link
              href="/contact"
              className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.55)' }}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
