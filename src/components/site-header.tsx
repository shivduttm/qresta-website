'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { QrestaMark } from './brand';
import { useLeadModals } from './lead-modals';

type MenuItem = { label: string; desc: string; href: string };

const PRODUCT_MENU: MenuItem[] = [
  { label: 'POS billing', desc: 'Offline-first counter billing and GST invoices', href: '/#modules' },
  { label: 'KOT & Kitchen Display', desc: 'Station routing, timers and item-wise firing', href: '/#modules' },
  { label: 'QR scan & order', desc: 'Guests order from the table, no app to install', href: '/#modules' },
  { label: 'Online orders hub', desc: 'Zomato, Swiggy and your own site in one queue', href: '/#online-orders' },
  { label: 'Inventory & recipes', desc: 'Recipe-level deduction and variance reports', href: '/#modules' },
  { label: 'Reports & head office', desc: 'Every outlet on one screen, approvals in a tap', href: '/#owner' },
];

const SOLUTIONS_MENU: MenuItem[] = [
  { label: 'Restaurants', desc: 'Dine-in service, floors and multi-station kitchens', href: '/#customers' },
  { label: 'Cafés & QSR', desc: 'Fast counters, takeaway queues and repeat guests', href: '/#customers' },
  { label: 'Cloud kitchens', desc: 'Aggregator-first, no dining floor to run', href: '/#customers' },
  { label: 'Food courts', desc: 'Many counters, one reconciled set of books', href: '/#customers' },
  { label: 'Hotels', desc: 'Restaurant plus in-room dining on one platform', href: '/#customers' },
  { label: 'Bars & lounges', desc: 'Tabs, split bills and stock-tight pouring', href: '/#customers' },
];

export function SiteHeader() {
  const { openDemoModal } = useLeadModals();
  const [open, setOpen] = useState<'product' | 'solutions' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // The header only grows its border and blur once the page has moved,
  // so the hero reads as one uninterrupted field of navy at rest.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A dropdown left open behind a click elsewhere (or an Escape press)
  // is a trap on touch devices, where there is no pointer to leave.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 transition-colors"
      style={{
        background: scrolled ? 'rgba(6,10,23,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : undefined,
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : undefined,
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <QrestaMark size={32} />
          <span className="font-display text-lg font-bold tracking-tight">Qresta</span>
        </Link>

        <div ref={navRef} className="hidden lg:flex items-center gap-1 relative">
          <DropdownTrigger
            label="Product"
            isOpen={open === 'product'}
            onToggle={() => setOpen(open === 'product' ? null : 'product')}
          />
          <DropdownTrigger
            label="Solutions"
            isOpen={open === 'solutions'}
            onToggle={() => setOpen(open === 'solutions' ? null : 'solutions')}
          />
          <NavLink href="/#customers">Customers</NavLink>
          <NavLink href="/about">Company</NavLink>

          {open && (
            <div
              className="absolute top-full left-0 mt-2 rounded-2xl p-2 grid sm:grid-cols-2 gap-1 w-[560px] card-lit"
              style={{ boxShadow: '0 24px 60px -24px rgba(0,0,0,0.8)' }}
            >
              {(open === 'product' ? PRODUCT_MENU : SOLUTIONS_MENU).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(null)}
                  className="rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                >
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* /login is proxied through to the app by next.config.ts, so it
              stays a plain anchor — a client-side Link would try to route
              it inside this app and 404. */}
          <a
            href="/login"
            className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)' }}
          >
            Sign in
          </a>
          <button
            onClick={openDemoModal}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--blue-600)' }}
          >
            Get a demo
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="lg:hidden rounded-xl w-9 h-9 grid place-items-center"
            style={{ border: '1px solid var(--line-strong)' }}
          >
            <span className="grid gap-1">
              <span className="block w-4 h-px" style={{ background: 'var(--ink)' }} />
              <span className="block w-4 h-px" style={{ background: 'var(--ink)' }} />
              <span className="block w-4 h-px" style={{ background: 'var(--ink)' }} />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden px-5 pb-5" style={{ background: 'rgba(6,10,23,0.97)', borderBottom: '1px solid var(--line)' }}>
          <div className="grid gap-1 pt-1">
            {[...PRODUCT_MENU.slice(0, 4), ...SOLUTIONS_MENU.slice(0, 2)].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#customers" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5">
              Customers
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5">
              Company
            </Link>
            <a href="/login" className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5">
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/5"
      style={{ color: 'var(--ink-soft)' }}
    >
      {children}
    </Link>
  );
}

function DropdownTrigger({
  label,
  isOpen,
  onToggle,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="rounded-lg px-3 py-2 text-sm font-semibold inline-flex items-center gap-1.5 transition-colors hover:bg-white/5"
      style={{ color: isOpen ? 'var(--ink)' : 'var(--ink-soft)' }}
    >
      {label}
      <svg width="9" height="6" viewBox="0 0 9 6" aria-hidden="true" style={{ transform: isOpen ? 'rotate(180deg)' : undefined, transition: 'transform .15s' }}>
        <path d="M1 1l3.5 3.5L8 1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  );
}
