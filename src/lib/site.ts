/**
 * One source of truth for the facts that end up in <head>, in the
 * sitemap and in the structured data Google reads.
 *
 * Everything here is a public claim about the company, so it must match
 * what the site actually says elsewhere (footer, /founder, /contact).
 */

export const SITE_URL = 'https://qresta.in';

export const SITE_NAME = 'Qresta';

export const SITE_TAGLINE = 'The restaurant operating system for India';

export const SITE_DESCRIPTION =
  'Qresta runs billing, kitchen display, QR ordering, Zomato and Swiggy orders, inventory and reports on one platform — offline-first, GST-ready, built for Indian restaurants.';

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
