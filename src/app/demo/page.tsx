import type { Metadata } from 'next';
import DemoContent from './demo-content';

export const metadata: Metadata = {
  title: 'Book a demo',
  description:
    'Book a 20-minute Qresta demo for Restaurant Management, FitBizz, CloudKitchen, Qresta Invoice or Qresta HR. Tell us what you run and we set the right product up on your own menu, plans, items or team.',
  alternates: { canonical: '/demo' },
  openGraph: {
    title: 'Book a Qresta demo',
    description: 'See the right Qresta product running on your own business in 20 minutes.',
    url: '/demo',
  },
};

export default function Page() {
  return <DemoContent />;
}
