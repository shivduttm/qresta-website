import type { Metadata } from 'next';
import CareersContent from './careers-content';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Work at Qresta, the company building the software Indian businesses run on: Restaurant Management, FitBizz, CloudKitchen, Qresta Invoice and Qresta HR. See open roles and apply.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Qresta',
    description: 'Open roles at Qresta, building restaurant, gym, cloud kitchen, GST billing and HR software for India.',
    url: '/careers',
  },
};

export default function Page() {
  return <CareersContent />;
}
