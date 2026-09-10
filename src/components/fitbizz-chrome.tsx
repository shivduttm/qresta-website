'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FitBizzMark, FitBizzWordmark } from './brand';
import { useLeadModals } from './lead-modals';
import { CONTACT, FITBIZZ } from '@/lib/site';

/* The header and footer every page under /fitbizz gets instead of the
   restaurant site's. Nothing here points at restaurant content, and
   nothing here advertises a sign-in or sign-up: the FitBizz app is
   reached by the people who already have it, not from this site. The
   one way in for a visitor is the demo request. */

const NAV: Array<{ label: string; href: string }> = [
  { label: 'Features', href: '/fitbizz#modules' },
  { label: 'Payments', href: '/fitbizz#payments' },
  { label: 'Owner view', href: '/fitbizz#owner' },
  { label: 'Who it’s for', href: '/fitbizz#customers' },
  { label: 'Contact', href: '/fitbizz/contact' },
];

export function FitBizzHeader() {
  const { openDemoModal } = useLeadModals();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <Link href={FITBIZZ.path} className="flex items-center gap-2.5 flex-shrink-0">
          <FitBizzMark size={32} />
          <FitBizzWordmark size={20} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/5"
              style={{ color: 'var(--ink-soft)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => openDemoModal('fitbizz')}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--blue-600)' }}
          >
            Book a demo
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
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

const FOOTER_COLUMNS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: 'Product',
    links: [
      { label: 'Members & memberships', href: '/fitbizz#modules' },
      { label: 'Attendance & access', href: '/fitbizz#modules' },
      { label: 'Trainers & PT', href: '/fitbizz#modules' },
      { label: 'Billing, invoices & POS', href: '/fitbizz#modules' },
      { label: 'Your own payment gateway', href: '/fitbizz#payments' },
      { label: 'Owner view', href: '/fitbizz#owner' },
    ],
  },
  {
    title: 'For',
    links: [
      { label: 'Gyms', href: '/fitbizz#customers' },
      { label: 'Fitness & CrossFit studios', href: '/fitbizz#customers' },
      { label: 'Yoga & Pilates studios', href: '/fitbizz#customers' },
      { label: 'Personal training studios', href: '/fitbizz#customers' },
      { label: 'Multi-branch chains', href: '/fitbizz#customers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', href: '/fitbizz/contact' },
      { label: 'Privacy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export function FitBizzFooter() {
  const { openDemoModal } = useLeadModals();
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--paper-alt)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href={FITBIZZ.path} className="inline-flex items-center gap-2.5">
              <FitBizzMark size={32} />
              <FitBizzWordmark size={20} />
            </Link>
            <p className="text-sm mt-4 max-w-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              Gym management software for India — memberships, check-in, trainers, GST
              invoices, a supplements counter and reports on one system, with members paying
              into the gym’s own account.
            </p>
            <div className="grid gap-1.5 text-sm mt-5" style={{ color: 'var(--ink-soft)' }}>
              <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="hover:underline">
                {CONTACT.phoneDisplay}
              </a>
              <span style={{ color: 'var(--ink-faint)' }}>Odisha, India</span>
            </div>
            <button
              onClick={() => openDemoModal('fitbizz')}
              className="mt-5 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--blue-600)' }}
            >
              Book a demo
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] mb-4"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  {col.title}
                </div>
                <div className="grid gap-2.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  {col.links.map((l) => (
                    <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 text-xs"
          style={{ borderTop: '1px solid var(--line)', color: 'var(--ink-faint)' }}
        >
          <span>© {new Date().getFullYear()} {FITBIZZ.brandName}. All rights reserved.</span>
          <span>{FITBIZZ.brandName} is a product of Qresta, Odisha, India.</span>
        </div>
      </div>
    </footer>
  );
}
