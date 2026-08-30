'use client';

import { useEffect, useState, useRef } from 'react';
import {
  getOpenJobPositions,
  submitCareerApplication,
  JobPosition,
  ApiError,
} from '@/lib/api';

const PERKS = [
  { icon: '🚀', text: 'Fast-growing SaaS startup' },
  { icon: '📈', text: 'Real career growth opportunities' },
  { icon: '🏠', text: 'Remote & hybrid options' },
  { icon: '💡', text: 'Innovative, hands-on work culture' },
  { icon: '🎓', text: 'Skill development programs' },
  { icon: '🏆', text: 'Performance recognition' },
];

export default function CareersPage() {
  const [positions, setPositions] = useState<JobPosition[] | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getOpenJobPositions()
      .then(setPositions)
      .catch(() => setPositions([]));
  }, []);

  function handleApplyClick(title: string) {
    setPosition(title);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !mobile.trim() || !position || !resume) {
      setError('Please fill in all required fields and attach your resume.');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      await submitCareerApplication({
        name: name.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        position,
        message: message.trim() || undefined,
        resume,
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
        className="relative overflow-hidden pt-20 pb-16 text-center"
        style={{ background: 'linear-gradient(135deg, var(--ink) 0%, #232840 100%)', color: '#fff' }}
      >
        <div className="max-w-2xl mx-auto px-6 relative">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#ff9a5c' }}>
            We're hiring
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Build your career with QResta
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Join our mission to transform restaurants across India through technology,
            automation and thoughtful design.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Left: perks + open positions */}
          <div className="grid gap-6 content-start">
            <div className="rounded-2xl p-7" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
              <div className="font-display text-lg font-semibold mb-1">Why join QResta?</div>
              <p className="text-sm mb-4" style={{ color: 'var(--ink-soft)' }}>
                A growing team building for restaurants across India.
              </p>
              <ul className="grid gap-2.5 text-sm">
                {PERKS.map((p) => (
                  <li key={p.text} className="flex items-center gap-2.5" style={{ color: 'var(--ink-soft)' }}>
                    <span>{p.icon}</span> {p.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-7" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
              <div className="font-display text-lg font-semibold mb-1">Open positions</div>
              <p className="text-sm mb-4" style={{ color: 'var(--ink-soft)' }}>
                Don&apos;t see a fit? Apply anyway — tell us where you&apos;d add value.
              </p>

              {positions === null && (
                <div className="text-sm" style={{ color: 'var(--ink-faint)' }}>Loading…</div>
              )}
              {positions !== null && positions.length === 0 && (
                <div className="text-sm" style={{ color: 'var(--ink-faint)' }}>
                  No open positions right now — check back soon, or apply below anyway.
                </div>
              )}

              <div className="grid gap-3">
                {positions?.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between gap-3 rounded-xl p-4"
                    style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
                  >
                    <div>
                      <div className="font-semibold text-sm">{p.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                        {[p.experience, p.location].filter(Boolean).join(' · ')}
                      </div>
                    </div>
                    <button
                      onClick={() => handleApplyClick(p.title)}
                      className="rounded-full px-4 py-2 text-xs font-semibold flex-shrink-0"
                      style={{ border: '1.5px solid var(--line)' }}
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: application form */}
          <div ref={formRef} className="rounded-2xl p-7" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
            <div className="font-display text-xl font-semibold mb-1">Apply now</div>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-soft)' }}>
              Fill in your details and we&apos;ll get back to you within a few business days.
            </p>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="text-3xl mb-3">✓</div>
                <div className="font-display text-lg font-semibold mb-1">Application submitted</div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Our HR team will contact you shortly.
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
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none"
                    style={{ border: '1.5px solid var(--line)' }}
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none"
                    style={{ border: '1.5px solid var(--line)' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
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
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className="rounded-lg px-3 py-2.5 text-sm outline-none"
                    style={{ border: '1.5px solid var(--line)' }}
                  >
                    <option value="">Select Position</option>
                    {positions?.map((p) => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                    <option value="Other">Other / General application</option>
                  </select>
                </div>

                <label
                  className="w-full rounded-xl p-5 text-center block cursor-pointer mb-3"
                  style={{ border: '1.5px dashed var(--line)' }}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                    required
                    className="hidden"
                  />
                  <div className="text-xl mb-1">📤</div>
                  <div className="text-sm font-semibold">
                    {resume ? resume.name : 'Click to upload your resume'}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>
                    PDF, DOC or DOCX — max 5MB
                  </div>
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Anything else you'd like to share (optional)"
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
                  {submitting ? 'Submitting…' : 'Submit application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
