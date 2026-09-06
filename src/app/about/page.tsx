import type { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  // Absolute: the layout template would otherwise render this as
  // "About Qresta · Qresta".
  title: { absolute: 'About Qresta | Restaurant billing, kitchen and QR ordering platform' },
  description:
    'Qresta builds one platform for Indian restaurants: POS billing, kitchen display, QR ordering, online orders from Zomato and Swiggy, inventory and reports. Founded by Shivdutt Mohanty.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Qresta',
    description:
      'One platform for Indian restaurants: billing, kitchen, QR ordering, online orders, inventory and reports.',
    url: '/about',
  },
};

export default function Page() {
  return <AboutContent />;
}
