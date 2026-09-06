import type { Metadata } from 'next';
import ContactContent from './contact-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to the Qresta team about POS billing, kitchen display, QR ordering, Zomato and Swiggy orders, inventory and reports for your restaurant. Email info@qresta.in or call +91 82491 90169.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Qresta',
    description: 'Talk to the Qresta team about running your restaurant on one platform.',
    url: '/contact',
  },
};

export default function Page() {
  return <ContactContent />;
}
