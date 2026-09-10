'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { FitBizzHeader, FitBizzFooter } from './fitbizz-chrome';

/**
 * Two sites share this app and this domain: the restaurant site at the
 * root, and the FitBizz gym site under /fitbizz. Each gets its own header
 * and footer, chosen by pathname, so a gym owner on /fitbizz never sees a
 * restaurant menu, and vice versa. The <main> in between is the same.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';
  const isFitBizz = pathname === '/fitbizz' || pathname.startsWith('/fitbizz/');

  return (
    <>
      {isFitBizz ? <FitBizzHeader /> : <SiteHeader />}
      <main>{children}</main>
      {isFitBizz ? <FitBizzFooter /> : <SiteFooter />}
    </>
  );
}
