import type { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  // Absolute: the layout template would otherwise render this as
  // "About Qresta · Qresta".
  title: { absolute: 'About Qresta | Restaurant, gym, cloud kitchen, billing and HR software' },
  description:
    'Qresta builds software for Indian businesses — Restaurant Management, FitBizz for gyms, CloudKitchen for delivery-only kitchens, Qresta Invoice for GST billing and Qresta HR for payroll. Founded by Shivdutt Mohanty.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Qresta',
    description:
      'Five products from one company: restaurant management, gym automation, cloud kitchen software, GST billing and HR, built in India.',
    url: '/about',
  },
};

export default function Page() {
  return <AboutContent />;
}
