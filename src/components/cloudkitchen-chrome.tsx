'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CloudKitchenMark, CloudKitchenWordmark } from './brand';
import { ProductLinks } from './product-links';
import { useLeadModals } from './lead-modals';
import { CLOUDKITCHEN, CONTACT } from '@/lib/site';

/* The header and footer every page under /cloudkitchen gets instead of
   the restaurant site's. Nothing here points at restaurant content, and
   nothing here advertises a sign-in or sign-up: the CloudKitchen app is
   reached by the people who already have it, not from this site. The one
   way in for a visitor is the demo request. */

const NAV: Array<{ label: string; href: string }> = [
  { label: 'Features', href: '/cloudkitchen#modules' },
  { label: 'Channels', href: '/cloudkitchen#channels' },
  { label: 'Food cost', href: '/cloudkitchen#costing' },
  { label: 'Who it’s for', href: '/cloudkitchen#customers' },
  { label: 'Contact', href: '/cloudkitchen/contact' },
];

export function CloudKitchenHeader() {
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
        <Link href={CLOUDKITCHEN.path} className="flex items-center gap-2.5 flex-shrink-0">
          <CloudKitchenMark size={32} />
          <CloudKitchenWordmark size={20} />
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

        <div className="flex items-center gap-2">
          <button
            onClick={() => openDemoModal('cloudkitchen')}
            className="hidden sm:inline-flex rounded-lg px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--blue-600)' }}
          >
            Book a demo
          </button>
          <button
            className="lg:hidden rounded-lg p-2"
            style={{ border: '1px solid var(--line-strong)' }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {mobileOpen ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2.5 5h13M2.5 9h13M2.5 13h13" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden px-5 sm:px-6 pb-4" style={{ background: 'rgba(6,10,23,0.96)', borderBottom: '1px solid var(--line)' }}>
          <nav className="grid gap-1 pt-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold"
                style={{ color: 'var(--ink-soft)' }}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openDemoModal('cloudkitchen');
              }}
              className="mt-1 rounded-lg px-4 py-2.5 text-sm font-bold text-white"
              style={{ background: 'var(--blue-600)' }}
            >
              Book a demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function CloudKitchenFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href={CLOUDKITCHEN.path} className="flex items-center gap-2.5 mb-3">
            <CloudKitchenMark size={30} />
            <CloudKitchenWordmark size={19} />
          </Link>
          <p className="text-sm max-w-sm" style={{ color: 'var(--ink-soft)' }}>
            {CLOUDKITCHEN.tagline}. Built in India, for kitchens that never see a customer walk in.
          </p>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] mb-3" style={{ color: 'var(--ink-faint)' }}>
            Product
          </div>
          <div className="grid gap-2">
            {NAV.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: 'var(--ink-soft)' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <ProductLinks current="cloudkitchen" />

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] mb-3" style={{ color: 'var(--ink-faint)' }}>
            Talk to us
          </div>
          <div className="grid gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
            <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="transition-colors hover:text-white">
              {CONTACT.phoneDisplay}
            </a>
            <Link href="/about" className="transition-colors hover:text-white">
              About Qresta
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid var(--line)' }}>
        <span className="text-xs" style={{ color: 'var(--ink-faint)' }}>
          © {new Date().getFullYear()} {CLOUDKITCHEN.brandName}. All rights reserved.
        </span>
        <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--ink-faint)' }}>
          <Link href="/privacy-policy" className="transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
