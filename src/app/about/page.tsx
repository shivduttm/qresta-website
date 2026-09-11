import type { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  // Absolute: the layout template would otherwise render this as
  // "About Qresta · Qresta".
  title: { absolute: 'About Qresta | Restaurant, cloud kitchen and gym software' },
  description:
    'Qresta builds operating software for Indian food and fitness businesses — Restaurant Management, CloudKitchen for delivery-only kitchens and FitBizz for gyms, on one platform. Founded by Shivdutt Mohanty.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Qresta',
    description:
      'Three products on one platform: restaurant management, cloud kitchen software and gym automation, built in India.',
    url: '/about',
  },
};

export default function Page() {
  return <AboutContent />;
}
