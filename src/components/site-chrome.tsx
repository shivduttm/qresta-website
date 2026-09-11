'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { FitBizzHeader, FitBizzFooter } from './fitbizz-chrome';
import { CloudKitchenHeader, CloudKitchenFooter } from './cloudkitchen-chrome';

/**
 * Three sites share this app and this domain: the restaurant site at the
 * root, the FitBizz gym site under /fitbizz, and CloudKitchen under
 * /cloudkitchen. Each gets its own header and footer, chosen by pathname,
 * so a gym owner on /fitbizz never sees a restaurant menu, and a cloud
 * kitchen never sees either. The <main> in between is the same.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';
  const isFitBizz = pathname === '/fitbizz' || pathname.startsWith('/fitbizz/');
  const isCloudKitchen = pathname === '/cloudkitchen' || pathname.startsWith('/cloudkitchen/');

  return (
    <>
      {isCloudKitchen ? <CloudKitchenHeader /> : isFitBizz ? <FitBizzHeader /> : <SiteHeader />}
      <main>{children}</main>
      {isCloudKitchen ? <CloudKitchenFooter /> : isFitBizz ? <FitBizzFooter /> : <SiteFooter />}
    </>
  );
}
