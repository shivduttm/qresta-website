/**
 * One source of truth for the facts that end up in <head>, in the
 * sitemap and in the structured data Google reads.
 *
 * Everything here is a public claim about the company, so it must match
 * what the site actually says elsewhere (footer, /founder, /contact).
 */

export const SITE_URL = 'https://qresta.in';

export const SITE_NAME = 'Qresta';

export const SITE_TAGLINE = 'Software for restaurants, gyms, cloud kitchens, billing and HR';

export const SITE_DESCRIPTION =
  'Qresta builds the software Indian businesses run on: Restaurant Management for dine-in and takeaway, FitBizz for gyms and studios, CloudKitchen for delivery-only kitchens, Qresta Invoice for GST billing and receivables, and Qresta HR for people, attendance and payroll — five products from one company, built in India.';

export const CONTACT = {
  email: 'info@qresta.in',
  phone: '+918249190169',
  phoneDisplay: '+91 82491 90169',
  region: 'Odisha',
  country: 'IN',
} as const;

/** Founder & CEO. Also rendered as prose on /founder. */
export const FOUNDER = {
  name: 'Shivdutt Mohanty',
  jobTitle: 'Founder & CEO',
  url: `${SITE_URL}/founder`,
  /** Stable node id so every page's JSON-LD points at the same person. */
  id: `${SITE_URL}/founder#shivdutt-mohanty`,
  description:
    'Shivdutt Mohanty is the Founder & CEO of Qresta, which builds the software Indian businesses run on: Restaurant Management, FitBizz for gyms, CloudKitchen for delivery-only kitchens, Qresta Invoice for GST billing and Qresta HR for HR and payroll.',
} as const;

/**
 * Official profiles, used for schema.org `sameAs` — this is how Google
 * ties the website, the company and the person together for a knowledge
 * panel.
 *
 * EMPTY ON PURPOSE. Add only profiles the company actually controls
 * (LinkedIn company page, the founder's LinkedIn, X, Instagram, the
 * Google Business Profile). A wrong or unowned URL here does more harm
 * than an absent one.
 */
export const ORG_PROFILES: string[] = [];
export const FOUNDER_PROFILES: string[] = [];

/** Every indexable page, in the order they matter. Feeds the sitemap. */
export const ROUTES: Array<{ path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/restaurant', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/fitbizz', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/fitbizz/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/cloudkitchen', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/cloudkitchen/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/founder', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/demo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

/**
 * Paths qresta.in serves by proxying through to the app (see
 * next.config.ts). They are private, per-session or per-table surfaces
 * with nothing to rank for, so they stay out of the index.
 */
export const DISALLOWED_PATHS = [
  '/dashboard',
  '/adminmanagementportal',
  '/login',
  '/forgot-password',
  '/signup',
  '/menu/',
  '/order/',
  '/stall/',
  '/app-assets/',
  '/api/',
  // FitBizz's own app routes, proxied the same way. /fitbizz itself is
  // the product page this site renders and stays indexable.
  '/fitbizz/login',
  '/fitbizz/register',
  '/fitbizz/forgot-password',
  '/fitbizz/dashboard',
  '/fitbizz/kiosk',
  '/fitbizz/pay/',
  '/fitbizz/_next/',
  // CloudKitchen's app routes, same arrangement. /cloudkitchen itself is
  // the product page this site renders and stays indexable.
  '/cloudkitchen/login',
  '/cloudkitchen/register',
  '/cloudkitchen/forgot-password',
  '/cloudkitchen/dashboard',
  '/cloudkitchen/_next/',
  // Qresta Invoice has no marketing page here — it is sold from the home
  // page's #invoice section — so its whole prefix is app: sign-in, every
  // organisation's books, printable invoices and the tokenised customer
  // portal links, none of which belong in a search index.
  '/invoice',
  // Qresta HR's sign-in, account recovery and every portal (admin,
  // manager, employee, recruiter, candidate, Qresta staff) are private.
  // The bare /hrsolution portal chooser and the public job listings under
  // /hrsolution/careers/ stay indexable.
  '/hrsolution/login',
  '/hrsolution/forgot-password',
  '/hrsolution/reset-password',
  '/hrsolution/mfa',
  '/hrsolution/sso',
  '/hrsolution/admin',
  '/hrsolution/manager',
  '/hrsolution/employee',
  '/hrsolution/recruiter',
  '/hrsolution/candidate',
  '/hrsolution/platform',
  '/hrsolution/build-id',
  '/hrsolution/api/',
  '/hrsolution/_next/',
];

/**
 * The first product. Sold from qresta.in/restaurant; the app itself is
 * reached at the domain root (/login, /dashboard, /stall/…) through the
 * proxy in next.config.ts — those paths predate this page and stay put,
 * because printed QR codes and saved logins point at them.
 */
export const RESTAURANT = {
  name: 'Qresta Restaurant',
  /** The phrase the product is searched for and listed under. */
  brandName: 'Qresta Restaurant Management',
  tagline: 'Restaurant management software by Qresta',
  description:
    'Qresta Restaurant Management runs counter billing, kitchen display, QR scan-and-order, Zomato and Swiggy orders, inventory with recipe-level deduction, and head-office reports on one offline-first, GST-ready platform.',
  path: '/restaurant',
  loginPath: '/login',
} as const;

/**
 * The second product. Sold from qresta.in/fitbizz; the app itself is a
 * separate service reached through the same proxy (see next.config.ts).
 */
export const FITBIZZ = {
  name: 'FitBizz',
  /** The phrase the product is searched for and listed under. */
  brandName: 'FitBizz by Qresta',
  tagline: 'Gym management software by Qresta',
  description:
    'FitBizz runs memberships, QR and biometric check-in, trainers and personal training, GST invoicing, a supplements POS, leads and reports for gyms and fitness studios — with members paying into the gym’s own payment gateway.',
  path: '/fitbizz',
  loginPath: '/fitbizz/login',
  registerPath: '/fitbizz/register',
} as const;

/**
 * The third product. Sold from qresta.in/cloudkitchen; the app itself is
 * a separate service reached through the same proxy (see next.config.ts).
 */
export const CLOUDKITCHEN = {
  name: 'CloudKitchen',
  /** The phrase the product is searched for and listed under. */
  brandName: 'CloudKitchen by Qresta',
  tagline: 'Cloud kitchen management software by Qresta',
  description:
    'CloudKitchen pulls Swiggy, Zomato and your own orders into one queue, runs a live kitchen display, costs every dish against live stock, and settles delivery, GST billing and reports for delivery-only kitchens running several brands from one address.',
  path: '/cloudkitchen',
  loginPath: '/cloudkitchen/login',
  registerPath: '/cloudkitchen/register',
} as const;

/**
 * The fourth product, GST billing. The app is served at qresta.in/invoice
 * (see next.config.ts); there is no separate marketing page, so the
 * product is sold from the home page's #invoice section.
 */
export const INVOICE = {
  name: 'Qresta Invoice',
  brandName: 'Qresta Invoice',
  tagline: 'GST billing and invoicing software by Qresta',
  description:
    'Qresta Invoice runs quotes, sales orders, delivery challans and GST tax invoices, purchases and expenses, payments and receivables, inventory and GSTR-1 / GSTR-3B returns for Indian businesses.',
  appPath: '/invoice',
} as const;

/**
 * The fifth product, HRMS and payroll. The app is served at
 * qresta.in/hrsolution (see next.config.ts); there is no separate marketing
 * page, so the product is sold from the home page's #hr section.
 */
export const HR = {
  name: 'Qresta HR',
  brandName: 'Qresta HR',
  tagline: 'HR and payroll software by Qresta',
  description:
    'Qresta HR keeps employee records, attendance, shifts and leave, payroll with Indian statutory deductions, hiring, performance and an employee app on one system for Indian companies.',
  appPath: '/hrsolution',
  loginPath: '/hrsolution/login',
} as const;

/**
 * The five products, in the order the home page presents them. This is
 * the one list the home page, every footer, the company nav, the contact
 * form and the structured data read from, so a sixth product is a single
 * edit here (plus its section data in home-content.tsx).
 *
 * `label` is the category a visitor searches for; `name` is the brand;
 * `short` is what fits in a pill. `href` is where every link on the
 * site sends a visitor: the product's section on the single home page.
 * `page` is the product's own standalone marketing page, where one
 * exists — kept for search engines and links already shared, and used for
 * the structured data's canonical URL.
 */
export const PRODUCTS = [
  {
    key: 'restaurant',
    label: 'Restaurant Management',
    short: 'Restaurant',
    name: RESTAURANT.name,
    brandName: RESTAURANT.brandName,
    href: '/#restaurant',
    page: RESTAURANT.path as string | null,
    for: 'Dine-in restaurants, cafés, QSR and food stalls',
    blurb:
      'Billing on the web or on a Windows till that works offline, a kitchen display that routes by station, QR ordering at the table, and online orders, stock and reports for one outlet or a chain.',
    points: ['POS billing and an offline Windows till', 'KOT, kitchen display and QR ordering', 'Online orders, inventory and Head Office'],
  },
  {
    key: 'fitbizz',
    label: 'Gym Automation',
    short: 'FitBizz',
    name: FITBIZZ.name,
    brandName: FITBIZZ.brandName,
    href: '/#fitbizz',
    page: FITBIZZ.path as string | null,
    for: 'Gyms, fitness studios and personal training',
    blurb:
      'Memberships, desk, kiosk and biometric check-in, trainers and PT packages, GST invoices and a supplements counter — with members paying into the gym’s own account.',
    points: ['Memberships, renewals and check-in', 'Trainers, PT packages and progress', 'GST billing into your own gateway'],
  },
  {
    key: 'cloudkitchen',
    label: 'Cloud Kitchen',
    short: 'CloudKitchen',
    name: CLOUDKITCHEN.name,
    brandName: CLOUDKITCHEN.brandName,
    href: '/#cloudkitchen',
    page: CLOUDKITCHEN.path as string | null,
    for: 'Delivery-only kitchens running one or many brands',
    blurb:
      'One order flow for every channel, a kitchen display that splits each order by station and keeps time, and a recipe behind each dish so you know what the plate actually earns.',
    points: ['Every channel in one order flow', 'Per-station kitchen display with timers', 'Recipe costing, inventory and dispatch'],
  },
  {
    key: 'invoice',
    label: 'GST Billing & Invoicing',
    short: 'Invoice',
    name: INVOICE.name,
    brandName: INVOICE.brandName,
    href: '/#invoice',
    page: null as string | null,
    for: 'Traders, retail counters, service firms and exporters',
    blurb:
      'Quotes that become sales orders, challans and GST tax invoices, purchases that feed input tax credit, payments applied against what is owed, and GST returns built from the same records.',
    points: ['Quotes, invoices, credit notes and purchases', 'GSTR-1, GSTR-3B and HSN summary', 'Quick Bill counter, stock and receivables'],
  },
  {
    key: 'hr',
    label: 'HR & Payroll',
    short: 'HR',
    name: HR.name,
    brandName: HR.brandName,
    href: '/#hr',
    page: null as string | null,
    for: 'Indian companies with teams, shifts and payroll to run',
    blurb:
      'Employee records, attendance and leave, and India payroll with PF, ESI, PT and TDS on one system — with an app your people use for punches, leave and payslips.',
    points: ['Employee records and org structure', 'Attendance, shifts, leave and holidays', 'Payroll, payslips and statutory deductions'],
  },
] as const;

export type Product = (typeof PRODUCTS)[number];

/** Absolute canonical URL for a product: its own page if it has one, else its home-page section. */
export function productUrl(p: Product): string {
  return p.page ? `${SITE_URL}${p.page}` : `${SITE_URL}${p.href}`;
}

/**
 * Stable schema.org @id for a product's Brand node. Products with their
 * own page keep the id they have always had (`/fitbizz#brand`), so search
 * engines see the same node across this change.
 */
export function productBrandId(p: Product): string {
  return p.page ? `${SITE_URL}${p.page}#brand` : `${SITE_URL}/#${p.key}-brand`;
}

/** The image a product's Brand node cites: its share card, or the company logo. */
export function productLogo(p: Product): string {
  return p.page ? `${SITE_URL}${p.page}/opengraph-image` : `${SITE_URL}/qresta-logo.png`;
}

export type ProductKey = (typeof PRODUCTS)[number]['key'];
