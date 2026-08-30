'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitDemoRequest, ApiError } from '@/lib/api';

export default function DemoRequestPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitting(true);
    setError('');
    try {
      await submitDemoRequest({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        restaurantName: restaurantName.trim() || undefined,
        message: message.trim() || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not send your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h1 className="font-display text-2xl font-semibold mb-2">Thanks — request sent</h1>
        <p className="text-sm mb-8" style={{ color: 'var(--ink-soft)' }}>
          We'll be in touch shortly to set up a time.
        </p>
        <Link
          href="/"
          className="text-sm font-semibold"
          style={{ color: 'var(--blue-600)' }}
        >
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="font-display text-3xl font-bold mb-2">Request a demo</h1>
      <p className="text-sm mb-8" style={{ color: 'var(--ink-soft)' }}>
        Tell us a bit about your restaurant and we'll show you QResta running with your own setup.
      </p>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl p-6"
        style={{ background: 'var(--card)', border: '1px solid var(--line)' }}
      >
        {error && (
          <div
            className="rounded-xl px-4 py-3 mb-4 text-sm font-medium"
            style={{ background: 'var(--red-50)', color: 'var(--red-600)' }}
          >
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1.5">Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{ border: '1.5px solid var(--line)' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1.5">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{ border: '1.5px solid var(--line)' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1.5">Phone (optional)</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{ border: '1.5px solid var(--line)' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1.5">Restaurant name (optional)</label>
          <input
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{ border: '1.5px solid var(--line)' }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold mb-1.5">
            Anything specific you want to see? (optional)
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{ border: '1.5px solid var(--line)' }}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full py-3 text-sm font-semibold text-white disabled:opacity-60"
          style={{ background: 'var(--ink)' }}
        >
          {submitting ? 'Sending…' : 'Request a demo'}
        </button>
      </form>
    </div>
  );
}
