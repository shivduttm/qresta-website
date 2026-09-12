/**
 * One source of truth for the facts that end up in <head>, in the
 * sitemap and in the structured data Google reads.
 *
 * Everything here is a public claim about the company, so it must match
 * what the site actually says elsewhere (footer, /founder, /contact).
 */

export const SITE_URL = 'https://qresta.in';

export const SITE_NAME = 'Qresta';

export const SITE_TAGLINE = 'Operating software for restaurants, cloud kitchens and gyms';

export const SITE_DESCRIPTION =
  'Qresta builds the software Indian food and fitness businesses run on: Restaurant Management for dine-in and takeaway, CloudKitchen for delivery-only kitchens, and FitBizz for gyms and studios — each offline-aware, GST-ready and built for how these floors actually work.';

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
    'Shivdutt Mohanty is the Founder & CEO of Qresta, a restaurant technology platform helping restaurants and cafes run billing, kitchen, QR ordering and online orders on one system.',
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
 * The three products, in the order the company leads with them. This is
 * the one list the home page, every footer and the products nav read
 * from, so a fourth product is a single edit here.
 *
 * `label` is what a visitor sees in navigation — the category, because
 * that is what they are looking for. `name` is the brand.
 */
export const PRODUCTS = [
  {
    key: 'restaurant',
    label: 'Restaurant Management',
    name: RESTAURANT.name,
    brandName: RESTAURANT.brandName,
    path: RESTAURANT.path,
    for: 'Dine-in, cafés, QSR, bars and food courts',
    blurb:
      'Billing that keeps working when the internet does not, a kitchen display that routes by station, QR ordering at the table, and Zomato and Swiggy in the same queue as everything else.',
    points: ['Offline-first POS and GST invoices', 'KOT, kitchen display and QR ordering', 'Online orders, inventory and head office'],
  },
  {
    key: 'cloudkitchen',
    label: 'Cloud Kitchen',
    name: CLOUDKITCHEN.name,
    brandName: CLOUDKITCHEN.brandName,
    path: CLOUDKITCHEN.path,
    for: 'Delivery-only kitchens running one or many brands',
    blurb:
      'Every channel in one queue, a kitchen display that keeps time by station, and a recipe behind each dish so you know what the plate actually earns.',
    points: ['Swiggy, Zomato, ONDC and your own orders', 'Kitchen display with live prep timers', 'Recipe costing, inventory and dispatch'],
  },
  {
    key: 'fitbizz',
    label: 'Gym Automation',
    name: FITBIZZ.name,
    brandName: FITBIZZ.brandName,
    path: FITBIZZ.path,
    for: 'Gyms, fitness studios and personal training',
    blurb:
      'Memberships, QR and biometric check-in, trainers and PT packages, GST invoices and a supplements counter — with members paying into the gym’s own account.',
    points: ['Memberships, renewals and check-in', 'Trainers, PT packages and progress', 'GST billing into your own gateway'],
  },
] as const;

export type ProductKey = (typeof PRODUCTS)[number]['key'];
