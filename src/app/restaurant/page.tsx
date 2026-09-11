import type { Metadata } from 'next';
import RestaurantContent from './restaurant-content';
import { CONTACT, RESTAURANT, SITE_NAME, SITE_URL } from '@/lib/site';

// Thin server wrapper (the content is a client component and cannot
// export metadata) — the same pattern as /fitbizz and /cloudkitchen.
export const metadata: Metadata = {
  // Absolute: the layout template would append '· Qresta' to a title
  // that already carries the brand.
  title: { absolute: `${RESTAURANT.brandName} | Restaurant POS & billing software` },
  description: RESTAURANT.description,
  alternates: { canonical: RESTAURANT.path },
  keywords: [
    'restaurant management software India',
    'restaurant POS India',
    'restaurant billing software GST',
    'KOT and kitchen display system',
    'QR menu ordering restaurant',
    'Zomato Swiggy order management',
    'restaurant inventory software',
    'cafe and QSR billing software',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${RESTAURANT.brandName} | Restaurant POS & billing software`,
    description: RESTAURANT.description,
    url: `${SITE_URL}${RESTAURANT.path}`,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${RESTAURANT.brandName} | Restaurant POS & billing software`,
    description: RESTAURANT.description,
  },
};

export default function Page() {
  // Page-level structured data: the product as a SoftwareApplication,
  // published by the same Organization node the root layout declares.
  // No `offers` on purpose — this site carries no pricing.
  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}${RESTAURANT.path}#software`,
    name: RESTAURANT.name,
    alternateName: RESTAURANT.brandName,
    brand: { '@id': `${SITE_URL}${RESTAURANT.path}#brand` },
    description: RESTAURANT.description,
    url: `${SITE_URL}${RESTAURANT.path}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Restaurant management software',
    operatingSystem: 'Web, Android',
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    featureList: [
      'Offline-first counter billing with GST invoices',
      'KOT printing and kitchen display with station routing',
      'QR scan-and-order from the table, no app to install',
      'Zomato, Swiggy and own-website orders in one queue',
      'Inventory with recipe-level deduction and variance',
      'Multi-outlet head office, approvals and reports',
      'Captain and kitchen staff apps for Android',
    ],
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: CONTACT.email, telephone: CONTACT.phoneDisplay },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
      <RestaurantContent />
    </>
  );
}
