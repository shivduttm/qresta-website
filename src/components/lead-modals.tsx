'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { submitDemoRequest, ApiError } from '@/lib/api';

/** Which product the lead is about — changes the form's wording and tags the request. */
export type LeadProduct = 'qresta' | 'restaurant' | 'fitbizz' | 'cloudkitchen';

interface LeadModalsContextValue {
  /** Pass the product the visitor is looking at — 'restaurant', 'cloudkitchen' or 'fitbizz'. Anything else (including a click event, which is how most callers pass it) means the company page, where we do not know yet. */
  openDemoModal: (product?: LeadProduct | unknown) => void;
  openAppointmentModal: () => void;
}

const LeadModalsContext = createContext<LeadModalsContextValue | null>(null);

export function useLeadModals() {
  const ctx = useContext(LeadModalsContext);
  if (!ctx) throw new Error('useLeadModals must be used inside <LeadModalsProvider>');
  return ctx;
}

type ModalKind = 'demo' | 'appointment';

export function LeadModalsProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<{ kind: ModalKind; product: LeadProduct } | null>(null);

  return (
    <LeadModalsContext.Provider
      value={{
        // Callers often pass this straight to onClick, so the argument
        // may be a MouseEvent — only a literal product name switches product.
        openDemoModal: (product) => setOpen({ kind: 'demo', product: product === 'fitbizz' || product === 'cloudkitchen' || product === 'restaurant' ? product : 'qresta' }),
        openAppointmentModal: () => setOpen({ kind: 'appointment', product: 'qresta' }),
      }}
    >
      {children}
      {open && <LeadModal kind={open.kind} product={open.product} onClose={() => setOpen(null)} />}
    </LeadModalsContext.Provider>
  );
}

function LeadModal({ kind, product, onClose }: { kind: ModalKind; product: LeadProduct; onClose: () => void }) {
  const isAppointment = kind === 'appointment';
  const isGym = product === 'fitbizz';
  const isKitchen = product === 'cloudkitchen';
  const isRestaurant = product === 'restaurant';
  // The lead queue on the dashboard is shared, so a gym request says so
  // in its first line — the API has no product field of its own.
  const productTag = isGym ? '[FitBizz] ' : isKitchen ? '[CloudKitchen] ' : isRestaurant ? '[Restaurant] ' : '';

  const [restaurantName, setRestaurantName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');
  // Honeypot — a field real visitors never see or fill in, same
  // anti-spam technique the old site used. If it's non-empty, the
  // submission is silently dropped rather than telling a bot it
  // failed (which would only help it learn to avoid the trap).
  const [honeypot, setHoneypot] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // silently drop — see comment above

    if (!restaurantName.trim() || !ownerName.trim() || !email.trim() || !mobile.trim()) return;
    if (isAppointment && (!appointmentDate || !appointmentTime)) return;
    if (!isAppointment && !city.trim()) return;

    setSubmitting(true);
    setError('');
    try {
      await submitDemoRequest({
        name: ownerName.trim(),
        email: email.trim(),
        phone: mobile.trim(),
        restaurantName: restaurantName.trim(),
        message: productTag + (message.trim() || (isGym ? 'Gym demo request' : isKitchen ? 'Cloud kitchen demo request' : '')) || undefined,
        type: kind,
        preferredDate: isAppointment ? appointmentDate : undefined,
        preferredTime: isAppointment ? appointmentTime : undefined,
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
    <div
      className="fixed inset-0 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0 z-50"
      style={{ background: 'rgba(18,20,28,0.55)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl p-6 max-h-[90vh] overflow-y-auto"
        style={{ background: 'var(--card)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="font-display text-xl font-semibold">
              {isAppointment ? 'Book an appointment' : isGym ? 'See FitBizz on your gym' : isKitchen ? 'See CloudKitchen on your kitchen' : isRestaurant ? 'See Qresta on your menu' : 'Book your free demo'}
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--ink-soft)' }}>
              {isAppointment
                ? "Pick a time that works and our team will confirm it with you."
                : isGym
                  ? "Takes 20 minutes. We'll walk through memberships, check-in and billing set up for a gym like yours."
                  : isKitchen
                    ? "Takes 20 minutes. We'll walk through aggregator orders, the kitchen display and food cost on a menu like yours."
                    : isRestaurant
                      ? "Takes 20 minutes. We'll show you Qresta running on a real menu."
                      : "Takes 20 minutes. Tell us what you run and we'll set it up on your own menu, dishes or membership plans."}
            </p>
          </div>
          <button onClick={onClose} className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            Close
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="text-3xl mb-3">✓</div>
            <div className="font-display text-lg font-semibold mb-1">
              Thanks, {ownerName}!
            </div>
            <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
              {isAppointment
                ? "Your appointment request is in — we'll follow up shortly to lock it in."
                : "Your demo request has been received. Our team will contact you within one business day."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5">
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

            {error && (
              <div
                className="rounded-xl px-4 py-3 mb-4 text-sm font-medium"
                style={{ background: 'var(--red-50)', color: 'var(--red-600)' }}
              >
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                placeholder={isGym ? 'Gym / studio name' : isKitchen ? 'Kitchen / brand name' : isRestaurant ? 'Restaurant name' : 'Business name'}
                required
                className="rounded-lg px-3 py-2.5 text-sm outline-none"
                style={{ border: '1.5px solid var(--line)' }}
              />
              <input
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Owner Name"
                required
                className="rounded-lg px-3 py-2.5 text-sm outline-none"
                style={{ border: '1.5px solid var(--line)' }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                required
                className="rounded-lg px-3 py-2.5 text-sm outline-none"
                style={{ border: '1.5px solid var(--line)' }}
              />
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="tel"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                className="rounded-lg px-3 py-2.5 text-sm outline-none"
                style={{ border: '1.5px solid var(--line)' }}
              />
            </div>

            {isAppointment ? (
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  type="date"
                  required
                  className="rounded-lg px-3 py-2.5 text-sm outline-none"
                  style={{ border: '1.5px solid var(--line)' }}
                />
                <input
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  type="time"
                  required
                  className="rounded-lg px-3 py-2.5 text-sm outline-none"
                  style={{ border: '1.5px solid var(--line)' }}
                />
              </div>
            ) : (
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                required
                className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-3"
                style={{ border: '1.5px solid var(--line)' }}
              />
            )}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isAppointment ? 'Notes (optional)' : isGym ? 'Tell us about your gym — members, branches, what you use today (optional)' : isKitchen ? 'Tell us about your kitchen — brands, channels, orders a day (optional)' : isRestaurant ? 'Tell us about your restaurant (optional)' : 'What do you run — a restaurant, a cloud kitchen or a gym? (optional)'}
              rows={3}
              className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-4"
              style={{ border: '1.5px solid var(--line)' }}
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full py-3 text-sm font-semibold text-white disabled:opacity-60"
              style={{ background: 'var(--blue-600)' }}
            >
              {submitting ? 'Sending…' : isAppointment ? 'Confirm appointment' : 'Submit demo request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
