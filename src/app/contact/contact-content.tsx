'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitContactEnquiry, ApiError } from '@/lib/api';
import { CONTACT, PRODUCTS, SITE_NAME, type ProductKey } from '@/lib/site';

/**
 * The company's contact page. Three products share this form, so the
 * first thing it asks is which business you run — that decides the
 * wording, the subject prefix the team sorts on, and which topics you
 * are offered. The product sites keep their own contact pages for
 * visitors who already know what they want.
 */

const CONTACT_CARDS = [
  { title: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { title: 'Phone / WhatsApp', value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
  { title: 'Support', value: 'Every day, including service hours' },
  { title: 'Office', value: 'Bhubaneswar, Odisha, India' },
];

const TOPICS: Record<ProductKey, string[]> = {
  restaurant: ['Billing & GST invoices', 'Kitchen display & KOT', 'QR scan and order', 'Zomato & Swiggy orders', 'Inventory & recipes', 'Multi-outlet & reports', 'Moving from another software', 'Something else'],
  cloudkitchen: ['Aggregator orders in one queue', 'Kitchen display & stations', 'Recipes, food cost & inventory', 'Delivery, riders & cash on delivery', 'Running several brands', 'Moving from another software', 'Something else'],
  fitbizz: ['Memberships & check-in', 'Trainers & personal training', 'Connecting my payment gateway', 'GST invoices & supplements POS', 'Moving from another software', 'Something else'],
};

const BUSINESS_LABEL: Record<ProductKey, string> = {
  restaurant: 'Restaurant / café name',
  cloudkitchen: 'Kitchen / brand name',
  fitbizz: 'Gym / studio name',
};

const PLACEHOLDER: Record<ProductKey, string> = {
  restaurant: 'Tell us about your restaurant — outlets, covers, what you bill on today (optional)',
  cloudkitchen: 'Tell us about your kitchen — brands, channels, orders a day (optional)',
  fitbizz: 'Tell us about your gym — members, branches, what you use today (optional)',
};

const TAG: Record<ProductKey, string> = {
  restaurant: '[Restaurant]',
  cloudkitchen: '[CloudKitchen]',
  fitbizz: '[FitBizz]',
};

export default function ContactPage() {
  const [product, setProduct] = useState<ProductKey>('restaurant');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [topic, setTopic] = useState(TOPICS.restaurant[0]);
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function pickProduct(key: ProductKey) {
    setProduct(key);
    // The topic list changes with the product, so a topic chosen for the
    // previous one would be submitted against a list it is not on.
    setTopic(TOPICS[key][0]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    if (!name.trim() || !businessName.trim() || !email.trim() || !mobile.trim()) {
      setError('Please fill in your name, business, email and mobile.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await submitContactEnquiry({
        name: name.trim(),
        restaurantName: businessName.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        city: city.trim() || undefined,
        subject: `${TAG[product]} ${topic}`,
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
  const chosen = PRODUCTS.find((p) => p.key === product)!;

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
            Talk to {SITE_NAME}.
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            Tell us what you run and what is not working today. We will show you the product
            built for it, set up on your own menu, dishes or membership plans.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {CONTACT_CARDS.map((c) =>
            c.href ? (
              <a key={c.title} href={c.href} className="rounded-2xl p-5 card-lit transition-colors hover:bg-white/[0.03]">
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] mb-1.5" style={{ color: 'var(--ink-faint)' }}>
                  {c.title}
                </div>
                <div className="text-sm font-semibold">{c.value}</div>
              </a>
            ) : (
              <div key={c.title} className="rounded-2xl p-5 card-lit">
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] mb-1.5" style={{ color: 'var(--ink-faint)' }}>
                  {c.title}
                </div>
                <div className="text-sm font-semibold">{c.value}</div>
              </div>
            ),
          )}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-5 grid gap-4 content-start">
            <div className="rounded-2xl p-6 card-lit">
              <div className="font-display text-base font-semibold mb-1">What {chosen.label} covers</div>
              <p className="text-sm mb-4" style={{ color: 'var(--ink-faint)' }}>
                {chosen.for}
              </p>
              <div className="grid gap-2.5">
                {chosen.points.map((p) => (
                  <div key={p} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-soft)' }}>
                    <span className="mt-0.5 w-4 h-4 rounded grid place-items-center flex-shrink-0" style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}>
                      <svg width="9" height="7" viewBox="0 0 9 7" aria-hidden="true">
                        <path d="M1 3.6L3.2 5.8 8 1" fill="none" stroke="var(--blue-500)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {p}
                  </div>
                ))}
              </div>
              <Link href={chosen.path} className="inline-flex items-center gap-2 text-sm font-bold mt-5" style={{ color: 'var(--blue-500)' }}>
                Read more about {chosen.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden card-lit">
              <iframe
                src="https://maps.google.com/maps?q=Bhubaneswar%20Odisha&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                title={`${SITE_NAME} office location`}
              />
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 card-lit">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="text-3xl mb-3">✓</div>
                <div className="font-display text-lg font-semibold mb-1">Thanks, {name}!</div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Your enquiry is in. The {SITE_NAME} team will get back to you within one business day.
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

                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--ink-faint)' }}>
                  What do you run?
                </label>
                <div className="grid sm:grid-cols-3 gap-2 mb-4">
                  {PRODUCTS.map((p) => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => pickProduct(p.key)}
                      className="rounded-xl px-3 py-2.5 text-left transition-colors"
                      style={{
                        border: `1.5px solid ${product === p.key ? 'var(--blue-500)' : 'var(--line)'}`,
                        background: product === p.key ? 'var(--blue-50)' : 'transparent',
                      }}
                    >
                      <span className="block text-[13px] font-semibold">{p.label}</span>
                    </button>
                  ))}
                </div>

                {error && (
                  <div className="rounded-xl px-4 py-3 mb-4 text-sm font-medium" style={{ background: 'var(--red-50)', color: 'var(--red-600)' }}>
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                  <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder={BUSINESS_LABEL[product]} required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" placeholder="Mobile number" pattern="[0-9]{10}" maxLength={10} required className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle} />
                  <select value={topic} onChange={(e) => setTopic(e.target.value)} className="rounded-lg px-3 py-2.5 text-sm outline-none" style={inputStyle}>
                    {TOPICS[product].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={PLACEHOLDER[product]}
                  rows={4}
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-4"
                  style={inputStyle}
                />
                <button type="submit" disabled={submitting} className="w-full rounded-xl py-3 text-sm font-bold text-white disabled:opacity-60" style={{ background: 'var(--blue-600)' }}>
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
