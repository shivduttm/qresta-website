import type { Metadata } from 'next';
import FitBizzContent from './fitbizz-content';
import { CONTACT, FITBIZZ, SITE_NAME, SITE_URL } from '@/lib/site';

// Thin server wrapper (the content is a client component and cannot
// export metadata) — the same pattern as the home page and /about.
export const metadata: Metadata = {
  title: `${FITBIZZ.name} — gym management software`,
  description: FITBIZZ.description,
  alternates: { canonical: FITBIZZ.path },
  keywords: [
    'gym management software India',
    'gym membership software',
    'gym billing software GST',
    'gym attendance biometric software',
    'fitness studio management software',
    'personal training management software',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${FITBIZZ.name} — gym management software by ${SITE_NAME}`,
    description: FITBIZZ.description,
    url: `${SITE_URL}${FITBIZZ.path}`,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FITBIZZ.name} — gym management software by ${SITE_NAME}`,
    description: FITBIZZ.description,
  },
};

export default function Page() {
  // Page-level structured data: the product as a SoftwareApplication,
  // published by the same Organization node the root layout declares.
  // No `offers` on purpose — this site carries no pricing.
  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}${FITBIZZ.path}#software`,
    name: FITBIZZ.name,
    alternateName: `${FITBIZZ.name} by ${SITE_NAME}`,
    description: FITBIZZ.description,
    url: `${SITE_URL}${FITBIZZ.path}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Gym management software',
    operatingSystem: 'Web',
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    featureList: [
      'Member profiles and memberships (sell, renew, upgrade, freeze, transfer)',
      'Attendance by front desk, QR kiosk and biometric devices',
      'Trainers, staff roles and personal training packages',
      'Workout builder, diet plans and progress assessments',
      'GST tax invoices, payment links and refunds',
      'Supplements inventory and point of sale',
      'Leads CRM, communication campaigns and reports',
      'Members pay into the gym’s own payment gateway',
    ],
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: CONTACT.email, telephone: CONTACT.phoneDisplay },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
      <FitBizzContent />
    </>
  );
}
