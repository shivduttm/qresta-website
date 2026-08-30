'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { submitDemoRequest, ApiError } from '@/lib/api';

interface LeadModalsContextValue {
  openDemoModal: () => void;
  openAppointmentModal: () => void;
}

const LeadModalsContext = createContext<LeadModalsContextValue | null>(null);

export function useLeadModals() {
  const ctx = useContext(LeadModalsContext);
  if (!ctx) throw new Error('useLeadModals must be used inside <LeadModalsProvider>');
  return ctx;
}

type ModalKind = 'demo' | 'appointment' | null;

export function LeadModalsProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<ModalKind>(null);

  return (
    <LeadModalsContext.Provider
      value={{
        openDemoModal: () => setOpen('demo'),
        openAppointmentModal: () => setOpen('appointment'),
      }}
    >
      {children}
      {open && <LeadModal kind={open} onClose={() => setOpen(null)} />}
    </LeadModalsContext.Provider>
  );
}

function LeadModal({ kind, onClose }: { kind: 'demo' | 'appointment'; onClose: () => void }) {
  const isAppointment = kind === 'appointment';

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
        message: message.trim() || undefined,
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
              {isAppointment ? 'Book an appointment' : 'Book your free demo'}
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--ink-soft)' }}>
              {isAppointment
                ? "Pick a time that works and our team will confirm it with you."
                : "Takes 20 minutes. We'll show you QResta running on a real menu."}
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
                placeholder="Restaurant Name"
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
              placeholder={isAppointment ? 'Notes (optional)' : 'Tell us about your restaurant (optional)'}
              rows={3}
              className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-4"
              style={{ border: '1.5px solid var(--line)' }}
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full py-3 text-sm font-semibold text-white disabled:opacity-60"
              style={{ background: 'var(--ink)' }}
            >
              {submitting ? 'Sending…' : isAppointment ? 'Confirm appointment' : 'Submit demo request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
