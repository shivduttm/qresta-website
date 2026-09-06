import type { Metadata } from 'next';
import DemoContent from './demo-content';

export const metadata: Metadata = {
  title: 'Book a demo',
  description:
    'Book a 20-minute Qresta demo. We import your menu and show you a live bill, the kitchen display and QR ordering running on your own dishes and tables.',
  alternates: { canonical: '/demo' },
  openGraph: {
    title: 'Book a Qresta demo',
    description: 'See Qresta running on your own menu in 20 minutes.',
    url: '/demo',
  },
};

export default function Page() {
  return <DemoContent />;
}
