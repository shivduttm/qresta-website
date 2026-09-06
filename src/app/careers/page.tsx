import type { Metadata } from 'next';
import CareersContent from './careers-content';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Work at Qresta, the restaurant operating system for India. See open roles and apply to join the team building billing, kitchen, QR ordering and online orders on one platform.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Qresta',
    description: 'Open roles at Qresta, the restaurant operating system for India.',
    url: '/careers',
  },
};

export default function Page() {
  return <CareersContent />;
}
