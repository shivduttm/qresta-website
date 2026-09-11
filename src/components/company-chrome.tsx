'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { QrestaMark } from './brand';
import { ProductLinks } from './product-links';
import { useLeadModals } from './lead-modals';
import { CONTACT, PRODUCTS, SITE_NAME } from '@/lib/site';

/* The header and footer for qresta.in itself — the company, not any one
   product. Its job is to send a visitor to the right product quickly, so
   the products menu is the first thing in the nav and the only thing
   that gets a dropdown. Nothing here advertises a sign-in: staff reach
   their app directly. */

const COMPANY_NAV: Array<{ label: string; href: string }> = [
  { label: 'About', href: '/about' },
  { label: 'Founder', href: '/founder' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function CompanyHeader() {
  const { openDemoModal } = useLeadModals();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A dropdown left open behind a click elsewhere is a trap on touch
  // devices, where there is no pointer to leave.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
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
          <span className="font-display text-lg font-bold tracking-tight">{SITE_NAME}</span>
        </Link>

        <div ref={navRef} className="hidden lg:flex items-center gap-1 relative">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="rounded-lg px-3 py-2 text-sm font-semibold inline-flex items-center gap-1.5 transition-colors hover:bg-white/5"
            style={{ color: open ? 'var(--ink)' : 'var(--ink-soft)' }}
          >
            Products
            <svg width="9" height="6" viewBox="0 0 9 6" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : undefined, transition: 'transform .15s' }}>
              <path d="M1 1l3.5 3.5L8 1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          {COMPANY_NAV.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/5" style={{ color: 'var(--ink-soft)' }}>
              {item.label}
            </Link>
          ))}

          {open && (
            <div className="absolute top-full left-0 mt-2 rounded-2xl p-2 grid gap-1 w-[420px] card-lit" style={{ boxShadow: '0 24px 60px -24px rgba(0,0,0,0.8)' }}>
              {PRODUCTS.map((p) => (
                <Link key={p.key} href={p.path} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5">
                  <div className="text-sm font-semibold">{p.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                    {p.for}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
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
            {PRODUCTS.map((p) => (
              <Link key={p.key} href={p.path} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-white/5">
                <div className="text-sm font-semibold">{p.label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                  {p.for}
                </div>
              </Link>
            ))}
            <div className="h-px my-1" style={{ background: 'var(--line)' }} />
            {COMPANY_NAV.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function CompanyFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--paper-alt)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <QrestaMark size={32} />
              <span className="font-display text-lg font-bold tracking-tight">{SITE_NAME}</span>
            </Link>
            <p className="text-sm mt-4 max-w-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              We build the software Indian food and fitness businesses run on — a restaurant
              floor, a delivery-only kitchen and a gym each get a product built for how that
              business actually works, not a general tool bent to fit.
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
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <ProductLinks />
            <FooterColumn
              title="Company"
              links={[
                { label: 'About', href: '/about' },
                { label: 'Founder', href: '/founder' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
                { label: 'Book a demo', href: '/demo' },
              ]}
            />
            <FooterColumn
              title="Talk to a product"
              links={[
                { label: 'Restaurant enquiry', href: '/contact' },
                { label: 'Cloud kitchen enquiry', href: '/cloudkitchen/contact' },
                { label: 'Gym enquiry', href: '/fitbizz/contact' },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 text-xs" style={{ borderTop: '1px solid var(--line)', color: 'var(--ink-faint)' }}>
          <span>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </span>
          <span className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: 'var(--ink-faint)' }}>
        {title}
      </div>
      <div className="grid gap-2.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
