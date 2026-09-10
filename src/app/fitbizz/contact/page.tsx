import type { Metadata } from 'next';
import FitBizzContactContent from './contact-content';
import { CONTACT, FITBIZZ } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: `Contact ${FITBIZZ.brandName}` },
  description: `Talk to the FitBizz team about memberships, check-in, trainers, GST invoicing and payments for your gym or studio. Email ${CONTACT.email} or call ${CONTACT.phoneDisplay}.`,
  alternates: { canonical: `${FITBIZZ.path}/contact` },
  openGraph: {
    title: `Contact ${FITBIZZ.brandName}`,
    description: 'Talk to the FitBizz team about running your gym on one system.',
    url: `${FITBIZZ.path}/contact`,
  },
};

export default function Page() {
  return <FitBizzContactContent />;
}
