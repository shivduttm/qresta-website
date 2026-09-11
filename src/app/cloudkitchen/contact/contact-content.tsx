'use client';

import { useState } from 'react';
import { useLeadModals } from '@/components/lead-modals';
import { submitContactEnquiry, ApiError } from '@/lib/api';
import { CONTACT } from '@/lib/site';

const TOPICS = [
  'Swiggy, Zomato & channel orders',
  'Kitchen display & stations',
  'Recipes, food cost & inventory',
  'Delivery, riders & cash on delivery',
  'GST invoices & reports',
  'Running several brands from one kitchen',
  'Moving from another software',
  'Something else',
];

const REASONS = [
  'Every channel lands in one queue, on one clock',
  'A kitchen display that shows which ticket is running late, by station',
  'Recipes that deduct real stock and cost every plate',
  'Inventory, purchasing and supplier balances in the same system',
  'Several brands out of one address, each with its own menu and numbers',
  'Set up together on the demo call, on your own menu',
];

/**
 * The cloud-kitchen site's contact page. Same enquiry endpoint as the
 * restaurant site's, so the lead lands in the same queue on the
 * dashboard — the subject is prefixed so the team can tell them apart at
 * a glance.
 */
export default function CloudKitchenContactContent() {
  const { openDemoModal } = useLeadModals();

  const [name, setName] = useState('');
  const [kitchenName, setKitchenName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    if (!name.trim() || !kitchenName.trim() || !email.trim() || !mobile.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      await submitContactEnquiry({
        name: name.trim(),
        restaurantName: kitchenName.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        city: city.trim() || undefined,
        subject: `[CloudKitchen] ${topic}`,
        message: message.trim() || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle = { border: '1.5px solid var(--line)' } as const;

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" style={{ height: 600 }} />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-14 sm:pt-20 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px" style={{ background: 'var(--blue-500)' }} />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--blue-500)' }}>
              Contact
            </span>
          </div>
          <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            Talk to us about your kitchen.
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            Tell us how your kitchen runs today — brands, channels, orders a day, what you track
            and where it breaks — and we will show you CloudKitchen set up for exactly that.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          <div className="lg:col-span-5 grid gap-4 content-start">
            <div className="rounded-2xl p-6 card-lit">
              <div className="font-display text-base font-semibold mb-4">Reach us directly</div>
              <div className="grid gap-3 text-sm">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center justify-between gap-3 hover:underline">
                  <span style={{ color: 'var(--ink-soft)' }}>Email</span>
                  <span className="font-semibold">{CONTACT.email}</span>
                </a>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center justify-between gap-3 hover:underline">
                  <span style={{ color: 'var(--ink-soft)' }}>Phone / WhatsApp</span>
                  <span className="font-semibold">{CONTACT.phoneDisplay}</span>
                </a>
                <div className="flex items-center justify-between gap-3">
                  <span style={{ color: 'var(--ink-soft)' }}>Office</span>
                  <span className="font-semibold">Bhubaneswar, Odisha</span>
                </div>
              </div>
              <button
                onClick={() => openDemoModal('cloudkitchen')}
                className="mt-5 w-full rounded-xl px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'var(--blue-600)' }}
              >
                Book a 20-minute demo
              </button>
            </div>

            <div className="rounded-2xl p-6 card-lit">
              <div className="font-display text-base font-semibold mb-4">Why kitchens pick CloudKitchen</div>
              <div className="grid gap-2.5">
                {REASONS.map((r) => (
                  <div key={r} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-soft)' }}>
                    <span className="mt-0.5 w-4 h-4 rounded grid place-items-center flex-shrink-0" style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}>
                      <svg width="9" height="7" viewBox="0 0 9 7" aria-hidden="true">
                        <path d="M1 3.6L3.2 5.8 8 1" fill="none" stroke="var(--blue-500)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 card-lit">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="text-3xl mb-3">✓</div>
                <div className="font-display text-lg font-semibold mb-1">Thanks, {name}!</div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Your enquiry is in. The CloudKitchen team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none"
                  style={{ left: '-9999px' }}
                  aria-hidden="true"
                />
                <div className="font-display text-lg font-semibold mb-1">Send an enquiry</div>
                <p className="text-sm mb-5" style={{ color: 'var(--ink-soft)' }}>
                  A few details and we will call you back.
                </p>

                {error && (
                  <div className="rounded-xl px-4 py-3 mb-4 text-sm font-medium" style={{ background: 'var(--red-50)', color: 'var(--red-600)' }}>
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                  <input value={kitchenName} onChange={(e) => setKitchenName(e.target.value)} placeholder="Kitchen / brand name" required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" placeholder="Mobile number" pattern="[0-9]{10}" maxLength={10} required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                  <select value={topic} onChange={(e) => setTopic(e.target.value)} className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle}>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your kitchen — brands, channels, orders a day, what you use today (optional)"
                  rows={4}
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-4"
                  style={inputStyle}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl py-3 text-sm font-bold text-white disabled:opacity-60"
                  style={{ background: 'var(--blue-600)' }}
                >
                  {submitting ? 'Sending…' : 'Send enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
