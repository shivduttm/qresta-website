import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms governing your use of the Qresta platform.',
  alternates: { canonical: '/terms' },
};

const SECTIONS = [
  {
    id: 'acceptance',
    num: '01',
    title: 'Acceptance of Terms',
    body: (
      <p>
        These Terms & Conditions ("Terms") govern your access to and use of the Qresta
        website, dashboard, and related services (together, the "Service"), provided by
        Qresta Technologies ("Qresta", "we", "us" or "our"). By accessing or using the
        Service, booking a demo, or signing up for an account, you agree to be bound by
        these Terms. If you do not agree, please do not use the Service.
      </p>
    ),
  },
  {
    id: 'description',
    num: '02',
    title: 'Description of Service',
    body: (
      <p>
        Qresta provides a restaurant SaaS platform that includes QR-based digital menus,
        order and billing management, a chef and waiter panel, analytics, and related tools
        designed to help restaurants, cafes, hotels, food courts, and cloud kitchens manage
        their operations. We may add, change, or remove features of the Service from time
        to time.
      </p>
    ),
  },
  {
    id: 'eligibility',
    num: '03',
    title: 'Eligibility & Accounts',
    body: (
      <p>
        The Service is intended for use by restaurant owners, managers, and authorised staff
        acting on behalf of a business. You must provide accurate and complete information
        when booking a demo, requesting an appointment, or setting up an account, and you
        are responsible for maintaining the confidentiality of any login credentials
        associated with your account.
      </p>
    ),
  },
  {
    id: 'subscription',
    num: '04',
    title: 'Subscription & Billing',
    body: (
      <>
        <p>
          Access to the full Service is provided on a paid subscription basis. Current
          pricing, billing frequency, and included features are shared with you during
          onboarding or displayed on our website at the time of signup, and may be updated
          from time to time. Subscriptions are billed in advance for the applicable period
          and, unless stated otherwise, do not automatically entitle you to a refund for
          unused time if you cancel partway through a billing cycle.
        </p>
        <p>
          You are responsible for keeping your billing information current. We reserve the
          right to suspend or restrict access to the Service if payment is not received as
          agreed.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    num: '05',
    title: 'Acceptable Use',
    body: (
      <>
        <p>When using the Service, you agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose or in violation of any applicable law or regulation.</li>
          <li>Upload menu content, images, or other material that infringes on the intellectual property or rights of others.</li>
          <li>Attempt to gain unauthorised access to the Service, other accounts, or our underlying systems.</li>
          <li>Interfere with or disrupt the integrity or performance of the Service, including through malware, scraping, or excessive automated requests.</li>
          <li>Misrepresent your identity or your affiliation with a business when creating an account or submitting a job application.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    num: '06',
    title: 'Content & Intellectual Property',
    body: (
      <p>
        The Qresta name, logo, platform design, and underlying software are the property of
        Qresta Technologies and are protected by applicable intellectual property laws. You
        retain ownership of the menu content, images, and business information you upload,
        and you grant Qresta a limited licence to host, display, and process that content
        solely for the purpose of operating the Service on your behalf.
      </p>
    ),
  },
  {
    id: 'third-party',
    num: '07',
    title: 'Third-Party Services',
    body: (
      <p>
        The Service may rely on or integrate with third-party providers, including payment
        processors, email delivery services, and hosting providers. We are not responsible
        for the availability, accuracy, or practices of these third-party services, and your
        use of them may be subject to their own terms.
      </p>
    ),
  },
  {
    id: 'disclaimers',
    num: '08',
    title: 'Disclaimers & Limitation of Liability',
    body: (
      <>
        <p>
          The Service is provided on an "as is" and "as available" basis without warranties
          of any kind, whether express or implied, to the fullest extent permitted by law.
          We do not guarantee that the Service will be uninterrupted, error-free, or
          completely secure.
        </p>
        <p>
          To the maximum extent permitted by applicable law, Qresta shall not be liable for
          any indirect, incidental, special, or consequential damages, or for any loss of
          revenue, profits, or data, arising out of or related to your use of the Service.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    num: '09',
    title: 'Indemnification',
    body: (
      <p>
        You agree to indemnify and hold Qresta and its officers, employees, and partners
        harmless from any claims, damages, or expenses arising from your use of the Service,
        your violation of these Terms, or your violation of any rights of a third party.
      </p>
    ),
  },
  {
    id: 'termination',
    num: '10',
    title: 'Termination',
    body: (
      <p>
        You may stop using the Service or cancel your subscription at any time by contacting
        us. We may suspend or terminate access to the Service if these Terms are violated,
        if payment is not received as agreed, or where we reasonably believe continued
        access poses a risk to Qresta, other users, or the integrity of the Service.
      </p>
    ),
  },
  {
    id: 'law',
    num: '11',
    title: 'Governing Law & Dispute Resolution',
    body: (
      <p>
        These Terms are governed by the laws of India. Any disputes arising out of or in
        connection with these Terms or the Service shall be subject to the exclusive
        jurisdiction of the courts located in Odisha, India.
      </p>
    ),
  },
  {
    id: 'changes',
    num: '12',
    title: 'Changes to Terms',
    body: (
      <p>
        We may update these Terms from time to time to reflect changes to the Service or
        for legal or operational reasons. Material changes will be reflected by updating the
        "Last updated" date at the top of this page. Continued use of the Service after
        changes take effect constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    num: '13',
    title: 'Contact Us',
    body: (
      <>
        <p>If you have questions about these Terms, please reach out to us:</p>
        <div className="rounded-2xl p-5 mt-3" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
          <div className="grid gap-1.5 text-sm">
            <a href="mailto:info@qresta.in" style={{ color: 'var(--blue-600)' }}>info@qresta.in</a>
            <a href="tel:+918249190169" style={{ color: 'var(--blue-600)' }}>+91 82491 90169</a>
            <span style={{ color: 'var(--ink-soft)' }}>Odisha, India</span>
          </div>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-14">
        <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--blue-600)' }}>
          Legal
        </div>
        <h1 className="font-display text-4xl font-bold mb-3">Terms & Conditions</h1>
        <p className="text-lg mb-4" style={{ color: 'var(--ink-soft)' }}>
          The terms governing your use of the Qresta platform.
        </p>
        <span
          className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold"
          style={{ background: 'var(--paper-alt)', color: 'var(--ink-soft)' }}
        >
          Last updated: 30 August 2026
        </span>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-10">
        <nav className="hidden lg:grid gap-1 content-start sticky top-24 self-start">
          <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--ink-faint)' }}>
            On this page
          </div>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm py-1.5"
              style={{ color: 'var(--ink-soft)' }}
            >
              {s.num}. {s.title}
            </a>
          ))}
        </nav>

        <article className="grid gap-14">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id}>
              <div className="font-mono text-xs font-semibold mb-2" style={{ color: 'var(--ink-faint)' }}>
                {s.num}
              </div>
              <h2 className="font-display text-2xl font-semibold mb-4">{s.title}</h2>
              <div className="grid gap-3 text-sm leading-relaxed [&_ul]:grid [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc" style={{ color: 'var(--ink-soft)' }}>
                {s.body}
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
