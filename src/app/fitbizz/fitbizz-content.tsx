'use client';

import Link from 'next/link';
import { useLeadModals } from '@/components/lead-modals';
import { FitBizzMark, FitBizzWordmark } from '@/components/brand';
import { FITBIZZ } from '@/lib/site';

/* =====================================================================
   Content
   =====================================================================

   Same shape as the restaurant page (home-content.tsx): everything a
   marketer would edit is data up here, the layout below stays layout.

   Same rules, too. No prices, plans, trials or anything that reads as
   commercial terms — that conversation happens on the demo call. Every
   number in PRODUCT_FACTS is a checkable product fact, never a business
   metric; customer counts and quotes would belong in the same kind of
   empty-until-real arrays the home page keeps.
   ===================================================================== */

/** True product capabilities, phrased short. */
const CAPABILITY_STRIP = [
  'QR & biometric check-in',
  'GST tax invoices',
  'Your own payment gateway',
  'Supplements POS',
  'Trainer workspace',
  'Multi-branch',
];

const MODULES = [
  {
    icon: 'members',
    title: 'Members & memberships',
    body: 'Full member profiles with documents, notes and tags. Sell, renew, upgrade, freeze, transfer or cancel a membership from one screen, with every change on the member’s own timeline.',
  },
  {
    icon: 'attendance',
    title: 'Attendance & access',
    body: 'Check-in from the front desk, a QR kiosk or biometric devices. Double punches are merged, unknown fingerprints go to a review queue, and every visit lands on the member’s record.',
  },
  {
    icon: 'trainers',
    title: 'Trainers & personal training',
    body: 'Roles and a permissions matrix for owners, managers, front desk, trainers and accountants. PT packages, sessions, no-shows and trainer commissions are tracked as they happen.',
  },
  {
    icon: 'fitness',
    title: 'Workouts, diets & progress',
    body: 'A workout builder on a ready exercise library, diet plans per member, assessments and goals, and progress photos that are stored only with the member’s consent.',
  },
  {
    icon: 'billing',
    title: 'Billing, invoices & POS',
    body: 'GST tax invoices with CGST/SGST or IGST, your own numbering, PDF and auto-email, refunds and payment links. A supplements counter with stock, suppliers and low-stock alerts — every sale becomes an invoice.',
  },
  {
    icon: 'growth',
    title: 'Leads, communication & reports',
    body: 'A Kanban of enquiries with follow-ups, templated campaigns and automatic renewal reminders, expenses with approvals, and eight reports that export to CSV.',
  },
] as const;

const GATEWAY_POINTS = [
  'Memberships, PT and supplement sales settle straight into the gym’s own account',
  'Connect Razorpay, PayU, Cashfree, PhonePe, Paytm, CCAvenue, Instamojo, Easebuzz or Stripe',
  'Send a payment link for dues or a renewal; the member pays from their phone',
  'Gateway keys are stored encrypted, and FitBizz never holds your money',
];

const GATEWAYS = ['Razorpay', 'PayU', 'Cashfree', 'PhonePe', 'Paytm', 'CCAvenue', 'Instamojo', 'Easebuzz', 'Stripe'];

const OWNER_POINTS = [
  'Today’s check-ins, dues collected and renewals due, across every branch',
  'Expenses and refunds wait for your approval, not for you to be there',
  'Trainers see only their own members and sessions; accountants only the books',
];

/** Product facts phrased as numbers — none of these is a performance claim. */
const PRODUCT_FACTS = [
  { value: '9', label: 'Payment gateways you can connect', sub: 'Members pay you, not us' },
  { value: '5', label: 'Staff roles with a permissions matrix', sub: 'Owner, manager, front desk, trainer, accountant' },
  { value: '3', label: 'Ways for a member to check in', sub: 'Front desk, QR kiosk, biometric device' },
  { value: '8', label: 'Reports, each exportable to CSV', sub: 'Revenue, dues, attendance, PT and more' },
];

const CUSTOMER_TYPES = [
  { title: 'Gyms', body: 'Memberships, front-desk check-ins, trainers and a supplements counter — the whole floor on one system.' },
  { title: 'Fitness & CrossFit studios', body: 'Package-based training, PT sessions and progress tracking for members who come to train, not to browse.' },
  { title: 'Yoga & Pilates studios', body: 'Session packs, teacher schedules and renewal reminders that keep a small studio full without chasing.' },
  { title: 'Personal training studios', body: 'PT packages, no-shows and commissions tracked per trainer, with each client’s plan and progress in one place.' },
  { title: 'Multi-branch chains', body: 'One owner view across every branch, branch-level kiosks and staff, and reports that roll up cleanly.' },
  { title: 'Hotel & society gyms', body: 'Member access, attendance logs and billing for facilities that run alongside something else.' },
];

/* ===================================================================== */

export default function FitBizzPage() {
  const { openDemoModal } = useLeadModals();
  const onDemo = () => openDemoModal('fitbizz');

  return (
    <div className="overflow-x-hidden">
      <Hero onDemo={onDemo} />
      <CapabilityStrip />
      <Modules />
      <Payments />
      <OwnerView />
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
      <div
        className="absolute pointer-events-none glow"
        style={{ width: 900, height: 520, top: -170, left: '50%', transform: 'translateX(-50%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-10 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold"
          style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)', color: 'var(--ink)' }}
        >
          <FitBizzMark size={18} />
          <FitBizzWordmark size={13} />
          <span style={{ color: 'var(--ink-faint)' }}>·</span>
          Gym management software by Qresta
        </div>

        <h1
          className="font-display font-bold mx-auto mt-7 mb-6"
          style={{ fontSize: 'clamp(2.35rem, 6.2vw, 4.4rem)', lineHeight: 1.04, letterSpacing: '-0.03em', maxWidth: 980 }}
        >
          Run the whole gym from one screen. Keep every rupee your members pay.
        </h1>

        <p className="mx-auto text-base sm:text-lg" style={{ color: 'var(--ink-soft)', maxWidth: 700, lineHeight: 1.6 }}>
          Memberships, QR and biometric check-in, trainers and PT, GST invoices, a supplements
          counter, leads and reports — built for Indian gyms and studios. Members pay into your
          own payment gateway, not ours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
          <button
            onClick={onDemo}
            className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--blue-600)', boxShadow: '0 12px 32px -12px rgba(30,94,255,0.9)' }}
          >
            Book a demo
          </button>
          {/* Proxied app route — a plain anchor on purpose (see next.config.ts). */}
          <a
            href={FITBIZZ.registerPath}
            className="rounded-xl px-6 py-3.5 text-sm font-bold inline-flex items-center gap-2 transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            Create your gym’s account
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="mt-4 text-xs" style={{ color: 'var(--ink-faint)' }}>
          Already on FitBizz?{' '}
          <a href={FITBIZZ.loginPath} className="font-semibold hover:underline" style={{ color: 'var(--ink-soft)' }}>
            Sign in
          </a>
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pb-4">
        <DashboardMockup />
      </div>
    </section>
  );
}

/* ----------------------------- mockups ------------------------------- */

/** The hero's product shot: the gym owner's dashboard. Drawn in markup,
 *  like the POS mockup on the home page, so it stays crisp and never
 *  goes stale. Names and figures are a fictional demo gym. */
function DashboardMockup() {
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
            qresta.in/fitbizz/dashboard
          </div>
        </div>

        <div className="scroll-x">
          <div className="flex min-w-[880px]" style={{ background: 'var(--paper-alt)' }}>
            {/* sidebar */}
            <div className="w-[186px] flex-shrink-0 p-3" style={{ background: 'var(--blue-900)' }}>
              <div className="flex items-center gap-2 px-1 pb-3">
                <FitBizzMark size={22} />
                <div>
                  <div className="text-[12px] font-bold leading-none">FitBizz</div>
                  <div className="text-[7px] font-mono tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    GYM MANAGEMENT
                  </div>
                </div>
              </div>
              <div className="rounded-lg px-2 py-1.5 mb-3" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div className="text-[10px] font-bold">Iron Temple Fitness</div>
                <div className="text-[8px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Branch 1 of 2 · Bhubaneswar
                </div>
              </div>
              <SidebarLabel>Members</SidebarLabel>
              {['Dashboard', 'Members', 'Memberships', 'Leads & CRM'].map((item) => (
                <SidebarItem key={item} label={item} active={item === 'Dashboard'} />
              ))}
              <SidebarLabel>Operations</SidebarLabel>
              {['Attendance', 'Trainers & Staff', 'Personal Training'].map((item) => (
                <SidebarItem key={item} label={item} />
              ))}
              <SidebarLabel>Sales & billing</SidebarLabel>
              {['Payments & Billing', 'Supplements POS', 'Reports'].map((item) => (
                <SidebarItem key={item} label={item} />
              ))}
            </div>

            {/* main */}
            <div className="flex-1 min-w-0 p-3">
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <div className="text-[13px] font-bold leading-none">Dashboard</div>
                  <div className="text-[8px] mt-1" style={{ color: 'var(--ink-faint)' }}>
                    Wednesday · Kiosk online · 2 devices connected
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <Pill>+ Add member</Pill>
                  <Pill accent>Collect payment</Pill>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-2.5">
                {[
                  ['Check-ins today', '142', 'var(--green)'],
                  ['Active members', '618', 'var(--blue-500)'],
                  ['Collected today', '₹48,200', 'var(--green)'],
                  ['Renewals due · 7d', '23', 'var(--amber)'],
                ].map(([label, value, color]) => (
                  <div key={label} className="rounded-lg p-2.5" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
                    <div className="text-[8px]" style={{ color: 'var(--ink-faint)' }}>
                      {label}
                    </div>
                    <div className="text-[15px] font-bold mt-0.5" style={{ color }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-3 rounded-lg overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
                  <div className="px-2.5 py-1.5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--line)' }}>
                    <span className="text-[9px] font-bold">Live check-ins</span>
                    <span className="text-[8px] font-mono" style={{ color: 'var(--green)' }}>
                      ● updating
                    </span>
                  </div>
                  {[
                    ['Priyanka Das', 'QR kiosk', '6:42 pm', 'Annual · 212 days left', 'var(--green)'],
                    ['Rahul Mishra', 'Biometric', '6:40 pm', 'Quarterly · 9 days left', 'var(--amber)'],
                    ['Sneha Patnaik', 'Front desk', '6:38 pm', 'PT · 4 sessions left', 'var(--blue-500)'],
                    ['Arjun Nayak', 'QR kiosk', '6:35 pm', 'Monthly · expires today', 'var(--red-600)'],
                    ['Meera Sahu', 'Biometric', '6:31 pm', 'Annual · 340 days left', 'var(--green)'],
                  ].map(([name, method, time, plan, color]) => (
                    <div key={name} className="px-2.5 py-1.5 flex items-center gap-2" style={{ borderBottom: '1px solid var(--line)' }}>
                      <span className="w-5 h-5 rounded-full grid place-items-center text-[8px] font-bold flex-shrink-0" style={{ background: 'var(--blue-50)', color: 'var(--blue-500)' }}>
                        {name.split(' ').map((n) => n[0]).join('')}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-semibold truncate">{name}</div>
                        <div className="text-[7.5px]" style={{ color: 'var(--ink-faint)' }}>
                          {method} · {time}
                        </div>
                      </div>
                      <span className="text-[7.5px] font-semibold text-right" style={{ color }}>
                        {plan}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="col-span-2 grid gap-2">
                  <div className="rounded-lg p-2.5" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
                    <div className="text-[9px] font-bold mb-1.5">Dues & renewals</div>
                    {[
                      ['Arjun Nayak', 'Monthly renewal', '₹1,500'],
                      ['Rahul Mishra', 'Quarterly · due 19 Sep', '₹3,900'],
                      ['Kavya Rout', 'PT pack balance', '₹2,000'],
                    ].map(([name, what, amt]) => (
                      <div key={name} className="flex items-center justify-between py-1" style={{ borderTop: '1px solid var(--line)' }}>
                        <div>
                          <div className="text-[8.5px] font-semibold">{name}</div>
                          <div className="text-[7px]" style={{ color: 'var(--ink-faint)' }}>
                            {what}
                          </div>
                        </div>
                        <span className="text-[8.5px] font-bold">{amt}</span>
                      </div>
                    ))}
                    <div className="mt-1.5 rounded-md py-1 text-center text-[8px] font-bold" style={{ background: 'var(--blue-600)', color: '#fff' }}>
                      Send payment links
                    </div>
                  </div>
                  <div className="rounded-lg p-2.5" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold">Supplements POS</span>
                      <span className="text-[7px] font-mono" style={{ color: 'var(--amber)' }}>
                        2 low stock
                      </span>
                    </div>
                    <div className="text-[7.5px] mt-1" style={{ color: 'var(--ink-faint)' }}>
                      Whey 1 kg · Creatine · Shaker — today ₹6,400 · 5 invoices emailed
                    </div>
                  </div>
                </div>
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

function Pill({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="rounded-md px-2 py-1 text-[8px] font-bold"
      style={accent ? { background: 'var(--blue-600)', color: '#fff' } : { background: 'var(--card)', border: '1px solid var(--line-strong)' }}
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

function SidebarItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className="rounded-md px-2 py-[5px] text-[9px] font-semibold mb-0.5"
      style={active ? { background: 'rgba(255,255,255,0.14)', color: '#fff' } : { color: 'rgba(255,255,255,0.68)' }}
    >
      {label}
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
          Everything a gym runs on, nothing it has to work around.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 620 }}>
          The register, the diary, the WhatsApp reminders and the invoice book become one
          system that the front desk, the trainers and the owner all see.
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
    members: (
      <>
        <circle cx="8" cy="7" r="3" />
        <path d="M2.5 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <circle cx="15" cy="8" r="2.2" />
        <path d="M14 12.3c2.3.2 3.8 1.7 3.8 4" />
      </>
    ),
    attendance: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="11" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="11" width="6" height="6" rx="1" />
        <path d="M11.5 14.5l2 2 3.5-4" />
      </>
    ),
    trainers: (
      <>
        <path d="M4 8v4M16 8v4M6 7v6M14 7v6M6 10h8" />
        <path d="M2.5 9v2M17.5 9v2" />
      </>
    ),
    fitness: (
      <>
        <path d="M3 15l4-6 3 4 3-7 4 9" />
        <path d="M3 17h14" />
      </>
    ),
    billing: (
      <>
        <rect x="4" y="2.5" width="12" height="15" rx="1.5" />
        <path d="M7 6.5h6M7 9.5h6M7 12.5h3" />
      </>
    ),
    growth: (
      <>
        <path d="M3 16h14" />
        <path d="M4 12l4-4 3 3 5-6" />
        <path d="M13 5h3v3" />
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

function Payments() {
  return (
    <section id="payments" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="rounded-2xl overflow-hidden card-lit order-2 lg:order-1">
          <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--line)' }}>
            <span className="text-xs font-bold">Payment gateway</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--green)' }}>
              Connected · settles to the gym
            </span>
          </div>
          <div className="p-3 grid gap-2">
            {[
              ['Priyanka Das', 'Annual membership renewal', '₹14,999', 'Paid · UPI', 'var(--green)'],
              ['Rahul Mishra', 'Quarterly · payment link', '₹3,900', 'Link sent', 'var(--blue-500)'],
              ['Sneha Patnaik', 'PT pack · 12 sessions', '₹9,000', 'Paid · card', 'var(--green)'],
              ['Counter sale', 'Whey 1 kg + shaker', '₹3,150', 'Invoice emailed', 'var(--green)'],
            ].map(([who, what, amount, status, statusColor]) => (
              <div key={who + what} className="rounded-xl p-3 flex items-center gap-3" style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}>
                <span className="w-8 h-8 rounded-lg grid place-items-center text-[9px] font-bold flex-shrink-0" style={{ background: 'var(--blue-50)', color: 'var(--blue-500)' }}>
                  ₹
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold">{who}</div>
                  <div className="text-[10px] truncate" style={{ color: 'var(--ink-faint)' }}>
                    {what}
                  </div>
                </div>
                <span className="text-[10px] font-semibold" style={{ color: statusColor }}>
                  {status}
                </span>
                <span className="text-xs font-bold w-16 text-right">{amount}</span>
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {GATEWAYS.map((g) => (
                <span key={g} className="rounded-md px-2 py-1 text-[10px] font-semibold" style={{ background: 'var(--card)', border: '1px solid var(--line-strong)', color: 'var(--ink-soft)' }}>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel>Your money stays yours</SectionLabel>
          <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Members pay the gym directly. FitBizz is never in the middle.
          </h2>
          <div className="grid gap-3 mb-7">
            {GATEWAY_POINTS.map((p) => (
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
            Ask about connecting your gateway
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

function OwnerView() {
  return (
    <section id="owner" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <SectionLabel>Owner’s view</SectionLabel>
          <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Every branch in your pocket. Every role sees only its own work.
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
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            See the owner dashboard live
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end gap-3 sm:gap-4">
          <PhoneCard title="Owner" accent="var(--green)" className="-mb-6">
            <div className="text-[9px] font-mono mb-2" style={{ color: 'var(--ink-faint)' }}>
              2 BRANCHES · TODAY
            </div>
            {[
              ['Check-ins', '211'],
              ['Collected', '₹71,300'],
              ['Renewals due', '31'],
              ['Awaiting approval', '2 expenses'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-1.5" style={{ borderTop: '1px solid var(--line)' }}>
                <span className="text-[10px]" style={{ color: 'var(--ink-soft)' }}>
                  {k}
                </span>
                <span className="text-[10px] font-bold">{v}</span>
              </div>
            ))}
            <div className="mt-2 rounded-lg py-1.5 text-center text-[10px] font-bold" style={{ background: 'var(--blue-600)', color: '#fff' }}>
              Approve
            </div>
          </PhoneCard>

          <PhoneCard title="Trainer" accent="var(--blue-500)" className="mt-8">
            <div className="text-[9px] font-mono mb-2" style={{ color: 'var(--ink-faint)' }}>
              MY SESSIONS · TODAY
            </div>
            {[
              ['7:00', 'Sneha P.', 'Upper body', 'var(--green)'],
              ['8:00', 'Kavya R.', 'Assessment', 'var(--blue-500)'],
              ['18:30', 'Arjun N.', 'HIIT · no-show?', 'var(--amber)'],
            ].map(([t, who, what, c]) => (
              <div key={t} className="py-1.5" style={{ borderTop: '1px solid var(--line)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold">{who}</span>
                  <span className="text-[9px] font-mono" style={{ color: 'var(--ink-faint)' }}>
                    {t}
                  </span>
                </div>
                <div className="text-[9px]" style={{ color: c }}>
                  {what}
                </div>
              </div>
            ))}
          </PhoneCard>

          <PhoneCard title="Kiosk" accent="var(--amber)" className="hidden sm:block">
            <div className="rounded-lg p-2 text-center" style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}>
              <div className="mx-auto w-14 h-14 rounded-md grid grid-cols-4 gap-px p-1" style={{ background: '#fff' }} aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} style={{ background: [0, 1, 2, 4, 6, 8, 10, 11, 13, 15].includes(i) ? '#0b1424' : 'transparent' }} />
                ))}
              </div>
              <div className="text-[9px] font-semibold mt-2">Scan to check in</div>
            </div>
            <div className="mt-2 rounded-lg p-2" style={{ background: 'rgba(18,183,106,0.12)', border: '1px solid rgba(18,183,106,0.35)' }}>
              <div className="text-[10px] font-bold" style={{ color: 'var(--green)' }}>
                Welcome, Priyanka
              </div>
              <div className="text-[9px]" style={{ color: 'var(--ink-soft)' }}>
                Annual · 212 days left
              </div>
            </div>
          </PhoneCard>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({ title, accent, children, className = '' }: { title: string; accent: string; children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[22px] overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: 178, background: 'var(--card)', border: '5px solid #0B1424', boxShadow: '0 34px 70px -26px rgba(0,0,0,0.9)' }}
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
          One system instead of a register, a diary and a spreadsheet.
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
          Built for every kind of fitness business.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 580 }}>
          The same platform, set up for how your floor actually runs.
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
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="relative">
          <div className="flex justify-center mb-5">
            <FitBizzMark size={44} />
          </div>
          <h2 className="font-display font-bold mb-4 text-white" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.9rem)', letterSpacing: '-0.02em' }}>
            See FitBizz on your own membership plans.
          </h2>
          <p className="mx-auto mb-9 text-base" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 560 }}>
            Book a 20-minute demo and we will set up your plans, a kiosk and a first invoice
            while you watch — or create your gym’s account and start adding members today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={onDemo} className="rounded-xl px-6 py-3.5 text-sm font-bold" style={{ background: '#fff', color: 'var(--blue-700)' }}>
              Book a demo
            </button>
            <a
              href={FITBIZZ.registerPath}
              className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.55)' }}
            >
              Create your gym’s account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
