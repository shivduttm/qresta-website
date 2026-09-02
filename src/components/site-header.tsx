'use client';

import Link from 'next/link';
import { useLeadModals } from './lead-modals';

export function SiteHeader() {
  const { openDemoModal, openAppointmentModal } = useLeadModals();

  return (
    <header
      className="px-6 py-4"
      style={{ borderBottom: '1px solid var(--line)', background: 'rgba(247,248,251,0.9)' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/qresta-glyph.svg" alt="" className="w-9 h-9" />
          <span className="font-display text-xl font-bold">
            Q<span style={{ color: 'var(--blue-600)' }}>Resta</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            Home
          </Link>
          <Link href="/#features" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            Features
          </Link>
          <Link href="/#how-it-works" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            How it works
          </Link>
          <Link href="/#solutions" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            Solutions
          </Link>
          <Link href="/about" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openAppointmentModal}
            className="rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{ border: '1.5px solid var(--line)' }}
          >
            Book Appointment
          </button>
          <button
            onClick={openDemoModal}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: 'var(--ink)' }}
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile: a single primary CTA is enough at narrow widths */}
        <button
          onClick={openDemoModal}
          className="md:hidden rounded-full px-4 py-2 text-xs font-semibold text-white"
          style={{ background: 'var(--ink)' }}
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
}
