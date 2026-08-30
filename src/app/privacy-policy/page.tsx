import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | QResta',
  description: 'How QResta collects, uses and protects your information.',
};

const SECTIONS = [
  {
    id: 'introduction',
    num: '01',
    title: 'Introduction',
    body: (
      <>
        <p>
          QResta Technologies ("QResta", "we", "us" or "our") operates the QResta restaurant
          SaaS platform, including our website at <strong>qresta.in</strong> and related
          dashboards, mobile-optimised ordering pages, and support channels (together, the
          "Service").
        </p>
        <p>
          This Privacy Policy explains what information we collect from restaurant owners,
          staff, guests who place orders through a QResta menu, job applicants, and visitors
          to our website, how we use that information, and the choices you have. By using
          the Service, you agree to the collection and use of information in accordance with
          this Policy.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    num: '02',
    title: 'Information We Collect',
    body: (
      <>
        <p>We collect information in the following ways:</p>
        <ul>
          <li><strong>Account & business information:</strong> restaurant name, owner/contact name, email address, mobile number, city, and other details you provide when booking a demo, requesting an appointment, or signing up for the Service.</li>
          <li><strong>Order & menu data:</strong> menu items, prices, and order details processed through the platform when a guest scans a QR code and places an order.</li>
          <li><strong>Career application data:</strong> name, email, mobile number, the position applied for, your resume file, and any cover letter or message you submit through our Careers page.</li>
          <li><strong>Payment information:</strong> subscription payments are processed by our third-party payment partners. QResta does not store your full card, UPI, or bank account details on our own servers.</li>
          <li><strong>Technical & usage data:</strong> IP address, browser type, device information, pages visited, and similar usage data collected automatically through standard web logs and, where enabled, analytics tools.</li>
          <li><strong>Communications:</strong> records of correspondence when you contact our support or sales team by email, phone, or web form.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    num: '03',
    title: 'How We Use Your Information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the QResta platform, including QR menus, order management, and the chef/waiter panels.</li>
          <li>Respond to demo requests, appointment bookings, and support enquiries.</li>
          <li>Process job applications and communicate with candidates about open roles.</li>
          <li>Send service-related notices, billing information, and updates about your account.</li>
          <li>Improve the Service, troubleshoot issues, and understand how the platform is used.</li>
          <li>Detect, prevent, and address fraud, abuse, or security issues.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    num: '04',
    title: 'Cookies & Tracking Technologies',
    body: (
      <p>
        Our website may use cookies and similar technologies to keep you signed in, remember
        preferences, and understand how visitors use our site. You can control or disable
        cookies through your browser settings; doing so may affect some functionality of the
        Service.
      </p>
    ),
  },
  {
    id: 'sharing',
    num: '05',
    title: 'How We Share Your Information',
    body: (
      <>
        <p>We share information only in the following circumstances:</p>
        <ul>
          <li><strong>Service providers:</strong> hosting, email delivery, payment processing, and analytics vendors who process data on our behalf under appropriate confidentiality obligations.</li>
          <li><strong>Legal requirements:</strong> where required to comply with applicable law, regulation, legal process, or a valid governmental request.</li>
          <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of that transaction, subject to this Policy or an equivalent one.</li>
          <li><strong>With your consent:</strong> in any other case where you have given us explicit permission to share your information.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    num: '06',
    title: 'Data Security',
    body: (
      <p>
        We use reasonable technical and organisational measures designed to protect your
        information against unauthorised access, alteration, disclosure, or destruction.
        However, no method of transmission over the internet or electronic storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: 'retention',
    num: '07',
    title: 'Data Retention',
    body: (
      <p>
        We retain personal information for as long as necessary to provide the Service,
        comply with our legal obligations, resolve disputes, and enforce our agreements.
        Career application data, including resumes, is retained for a reasonable period to
        support our hiring process and may be deleted or anonymised thereafter.
      </p>
    ),
  },
  {
    id: 'your-rights',
    num: '08',
    title: 'Your Rights & Choices',
    body: (
      <p>
        Depending on your location and applicable law, you may have the right to access,
        correct, update, or request deletion of your personal information. You can exercise
        these rights by contacting us using the details below, and we will respond within a
        reasonable timeframe.
      </p>
    ),
  },
  {
    id: 'children',
    num: '09',
    title: "Children's Privacy",
    body: (
      <p>
        The Service is intended for business use by restaurant owners, staff, and their
        guests, and is not directed at children. We do not knowingly collect personal
        information from children. If you believe a child has provided us with personal
        information, please contact us so we can take appropriate action.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    num: '10',
    title: 'Third-Party Links',
    body: (
      <p>
        Our website and platform may contain links to third-party websites or services,
        including payment gateways. We are not responsible for the privacy practices of
        these third parties, and we encourage you to review their respective privacy
        policies.
      </p>
    ),
  },
  {
    id: 'changes',
    num: '11',
    title: 'Changes to This Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. Material changes will be
        reflected by updating the "Last updated" date at the top of this page. We encourage
        you to review this Policy periodically.
      </p>
    ),
  },
  {
    id: 'contact',
    num: '12',
    title: 'Contact Us',
    body: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your information,
          please reach out to us:
        </p>
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

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-14">
        <div className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--blue-600)' }}>
          Legal
        </div>
        <h1 className="font-display text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-lg mb-4" style={{ color: 'var(--ink-soft)' }}>
          How QResta collects, uses and protects your information.
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
