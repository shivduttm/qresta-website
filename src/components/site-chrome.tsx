'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { CompanyHeader, CompanyFooter } from './company-chrome';
import { RestaurantHeader } from './restaurant-chrome';
import { RestaurantFooter } from './restaurant-footer';
import { FitBizzHeader, FitBizzFooter } from './fitbizz-chrome';
import { CloudKitchenHeader, CloudKitchenFooter } from './cloudkitchen-chrome';

/**
 * Four sites share this app and this domain: the company at the root,
 * and one product site under each of /restaurant, /cloudkitchen and
 * /fitbizz. Each gets its own header and footer, chosen by pathname, so
 * a gym owner never sees a restaurant menu and a visitor who lands on
 * the company page is offered all three. The <main> in between is the
 * same, and every footer carries the same three product links.
 *
 * Pages that belong to the company rather than to a product — /about,
 * /founder, /careers, /contact, /demo, /privacy-policy, /terms — fall
 * through to the company chrome.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';
  const under = (base: string) => pathname === base || pathname.startsWith(`${base}/`);
  const site = under('/restaurant') ? 'restaurant' : under('/fitbizz') ? 'fitbizz' : under('/cloudkitchen') ? 'cloudkitchen' : 'company';

  const header = {
    restaurant: <RestaurantHeader />,
    fitbizz: <FitBizzHeader />,
    cloudkitchen: <CloudKitchenHeader />,
    company: <CompanyHeader />,
  }[site];

  const footer = {
    restaurant: <RestaurantFooter />,
    fitbizz: <FitBizzFooter />,
    cloudkitchen: <CloudKitchenFooter />,
    company: <CompanyFooter />,
  }[site];

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
