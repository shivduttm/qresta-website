import type { Metadata } from 'next';
import ContactContent from './contact-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to the Qresta team about restaurant management, cloud kitchen or gym software. Tell us what you run and we will show you the product built for it. Email info@qresta.in or call +91 82491 90169.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Qresta',
    description: 'Talk to the Qresta team about restaurant, cloud kitchen or gym software.',
    url: '/contact',
  },
};

export default function Page() {
  return <ContactContent />;
}
