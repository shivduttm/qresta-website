'use client';

import Link from 'next/link';
import { useLeadModals } from '@/components/lead-modals';
import { CloudKitchenMark } from '@/components/brand';
import { CLOUDKITCHEN } from '@/lib/site';

/* =====================================================================
   Content
   =====================================================================

   Everything a marketer would edit is data up here; the layout below
   stays layout. This page, with CloudKitchenHeader/CloudKitchenFooter
   from components/cloudkitchen-chrome.tsx, is the whole cloud-kitchen
   site: nothing on it links to a sign-in or sign-up — visitors come in
   through the demo request and the contact page.

   Same rules as the rest of this site. No prices, plans, trials or
   anything that reads as commercial terms — that conversation happens on
   the demo call. Every number in PRODUCT_FACTS is a checkable product
   fact, never a business metric.
   ===================================================================== */

/** True product capabilities, phrased short. */
const CAPABILITY_STRIP = [
  'Swiggy & Zomato in one queue',
  'Live kitchen display',
  'Recipe-level food cost',
  'Multi-brand, one address',
  'GST tax invoices',
  'Rider dispatch & COD',
];

const MODULES = [
  {
    icon: 'orders',
    title: 'Orders from every channel',
    body: 'Swiggy, Zomato, ONDC, your own site and phone orders arrive in one queue with one status flow. Accept, promise a time, and the same order is on the kitchen screen a second later.',
  },
  {
    icon: 'kitchen',
    title: 'Kitchen display that keeps time',
    body: 'One ticket per station — tandoor, curry, wok, cold, beverage. Cards colour as they age past the target, rushes jump the queue, and a hold or an issue reaches the floor instead of a shout.',
  },
  {
    icon: 'menu',
    title: 'Menus, variants & add-ons',
    body: 'Several brands out of one kitchen, each with its own menu, categories, half-and-full variants, add-on groups, timings and station routing. Publish to every channel in one action.',
  },
  {
    icon: 'costing',
    title: 'Recipes & true food cost',
    body: 'A recipe per dish decides what a sale deducts from stock and what that dish actually costs — ingredients, packaging and overhead. Versioned, so a price change never rewrites last month.',
  },
  {
    icon: 'inventory',
    title: 'Inventory & purchasing',
    body: 'Live stock per outlet, wastage that has to be explained, low-stock alerts that become a purchase order, goods receipts that update cost, and what each supplier is still owed.',
  },
  {
    icon: 'delivery',
    title: 'Dispatch, payments & reports',
    body: 'Assign in-house riders or book a partner, reconcile the cash they carry, raise GST invoices and refunds, and read sales, dishes, customers and gross profit for any date range.',
  },
] as const;

const CHANNEL_POINTS = [
  'Aggregator orders arrive on a signed webhook and become normal orders — same board, same kitchen screen',
  'One menu, published to Swiggy, Zomato, ONDC, magicpin and your own storefront',
  'An item marked out of stock on the kitchen screen stops selling everywhere at once',
  'Every webhook, sync and rejection is logged against the channel, so a missing order has an answer',
];

const CHANNELS = ['Swiggy', 'Zomato', 'ONDC', 'magicpin', 'Own website', 'Phone & walk-in'];

const COSTING_POINTS = [
  'Every dish carries a recipe, so a sale deducts real grams and adds a real cost',
  'Food cost, packaging and overhead per plate, against the price you actually charge',
  'Gross profit after discounts, delivery, wastage and refunds — not just revenue',
  'Wastage is a movement someone has to explain, not a number that quietly disappears',
];

/** Product facts phrased as numbers — none of these is a performance claim. */
const PRODUCT_FACTS = [
  { value: '22', label: 'Integrations in the catalogue', sub: 'Aggregators, gateways, riders, printers, books' },
  { value: '7', label: 'Order states, one flow', sub: 'New to completed, the same on every channel' },
  { value: '6', label: 'Staff roles with a permissions matrix', sub: 'Owner, manager, kitchen, packing, dispatch, staff' },
  { value: '7', label: 'Reports, each exportable to CSV', sub: 'Sales, orders, dishes, customers, stock, profit, tax' },
];

const CUSTOMER_TYPES = [
  { title: 'Delivery-only kitchens', body: 'No counter, no table — just tickets. The whole operation is the screen, the stock and the rider.' },
  { title: 'Multi-brand operators', body: 'Four brands out of one address, each with its own menu and its own numbers, cooked by one team.' },
  { title: 'Aggregator-first kitchens', body: 'Most orders arrive from Swiggy and Zomato. They land in the same queue as everything else, with the same clock.' },
  { title: 'Cloud kitchen networks', body: 'Several outlets, stock and staff per outlet, and one owner view that rolls up across all of them.' },
  { title: 'Restaurant delivery arms', body: 'A dine-in restaurant running a separate delivery kitchen that needs its own menu, costs and reports.' },
  { title: 'Central production units', body: 'A base kitchen that preps for the others, with transfers between outlets and recipe costing on every batch.' },
];

/* ===================================================================== */

export default function CloudKitchenPage() {
  const { openDemoModal } = useLeadModals();
  const onDemo = () => openDemoModal('cloudkitchen');

  return (
    <div className="overflow-x-hidden">
      <Hero onDemo={onDemo} />
      <CapabilityStrip />
      <Modules />
      <Channels />
      <Costing onDemo={onDemo} />
      <ProductFacts />
      <Customers />
      <ClosingCta onDemo={onDemo} />
    </div>
  );
}

/* ------------------------------- hero -------------------------------- */

function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" style={{ height: 900 }} />
      <div className="absolute pointer-events-none glow" style={{ width: 900, height: 520, top: -170, left: '50%', transform: 'translateX(-50%)' }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-10 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold"
          style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)', color: 'var(--ink)' }}
        >
          <CloudKitchenMark size={18} />
          <span>{CLOUDKITCHEN.brandName}</span>
          <span style={{ color: 'var(--ink-faint)' }}>·</span>
          Cloud kitchen management software
        </div>

        <h1
          className="font-display font-bold mx-auto mt-7 mb-6"
          style={{ fontSize: 'clamp(2.35rem, 6.2vw, 4.4rem)', lineHeight: 1.04, letterSpacing: '-0.03em', maxWidth: 980 }}
        >
          Every channel, one queue. Every dish, a real cost.
        </h1>

        <p className="mx-auto text-base sm:text-lg" style={{ color: 'var(--ink-soft)', maxWidth: 700, lineHeight: 1.6 }}>
          Swiggy, Zomato and your own orders on one board. A kitchen display that keeps time by
          station. Recipes that deduct real stock and tell you what each plate actually earns —
          across every brand you run from one address.
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
            href="/cloudkitchen#modules"
            className="rounded-xl px-6 py-3.5 text-sm font-bold inline-flex items-center gap-2 transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            See what it does
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 1l5 4-5 4z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pb-4">
        <KdsMockup />
      </div>
    </section>
  );
}

/* ----------------------------- mockups ------------------------------- */

/** The hero's product shot: the kitchen display, the screen this product
 *  lives or dies on. Drawn in markup, like the POS mockup on the home
 *  page, so it stays crisp and never goes stale. A fictional demo kitchen. */
function KdsMockup() {
  const COLUMNS: Array<{
    title: string;
    color: string;
    tickets: Array<{ order: string; station: string; brand: string; age: string; target: string; late?: boolean; warn?: boolean; items: Array<[string, string]>; note?: string }>;
  }> = [
    {
      title: 'New',
      color: '#3B76FF',
      tickets: [
        {
          order: 'SR-1142',
          station: 'Curry',
          brand: 'Punjab Express · Zomato',
          age: '2m',
          target: '25m',
          items: [
            ['2', 'Hyderabadi Chicken Biryani · Full'],
            ['1', 'Dal Makhani'],
          ],
          note: 'Less spicy',
        },
        { order: 'SR-1142', station: 'Tandoor', brand: 'Punjab Express · Zomato', age: '2m', target: '8m', items: [['4', 'Garlic Naan']] },
      ],
    },
    {
      title: 'Cooking',
      color: '#F79009',
      tickets: [
        {
          order: 'SR-1139',
          station: 'Wok',
          brand: 'Wok Republic · Swiggy',
          age: '14m',
          target: '12m',
          warn: true,
          items: [
            ['1', 'Schezwan Fried Rice'],
            ['1', 'Chilli Chicken'],
          ],
        },
        { order: 'SR-1138', station: 'Cold Station', brand: 'Green Bowl · Own site', age: '9m', target: '14m', items: [['2', 'Paneer Buddha Bowl']] },
      ],
    },
    {
      title: 'Ready',
      color: '#12B76A',
      tickets: [
        { order: 'SR-1136', station: 'Tandoor', brand: 'Punjab Express · Swiggy', age: '21m', target: '18m', late: true, items: [['1', 'Paneer Tikka']] },
        { order: 'SR-1136', station: 'Beverage', brand: 'Punjab Express · Swiggy', age: '21m', target: '4m', late: true, items: [['2', 'Masala Chaas']] },
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden card-lit" style={{ boxShadow: '0 50px 120px -40px rgba(0,0,0,0.95)' }}>
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid var(--line)' }}>
          <span className="flex gap-1.5">
            <Dot color="#FF5F57" />
            <Dot color="#FEBC2E" />
            <Dot color="#28C840" />
          </span>
          <div className="ml-2 flex-1 rounded-md px-3 py-1 text-[11px] font-mono" style={{ background: 'var(--paper-alt)', color: 'var(--ink-faint)' }}>
            qresta.in/cloudkitchen/dashboard/kitchen
          </div>
        </div>

        <div className="scroll-x">
          <div className="flex min-w-[880px]" style={{ background: 'var(--paper-alt)' }}>
            {/* sidebar */}
            <div className="w-[186px] flex-shrink-0 p-3" style={{ background: 'var(--blue-900)' }}>
              <div className="flex items-center gap-2 px-1 pb-3">
                <CloudKitchenMark size={22} />
                <div>
                  <div className="text-[12px] font-bold leading-none">CloudKitchen</div>
                  <div className="text-[7px] font-mono tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    KITCHEN OPERATIONS
                  </div>
                </div>
              </div>
              <div className="rounded-lg px-2 py-1.5 mb-3" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div className="text-[10px] font-bold">Spice Route Kitchens</div>
                <div className="text-[8px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  3 brands · 2 outlets · Bengaluru
                </div>
              </div>
              <SidebarLabel>Operations</SidebarLabel>
              {['Dashboard', 'Orders', 'Kitchen Display', 'Delivery & Dispatch'].map((item) => (
                <SidebarItem key={item} label={item} active={item === 'Kitchen Display'} badge={item === 'Orders' ? '6' : undefined} />
              ))}
              <SidebarLabel>Catalogue & supply</SidebarLabel>
              {['Menu', 'Recipes & Costing', 'Inventory', 'Purchasing'].map((item) => (
                <SidebarItem key={item} label={item} badge={item === 'Inventory' ? '2' : undefined} />
              ))}
              <SidebarLabel>Money</SidebarLabel>
              {['Payments & GST', 'Reports'].map((item) => (
                <SidebarItem key={item} label={item} />
              ))}
            </div>

            {/* the kitchen display itself — dark, the way it runs on the wall */}
            <div className="flex-1 min-w-0 p-3" style={{ background: '#0d1526' }}>
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <div className="text-[13px] font-bold leading-none text-white">Kitchen display</div>
                  <div className="text-[8px] mt-1" style={{ color: '#8FB0FF' }}>
                    6 open tickets · 38 finished today · refreshes every 15s
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <KdsPill>All stations</KdsPill>
                  <KdsPill accent>Refresh</KdsPill>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {COLUMNS.map((col) => (
                  <div key={col.title}>
                    <div className="flex items-center justify-between px-1 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: col.color }} />
                        <span className="text-[9px] font-bold text-white">{col.title}</span>
                      </span>
                      <span className="text-[8px] font-mono" style={{ color: '#6f87be' }}>
                        {col.tickets.length}
                      </span>
                    </div>
                    <div className="grid gap-1.5">
                      {col.tickets.map((t, i) => (
                        <div
                          key={t.order + i}
                          className="rounded-lg overflow-hidden"
                          style={{ background: '#16213a', border: `1px solid ${t.late ? 'rgba(239,68,68,0.5)' : '#25325a'}` }}
                        >
                          <div className="h-0.5" style={{ background: t.late ? '#EF4444' : t.warn ? '#F79009' : col.color }} />
                          <div className="px-2 py-1.5">
                            <div className="flex items-start justify-between gap-1.5">
                              <div className="min-w-0">
                                <div className="text-[9.5px] font-extrabold text-white">{t.order}</div>
                                <div className="text-[7px] truncate" style={{ color: '#8FB0FF' }}>
                                  {t.station} · {t.brand}
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-[9px] font-extrabold" style={{ color: t.late ? '#FCA5A5' : t.warn ? '#FCD34D' : '#fff' }}>
                                  {t.age}
                                </div>
                                <div className="text-[6.5px]" style={{ color: '#6f87be' }}>
                                  target {t.target}
                                </div>
                              </div>
                            </div>
                            <div className="mt-1 grid gap-0.5">
                              {t.items.map(([qty, name]) => (
                                <div key={name} className="flex items-start gap-1 text-[8px] text-white">
                                  <span className="font-extrabold" style={{ color: '#8FB0FF' }}>
                                    {qty}×
                                  </span>
                                  <span className="truncate">{name}</span>
                                </div>
                              ))}
                            </div>
                            {t.note && (
                              <div className="mt-1 rounded px-1.5 py-0.5 text-[7px]" style={{ background: 'rgba(247,144,9,0.16)', color: '#FCD34D' }}>
                                {t.note}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />;
}

function KdsPill({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="rounded-md px-2 py-1 text-[8px] font-bold"
      style={accent ? { background: '#1E5EFF', color: '#fff' } : { background: 'rgba(255,255,255,0.08)', color: '#C7D5F5' }}
    >
      {children}
    </span>
  );
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[7px] font-mono uppercase tracking-[0.18em] px-2 pt-2 pb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
      {children}
    </div>
  );
}

function SidebarItem({ label, active = false, badge }: { label: string; active?: boolean; badge?: string }) {
  return (
    <div
      className="rounded-md px-2 py-[5px] text-[9px] font-semibold mb-0.5 flex items-center justify-between gap-1"
      style={active ? { background: 'rgba(255,255,255,0.14)', color: '#fff' } : { color: 'rgba(255,255,255,0.68)' }}
    >
      <span>{label}</span>
      {badge && (
        <span className="rounded-full px-1 text-[7px] font-bold" style={{ background: '#EF4444', color: '#fff' }}>
          {badge}
        </span>
      )}
    </div>
  );
}

/* ------------------------------ sections ----------------------------- */

function CapabilityStrip() {
  return (
    <section className="mt-24 sm:mt-28 py-6" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
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

function Modules() {
  return (
    <section id="modules" className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <SectionLabel>One platform · six modules</SectionLabel>
        </div>
        <h2 className="font-display font-bold mx-auto mb-4" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', maxWidth: 720 }}>
          Everything a cloud kitchen runs on, nothing it has to work around.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 620 }}>
          Three aggregator tablets, a printed ticket spike, a stock register and a spreadsheet
          become one system the kitchen, the packers and the owner all read.
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
    orders: (
      <>
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M6.5 7.5h7M6.5 10.5h7M6.5 13.5h4" />
      </>
    ),
    kitchen: (
      <>
        <rect x="2.5" y="4" width="15" height="10" rx="1.5" />
        <path d="M6 17h8M10 14v3" />
        <path d="M6.5 8.5h3M6.5 11h5" />
      </>
    ),
    menu: (
      <>
        <path d="M10 3.5c3.6 0 6.5 2.4 6.5 5.5H3.5c0-3.1 2.9-5.5 6.5-5.5Z" />
        <path d="M2.5 12h15" />
        <path d="M4 15h12" />
      </>
    ),
    costing: (
      <>
        <path d="M3 16.5h14" />
        <path d="M4.5 13V8M8.5 13V4.5M12.5 13v-6M16.5 13V6" />
      </>
    ),
    inventory: (
      <>
        <path d="M3 6.5l7-3.5 7 3.5v7l-7 3.5-7-3.5z" />
        <path d="M3 6.5l7 3.5 7-3.5M10 10v7" />
      </>
    ),
    delivery: (
      <>
        <rect x="1.5" y="6" width="10" height="7" rx="1" />
        <path d="M11.5 8.5h3l2.5 2.5v2h-5.5z" />
        <circle cx="5" cy="15" r="1.6" />
        <circle cx="14" cy="15" r="1.6" />
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

function Channels() {
  return (
    <section id="channels" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="rounded-2xl overflow-hidden card-lit order-2 lg:order-1">
          <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--line)' }}>
            <span className="text-xs font-bold">Orders · today</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--green)' }}>
              ● all channels live
            </span>
          </div>
          <div className="p-3 grid gap-2">
            {[
              ['SR-1142', 'Zomato · ZOM-100112', '2 Biryani, 4 Naan', '₹1,284', 'New', 'var(--blue-500)'],
              ['SR-1139', 'Swiggy · SWI-100109', 'Fried rice, Chilli chicken', '₹488', 'Preparing', 'var(--amber)'],
              ['SR-1138', 'Own website', '2 Paneer Buddha Bowl', '₹578', 'Preparing', 'var(--amber)'],
              ['SR-1136', 'Swiggy · SWI-100106', 'Paneer Tikka, 2 Chaas', '₹447', 'Ready · late', 'var(--red-600)'],
              ['SR-1135', 'Phone order', 'Butter chicken, 4 Naan', '₹625', 'Dispatched', 'var(--green)'],
            ].map(([id, channel, items, amount, status, statusColor]) => (
              <div key={id} className="rounded-xl p-3 flex items-center gap-3" style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}>
                <span className="w-8 h-8 rounded-lg grid place-items-center text-[8px] font-bold flex-shrink-0" style={{ background: 'var(--blue-50)', color: 'var(--blue-500)' }}>
                  {String(channel).slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold">
                    {id} <span style={{ color: 'var(--ink-faint)' }}>· {channel}</span>
                  </div>
                  <div className="text-[10px] truncate" style={{ color: 'var(--ink-faint)' }}>
                    {items}
                  </div>
                </div>
                <span className="text-[10px] font-semibold whitespace-nowrap" style={{ color: statusColor }}>
                  {status}
                </span>
                <span className="text-xs font-bold w-14 text-right">{amount}</span>
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {CHANNELS.map((c) => (
                <span key={c} className="rounded-md px-2 py-1 text-[10px] font-semibold" style={{ background: 'var(--card)', border: '1px solid var(--line-strong)', color: 'var(--ink-soft)' }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel>One queue, not three tablets</SectionLabel>
          <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Stop reading orders off three screens and a printer.
          </h2>
          <div className="grid gap-3 mb-7">
            {CHANNEL_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <Check />
                <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  {p}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/cloudkitchen/contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            Ask about connecting your channels
            <span aria-hidden="true">→</span>
          </Link>
        </div>
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

function Costing({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="costing" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <SectionLabel>What the plate actually earns</SectionLabel>
          <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Revenue is easy to see. This shows you what is left.
          </h2>
          <div className="grid gap-3 mb-7">
            {COSTING_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <Check />
                <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  {p}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={onDemo}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            See it costed on your own menu
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden card-lit">
          <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--line)' }}>
            <span className="text-xs font-bold">Hyderabadi Chicken Biryani · recipe v3</span>
            <span className="text-[10px] font-mono rounded px-1.5 py-0.5" style={{ background: 'rgba(18,183,106,0.12)', color: 'var(--green)' }}>
              26% food cost
            </span>
          </div>
          <div className="p-4">
            <div className="grid gap-1.5 mb-4">
              {[
                ['Basmati rice', '220 g', '₹24.20'],
                ['Chicken, bone-in', '250 g', '₹57.50'],
                ['Onion', '90 g', '₹3.42'],
                ['Refined oil', '40 ml', '₹5.80'],
                ['Biryani masala', '18 g', '₹11.16'],
              ].map(([name, qty, cost]) => (
                <div key={name} className="flex items-center justify-between text-[11.5px]">
                  <span style={{ color: 'var(--ink-soft)' }}>{name}</span>
                  <span className="flex items-center gap-3">
                    <span className="font-mono" style={{ color: 'var(--ink-faint)' }}>
                      {qty}
                    </span>
                    <span className="font-semibold w-14 text-right">{cost}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="grid gap-1" style={{ borderTop: '1px solid var(--line)', paddingTop: 12 }}>
              {[
                ['Ingredients', '₹102.08', false],
                ['Packaging', '₹12.00', false],
                ['Overhead', '₹15.00', false],
                ['Total cost', '₹129.08', true],
                ['Sells for', '₹549.00', false],
              ].map(([label, value, bold]) => (
                <div key={label as string} className="flex items-center justify-between" style={{ fontSize: bold ? 13 : 11.5, fontWeight: bold ? 700 : 400 }}>
                  <span style={{ color: bold ? undefined : 'var(--ink-soft)' }}>{label as string}</span>
                  <span className="font-semibold">{value as string}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl p-3 flex items-center justify-between" style={{ background: 'rgba(18,183,106,0.10)', border: '1px solid rgba(18,183,106,0.32)' }}>
              <span className="text-[11.5px] font-semibold" style={{ color: 'var(--ink-soft)' }}>
                Gross margin
              </span>
              <span className="text-base font-bold" style={{ color: 'var(--green)' }}>
                ₹419.92 · 76.5%
              </span>
            </div>
            <div className="text-[10px] mt-2" style={{ color: 'var(--ink-faint)' }}>
              Every sale of this dish deducts these exact quantities from the outlet&apos;s stock.
            </div>
          </div>
        </div>
      </div>
    </section>
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
          One system instead of three tablets, a spike and a spreadsheet.
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
          <SectionLabel>Who it’s for</SectionLabel>
        </div>
        <h2 className="font-display font-bold mx-auto mb-4" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', maxWidth: 640 }}>
          Built for kitchens that never see a customer walk in.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 580 }}>
          The same platform, set up for how your kitchen actually runs.
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
            <CloudKitchenMark size={44} />
          </div>
          <h2 className="font-display font-bold mb-4 text-white" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.9rem)', letterSpacing: '-0.02em' }}>
            See CloudKitchen on your own menu.
          </h2>
          <p className="mx-auto mb-9 text-base" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 560 }}>
            Book a 20-minute demo and we will set up a brand, cost one of your dishes and run an
            order from the aggregator to the rider while you watch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={onDemo} className="rounded-xl px-6 py-3.5 text-sm font-bold" style={{ background: '#fff', color: 'var(--blue-700)' }}>
              Book a demo
            </button>
            <Link
              href="/cloudkitchen/contact"
              className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.55)' }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
