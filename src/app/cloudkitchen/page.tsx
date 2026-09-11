import type { Metadata } from 'next';
import CloudKitchenContent from './cloudkitchen-content';
import { CLOUDKITCHEN, CONTACT, SITE_NAME, SITE_URL } from '@/lib/site';

// Thin server wrapper (the content is a client component and cannot
// export metadata) — the same pattern as the home page and /fitbizz.
export const metadata: Metadata = {
  // Absolute: the layout template would append '· Qresta' to a title
  // that already carries the brand phrase.
  title: { absolute: `${CLOUDKITCHEN.brandName} | Cloud kitchen management software` },
  description: CLOUDKITCHEN.description,
  alternates: { canonical: CLOUDKITCHEN.path },
  keywords: [
    'CloudKitchen by Qresta',
    'cloud kitchen software India',
    'cloud kitchen management software',
    'ghost kitchen software',
    'Swiggy Zomato order management software',
    'kitchen display system India',
    'restaurant food cost software',
    'multi brand cloud kitchen software',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${CLOUDKITCHEN.brandName} | Cloud kitchen management software`,
    description: CLOUDKITCHEN.description,
    url: `${SITE_URL}${CLOUDKITCHEN.path}`,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CLOUDKITCHEN.brandName} | Cloud kitchen management software`,
    description: CLOUDKITCHEN.description,
  },
};

export default function Page() {
  // Page-level structured data: the product as a SoftwareApplication,
  // published by the same Organization node the root layout declares.
  // No `offers` on purpose — this site carries no pricing.
  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}${CLOUDKITCHEN.path}#software`,
    name: CLOUDKITCHEN.name,
    alternateName: CLOUDKITCHEN.brandName,
    brand: { '@id': `${SITE_URL}${CLOUDKITCHEN.path}#brand` },
    description: CLOUDKITCHEN.description,
    url: `${SITE_URL}${CLOUDKITCHEN.path}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Cloud kitchen management software',
    operatingSystem: 'Web, Android',
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    featureList: [
      'Orders from Swiggy, Zomato, ONDC, your own site and phone in one queue',
      'Kitchen display with one ticket per station and live prep timers',
      'Multi-brand menus with variants, add-ons, timings and station routing',
      'Recipes that deduct real stock and cost every dish',
      'Inventory per outlet with wastage, transfers and low-stock alerts',
      'Purchase orders, goods receipts and supplier balances',
      'Rider dispatch, delivery zones and cash-on-delivery reconciliation',
      'GST tax invoices, refunds, settlements and seven CSV reports',
    ],
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: CONTACT.email, telephone: CONTACT.phoneDisplay },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
      <CloudKitchenContent />
    </>
  );
}
