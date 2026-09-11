import type { Metadata } from 'next';
import CloudKitchenContactContent from './contact-content';
import { CLOUDKITCHEN, CONTACT } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: `Contact ${CLOUDKITCHEN.brandName}` },
  description: `Talk to the CloudKitchen team about aggregator orders, the kitchen display, food cost, delivery and GST billing for your cloud kitchen. Email ${CONTACT.email} or call ${CONTACT.phoneDisplay}.`,
  alternates: { canonical: `${CLOUDKITCHEN.path}/contact` },
  openGraph: {
    title: `Contact ${CLOUDKITCHEN.brandName}`,
    description: 'Talk to the CloudKitchen team about running your kitchen on one system.',
    url: `${CLOUDKITCHEN.path}/contact`,
  },
};

export default function Page() {
  return <CloudKitchenContactContent />;
}
