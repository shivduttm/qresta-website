'use client';

import { useState } from 'react';
import { submitContactEnquiry, ApiError } from '@/lib/api';

const CONTACT_CARDS = [
  { icon: '✉', title: 'Email', value: 'info@qresta.in' },
  { icon: '📞', title: 'Phone', value: '+91 82491 90169' },
  { icon: '🎧', title: 'Support', value: '24×7 Customer Assistance' },
  { icon: '📍', title: 'Office', value: 'Bhubaneswar, Odisha, India' },
];

const WHY_CHOOSE = [
  'QR Digital Menu',
  'Restaurant Ordering System',
  'Waiter & Chef Management',
  'Restaurant Analytics',
  'Cloud Dashboard',
  'Dedicated Support',
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !restaurantName.trim() || !email.trim() || !mobile.trim() || !subject.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      await submitContactEnquiry({
        name: name.trim(),
        restaurantName: restaurantName.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        city: city.trim() || undefined,
        subject: subject.trim(),
        message: message.trim() || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : 'Something went wrong. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: 'linear-gradient(135deg, var(--blue-600), var(--blue-700))', color: '#fff' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Contact Qresta</h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Let&apos;s discuss how Qresta can help digitise your restaurant operations, improve
            customer experience and increase business growth.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_CARDS.map((c) => (
            <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
              <div className="text-2xl mb-2" style={{ color: 'var(--blue-600)' }}>{c.icon}</div>
              <div className="font-semibold text-sm mb-1">{c.title}</div>
              <div className="text-sm" style={{ color: 'var(--ink-soft)' }}>{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Talk + form */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">Let&apos;s Talk</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-soft)' }}>
              Whether you want a QR menu, restaurant ordering system, waiter management
              solution or a complete restaurant SaaS platform, our team is ready to help.
            </p>
            <div className="rounded-2xl p-6" style={{ background: 'var(--blue-50)' }}>
              <div className="font-semibold text-sm mb-3">Why Restaurants Choose Qresta</div>
              <ul className="grid gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                {WHY_CHOOSE.map((w) => (
                  <li key={w} className="flex items-center gap-2">
                    <span style={{ color: 'var(--blue-600)' }}>•</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl p-7" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
            <div className="font-display text-xl font-semibold mb-5">Send Enquiry</div>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="text-3xl mb-3">✓</div>
                <div className="font-display text-lg font-semibold mb-1">
                  Thank you for contacting Qresta
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div
                    className="rounded-xl px-4 py-3 mb-4 text-sm font-medium"
                    style={{ background: 'var(--red-50)', color: 'var(--red-600)' }}
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none" style={{ border: '1.5px solid var(--line)' }} />
                  <input value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} placeholder="Restaurant Name" required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none" style={{ border: '1.5px solid var(--line)' }} />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none" style={{ border: '1.5px solid var(--line)' }} />
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" placeholder="Mobile Number" required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none" style={{ border: '1.5px solid var(--line)' }} />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"
                    className="rounded-lg px-3 py-2.5 text-sm outline-none" style={{ border: '1.5px solid var(--line)' }} />
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none" style={{ border: '1.5px solid var(--line)' }} />
                </div>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your requirement" rows={4}
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-4" style={{ border: '1.5px solid var(--line)' }} />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full py-3 text-sm font-semibold text-white disabled:opacity-60"
                  style={{ background: 'var(--blue-600)' }}
                >
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="font-display text-2xl font-bold text-center mb-6">Find Us</h2>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--line)' }}>
          <iframe
            src="https://maps.google.com/maps?q=Bhubaneswar%20Odisha&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            title="Qresta office location"
          />
        </div>
      </section>
    </div>
  );
}
