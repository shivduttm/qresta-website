'use client';

import Link from 'next/link';
import { useEffect, useState, type MouseEvent } from 'react';
import { useLeadModals, type LeadProduct } from '@/components/lead-modals';
import { CloudKitchenMark, FitBizzMark, QrestaHrMark, QrestaInvoiceMark, QrestaMark } from '@/components/brand';
import { PRODUCTS, SITE_NAME, type ProductKey } from '@/lib/site';

/* =====================================================================
   qresta.in — every product on one page
   =====================================================================

   The whole company on a single page: what Qresta is, an index of the
   five products, then one full section per product — what it does, the
   modules it ships, who it is for and checkable facts about it — and
   finally what all five share. Navigation anywhere on the site points at
   these sections (PRODUCTS[].href in src/lib/site.ts).

   Everything a marketer would edit is data in this block; the layout
   below stays layout. The site's rules apply to every line of it:
   - No prices, plans, trials or commercial terms. That conversation
     happens on the demo call.
   - No business metrics (customers, orders, uptime). Every number is a
     count of something in the software, checked against the code.
   - No sign-in or sign-up links. Visitors come in through the demo
     request and the contact page; staff reach their apps directly.
   ===================================================================== */

type IconKind =
  | 'pos' | 'kot' | 'qr' | 'online' | 'inventory' | 'reports'
  | 'members' | 'attendance' | 'trainers' | 'fitness' | 'billing' | 'growth'
  | 'orders' | 'kitchen' | 'menu' | 'costing' | 'delivery'
  | 'docs' | 'gst' | 'money' | 'counter' | 'stock' | 'repeat'
  | 'people' | 'clock' | 'leave' | 'payroll' | 'hiring' | 'performance' | 'helpdesk'
  | 'offline' | 'roles' | 'multi' | 'support' | 'shield';

type Tone = 'green' | 'amber' | 'blue' | 'red';

interface ProductDetail {
  /** The section's one-line promise. */
  headline: string;
  intro: string;
  /** Short capability tags under the header. */
  strip: string[];
  modules: Array<{ icon: IconKind; title: string; body: string }>;
  /** The one thing this product is proudest of, with a mini app screen beside it. */
  spotlight: {
    label: string;
    title: string;
    points: string[];
    panel: { title: string; status: string; rows: Array<{ a: string; b: string; status: string; tone: Tone; value: string }>; chips?: string[] };
  };
  /** Counts of things in the software, never business metrics. */
  facts: Array<{ value: string; label: string; sub: string }>;
  audiences: string[];
  contactHref: string;
}

const DETAILS: Record<ProductKey, ProductDetail> = {
  restaurant: {
    headline: 'The restaurant operating system built for India’s rush hour.',
    intro:
      'Billing, kitchen display, QR ordering, online orders, stock and reports in one system — on the web, on an Android app for captains and the kitchen, and on a Windows till that keeps billing with no network and syncs when it is back.',
    strip: ['Offline Windows till', 'Kitchen display & KOT', 'QR scan & order', 'GST billing', 'Head Office for many outlets'],
    modules: [
      { icon: 'pos', title: 'POS billing', body: 'Bill on the web or on the Qresta POS Windows till: dine-in, takeaway and delivery, split tenders, a UPI QR for the exact amount, GST bills and F-key shortcuts. The till keeps billing offline and syncs later.' },
      { icon: 'kot', title: 'KOT & kitchen display', body: 'KOTs route by station, one slip per station. The kitchen display shows tickets by state with running timers, a summary of open items and an in-stock switch for every dish.' },
      { icon: 'qr', title: 'QR scan & order', body: 'Guests open the menu in the browser with no login to order, track it, call a waiter, ask for the bill and pay online. An outlet can require a captain’s approval before the KOT fires.' },
      { icon: 'online', title: 'Online orders', body: 'One queue for online channels with accept or reject, a promised prep time, per-channel pause and auto-accept, and hand-over with the rider’s OTP. Orders arrive from your website or partners through the Open API, or are keyed in.' },
      { icon: 'inventory', title: 'Inventory & purchases', body: 'A stock ledger where recipes deduct at the point you choose, with wastage, counts and transfers through approval, purchase orders, goods receipts against vendor bills, and weighted-average or FIFO valuation.' },
      { icon: 'reports', title: 'Reports, day-end & Head Office', body: '18 reports with Excel export, a day-end close with cash count, tender reconciliation and an emailed Z-report, and a Head Office view that compares outlets, pushes menus and raises group alerts.' },
    ],
    spotlight: {
      label: 'From the table to the pass',
      title: 'Every order reaches the right station, and nobody misses a new one.',
      points: [
        'Captains take orders on the Android app, and each kitchen station gets its own KOT',
        'QR orders can wait for a captain’s approval before anything reaches the kitchen',
        'A dish switched off in the kitchen stops selling at the counter and on the QR menu',
        'New orders ring the Android app full-screen, even over the lock screen, for up to two minutes',
      ],
      panel: {
        title: 'Live orders',
        status: 'Counter online',
        rows: [
          { a: 'Table 6 · Dine-in', b: 'KOT fired · 2 stations', status: 'Preparing', tone: 'amber', value: '₹1,240' },
          { a: 'Table 2 · QR order', b: 'Awaiting captain', status: 'Approve', tone: 'blue', value: '₹560' },
          { a: 'Takeaway #18', b: 'Packed at the pass', status: 'Ready', tone: 'green', value: '₹380' },
          { a: 'Delivery #4410', b: 'Rider OTP noted', status: 'Handed over', tone: 'green', value: '₹890' },
        ],
      },
    },
    facts: [
      { value: '18', label: 'Reports in the library', sub: 'Sales, tax, inventory, people, customers — Excel export' },
      { value: '9', label: 'Payment gateways an outlet can connect', sub: 'Razorpay, PayU, Cashfree, PhonePe and more' },
      { value: '20', label: 'Permission switches per role and person', sub: 'Plus a discount cap per account' },
      { value: '4', label: 'Card and UPI options at the till', sub: 'Pine Labs, Ezetap, Paytm EDC, UPI QR' },
    ],
    audiences: ['Dine-in restaurants', 'Cafés & QSR', 'Multi-outlet chains', 'Chains with a central kitchen', 'Takeaway & delivery counters', 'Food stalls & carts'],
    contactHref: '/contact',
  },

  fitbizz: {
    headline: 'Run the whole gym from one screen. Keep every rupee your members pay.',
    intro:
      'Memberships, desk, kiosk and biometric check-in, trainers and PT, GST invoices, a supplements counter, leads and reports — with an Android app for members, and payments that settle into the gym’s own gateway, not ours.',
    strip: ['Desk, kiosk & biometric check-in', 'GST tax invoices', 'Your own payment gateway', 'Supplements POS', 'Android member app'],
    modules: [
      { icon: 'members', title: 'Members & memberships', body: 'Member profiles with notes, tags and documents. Sell, renew, upgrade, freeze, transfer or cancel a membership with a refund; a freeze pushes the end date and statuses roll forward every day.' },
      { icon: 'attendance', title: 'Attendance & biometric devices', body: 'Check-in at the desk by member ID, phone or USB scanner, at a self check-in kiosk per branch, or from a biometric device through a connector or the FitBizz Desk Windows app. Duplicate punches are ignored.' },
      { icon: 'trainers', title: 'Trainers & personal training', body: 'Five staff roles across a 25-permission matrix the owner can tighten per role or per person. PT packages, sessions with clash checks, no-shows and sessions left, and commission in the trainer report.' },
      { icon: 'fitness', title: 'Workouts, diets & progress', body: 'Workout templates from a 36-exercise starter library plus your own, diet templates with meals and macros, assessments, goals and progress photos kept only with consent.' },
      { icon: 'billing', title: 'Payments, invoices & POS', body: 'GST invoices split CGST/SGST or IGST from the buyer’s GSTIN, with your own numbering and PDFs emailed with reply-to the gym. Payment links go through your gateway, and every supplements sale is invoiced and deducts stock.' },
      { icon: 'growth', title: 'Leads, messages & reports', body: 'A lead Kanban with follow-ups, SMS and WhatsApp templates sent through your own providers once connected, email sent in the gym’s name with replies to the gym, automatic expiry and birthday messages, expenses, and 8 reports — 6 with CSV export.' },
    ],
    spotlight: {
      label: 'Your money stays yours',
      title: 'Members pay the gym directly. FitBizz is never in the middle.',
      points: [
        'Memberships, PT and supplement sales settle straight into the gym’s own account',
        'Send a payment link for dues or a renewal, or let members renew from the Android app',
        'Gateway keys are stored encrypted and never shown again, and there is no fallback to Qresta’s account',
      ],
      panel: {
        title: 'Payments',
        status: 'Settles to the gym',
        rows: [
          { a: 'Priyanka Das', b: 'Annual membership renewal', status: 'Paid · UPI', tone: 'green', value: '₹14,999' },
          { a: 'Rahul Mishra', b: 'Quarterly · payment link', status: 'Link sent', tone: 'blue', value: '₹3,900' },
          { a: 'Sneha Patnaik', b: 'PT pack · 12 sessions', status: 'Paid · card', tone: 'green', value: '₹9,000' },
          { a: 'Counter sale', b: 'Whey 1 kg + shaker', status: 'Invoice emailed', tone: 'green', value: '₹3,150' },
        ],
        chips: ['Razorpay', 'PayU', 'Cashfree', 'PhonePe', 'Paytm', 'CCAvenue', 'Instamojo', 'Easebuzz', 'Stripe'],
      },
    },
    facts: [
      { value: '9', label: 'Payment gateways a gym can connect', sub: 'Members pay you, not us' },
      { value: '25', label: 'Permissions across 5 staff roles', sub: 'Owner, manager, front desk, trainer, accountant' },
      { value: '3', label: 'Ways a check-in arrives', sub: 'Front desk, branch kiosk, biometric device' },
      { value: '6', label: 'SMS and WhatsApp providers', sub: 'Messages go out under the gym’s own name' },
    ],
    audiences: ['Gyms', 'Fitness studios', 'CrossFit boxes', 'Personal training studios', 'Multi-branch chains'],
    contactHref: '/fitbizz/contact',
  },

  cloudkitchen: {
    headline: 'Every channel, one queue. Every dish, a real cost.',
    intro:
      'Every order — keyed in from Swiggy or Zomato, posted by your website through a webhook, or taken on the phone — on one board with one status flow. A kitchen display that splits each order by station and keeps time. Recipes that deduct real stock and show what each plate earns, across every brand you cook from one kitchen.',
    strip: ['One order flow, every channel', 'Per-station kitchen display', 'Versioned recipes & food cost', 'Several brands, one kitchen', 'Rider dispatch & COD'],
    modules: [
      { icon: 'orders', title: 'Orders', body: 'Walk-in, phone, keyed-in aggregator and webhook orders share one 7-state flow. The server prices every line from the menu, staff set an ETA and kitchen notes, and late orders raise an alert.' },
      { icon: 'kitchen', title: 'Kitchen display', body: 'One ticket per order per station, moving through New, Accepted, Cooking, Quality check and Ready, with Hold and Issue. Cards turn amber at 70% of the prep target and red past it, and Rush moves a ticket up.' },
      { icon: 'menu', title: 'Menus for every brand', body: 'Brands, categories and items with variants, add-on groups, veg, non-veg, egg or vegan, per-item GST, packaging charge, prep time, day-and-hour availability and station routing.' },
      { icon: 'costing', title: 'Recipes & costing', body: 'A recipe per dish or variant, with yield, unit conversion, packaging and overhead, shows food cost and margin against the selling price. Every save is a new version you can roll back to.' },
      { icon: 'inventory', title: 'Inventory & purchasing', body: 'Stock per outlet with counts, transfers and wastage. Raise a purchase order from low-stock items in one click; goods receipts add stock and update cost, and each supplier shows what is still owed.' },
      { icon: 'delivery', title: 'Dispatch, invoices & reports', body: 'Pincode zones with fee and ETA, in-house riders assigned from a dispatch board with the cash each one collected reconciled, numbered GST tax invoices with credit notes, and seven report tabs including profit.' },
    ],
    spotlight: {
      label: 'What the plate earns',
      title: 'Food cost per dish, from the recipe, against the price you charge.',
      points: [
        'A recipe deducts real quantities when cooking starts, and a dish with auto out-of-stock turned on switches itself off when an ingredient runs out',
        'Food cost, packaging and overhead per plate, against the price you actually charge',
        'The profit report subtracts food, packaging, delivery, wastage and refunds — not just revenue',
        'An order is Ready only when every station’s ticket is ready',
      ],
      panel: {
        title: 'Kitchen display',
        status: 'All stations',
        rows: [
          { a: 'Tandoor · #2207', b: 'Paneer tikka ×2, Naan ×4', status: '6 min', tone: 'green', value: 'Swiggy' },
          { a: 'Curry · #2205', b: 'Dal makhani, Jeera rice', status: '11 min', tone: 'amber', value: 'Zomato' },
          { a: 'Wok · #2204', b: 'Hakka noodles ×3', status: 'Rush', tone: 'red', value: 'Website' },
          { a: 'Cold · #2203', b: 'Mango lassi ×2', status: 'Ready', tone: 'green', value: 'Phone' },
        ],
      },
    },
    facts: [
      { value: '7', label: 'Order states, one flow', sub: 'New to completed, the same on every channel' },
      { value: '6', label: 'Kitchen ticket stages', sub: 'New, accepted, cooking, quality check, ready, hold' },
      { value: '58', label: 'Permission switches across 16 modules', sub: 'Six roles, tightened per role or per person' },
      { value: '7', label: 'Report tabs', sub: 'Sales, orders, dishes, customers, stock, profit, tax' },
    ],
    audiences: ['Delivery-only kitchens', 'Multi-brand operators', 'Virtual brands', 'Aggregator-first kitchens', 'Restaurant delivery arms'],
    contactHref: '/cloudkitchen/contact',
  },

  invoice: {
    headline: 'GST billing from the first quote to the return you file.',
    intro:
      'Quotes, sales orders, delivery challans and tax invoices on one document model, purchases that feed input tax credit, payments applied against what is owed, a customer link with Pay now, and GSTR-1 and GSTR-3B downloaded from the same books — for traders, retail counters, service firms and exporters.',
    strip: ['CGST/SGST or IGST by place of supply', 'GSTR-1 & GSTR-3B', 'Quotes to invoices', 'Quick Bill counter', 'Integer-paise money'],
    modules: [
      { icon: 'docs', title: 'Sales documents', body: 'Quotes, sales orders, delivery challans, proforma invoices, invoices and credit notes share one editor. A quote converts to an invoice, sales order or proforma, and an invoice raises a credit note in one click.' },
      { icon: 'billing', title: 'Purchases & expenses', body: 'Vendors, purchase orders, bills, debit notes and expenses. A purchase order converts to a bill, and each expense is marked ITC eligible or not, which feeds Table 4 of GSTR-3B.' },
      { icon: 'gst', title: 'GST engine & returns', body: 'CGST + SGST or IGST by place of supply, exports under LUT or with IGST, SEZ, reverse charge, composition, cess, TDS and TCS — and GSTR-1, GSTR-3B and an HSN summary by month, quarter or year as GSTN-shaped JSON or CSV.' },
      { icon: 'money', title: 'Payments & customer link', body: 'Every document has a no-login customer link to view and print it, and an invoice, proforma or debit note with a balance due can be paid there by UPI QR or through your own PayU or Razorpay account. Payments apply oldest-first or by hand, advances wait for the next bill, and ageing shows what is overdue.' },
      { icon: 'counter', title: 'Quick Bill & desktop counter', body: 'A keyboard counter screen — Enter adds, F2 tendered, F4 completes — where every sale is a GST invoice, a receipt and a stock movement, printed on a till roll by the Windows app that also opens the cash drawer.' },
      { icon: 'stock', title: 'Inventory & reports', body: 'Stock moves when documents are issued and comes back when one is cancelled, with counts, valuation at purchase price, reorder alerts and ten built-in reports from ageing to profit and loss.' },
    ],
    spotlight: {
      label: 'One tax engine',
      title: 'An invoice cannot total differently on screen than in your books.',
      points: [
        'One engine totals the editor, Quick Bill and the server on save, and the returns read those saved totals',
        'The server recomputes every total from the lines, so a total sent by the browser is never stored',
        'GSTINs are checked for format and for the check digit that catches a mistyped number',
        'Every amount is stored as whole paise, so a discount spread across lines still adds up exactly',
      ],
      panel: {
        title: 'Invoices',
        status: 'GSTR-1 ready',
        rows: [
          { a: 'INV/26-27/0142', b: 'Mehta Distributors · Pune', status: 'Paid', tone: 'green', value: '₹48,260' },
          { a: 'INV/26-27/0141', b: 'Arora Retail · Delhi · IGST', status: 'Overdue 6d', tone: 'red', value: '₹12,980' },
          { a: 'SO/26-27/0088', b: 'Converted from a quote', status: 'Open', tone: 'blue', value: '₹31,400' },
          { a: 'CN/26-27/0009', b: 'Against INV/26-27/0127', status: 'Open', tone: 'blue', value: '−₹2,360' },
        ],
      },
    },
    facts: [
      { value: '9', label: 'Document types, one editor', sub: 'From the first quote to the vendor’s bill' },
      { value: '9', label: 'GSTR-1 tables built for you', sub: 'B2B, B2CL, B2CS, exports, notes, HSN and more' },
      { value: '8', label: 'GST treatments per party', sub: 'Regular, composition, SEZ, overseas and more' },
      { value: '5', label: 'Print layouts', sub: 'Classic, Modern, Compact, Elegant, 80 mm thermal' },
    ],
    audiences: ['Traders & distributors', 'Retail counters', 'Service firms & agencies', 'Exporters & SEZ suppliers', 'Composition dealers', 'Accountants'],
    contactHref: '/contact?product=invoice',
  },

  hr: {
    headline: 'People, attendance, leave and payroll on one system.',
    intro:
      'Employee records with their full history, attendance with geofenced punches, leave that accrues on its own, and India payroll with PF, ESI, PT, LWF and TDS — with web portals for employees, managers, HR and recruiters, and an app your people use to punch in, apply for leave and download payslips.',
    strip: ['Geofenced attendance', 'PF · ESI · PT · LWF · TDS', 'Form 16 & payroll files', 'One approvals inbox', 'Employee & manager app'],
    modules: [
      { icon: 'people', title: 'Core HR & organisation', body: 'Employee records with effective-dated movements from hire to rehire, legal entities, org units, locations, cost centres and positions, an org chart, custom fields, assets and bulk import with row-level checks.' },
      { icon: 'clock', title: 'Attendance, shifts & leave', body: 'Punches from the web or the app checked against geofences, with an optional selfie and an offline queue on the phone. Shifts, rosters, regularisation, overtime and period locks; leave policies with accruals, a ledger and holidays.' },
      { icon: 'payroll', title: 'Payroll, tax & statutory', body: 'Each run moves through inputs, calculation, review, approval and lock. PF, ESI, PT, LWF and TDS under the old or new regime, declarations and proofs, loans, full and final, payslips and Form 16 Part B.' },
      { icon: 'billing', title: 'Expenses & travel', body: 'Claims with receipt reading, policy checks, finance verification and reimbursement batches; cash advances; corporate card statements matched to claims; trip requests and a travel desk.' },
      { icon: 'hiring', title: 'Hiring & onboarding', body: 'Requisitions and jobs, a careers page for every company, a candidate pipeline with interviews and scorecards, offers, and a candidate portal for interview slots, offer acceptance and pre-boarding.' },
      { icon: 'performance', title: 'Performance, learning & helpdesk', body: 'Review cycles, goals and OKRs, calibration, PIPs and a 9-box talent view; courses and recognition; HR tickets with SLAs, a document vault with letter templates, and resignation and exit.' },
    ],
    spotlight: {
      label: 'Every request in one inbox',
      title: 'Leave, regularisations, claims and payroll runs wait in one place for the right person.',
      points: [
        'Requests from 19 modules arrive in one approvals inbox, with bulk decisions and delegation while someone is away',
        'Approved leave writes to the ledger and the balance — there is no spreadsheet to reconcile',
        'A locked payroll run produces the bank file, journal, pay register and PF, ESI, PT and LWF files',
        'The audit log, leave ledger, payroll approvals and locked payroll runs cannot be edited or deleted after the fact',
      ],
      panel: {
        title: 'Approvals',
        status: '4 waiting',
        rows: [
          { a: 'Ananya Rath', b: 'Casual leave · 2 days', status: 'Approve', tone: 'blue', value: 'Leave' },
          { a: 'Vikram Sahoo', b: 'Missed punch · 7 Oct', status: 'Review', tone: 'amber', value: 'Attendance' },
          { a: 'September payroll', b: '58 employees · in review', status: 'Approve', tone: 'blue', value: 'Payroll' },
          { a: 'Rohit Jena', b: 'Travel claim · 3 receipts', status: 'Verify', tone: 'blue', value: 'Expense' },
        ],
      },
    },
    facts: [
      { value: '54', label: 'Standard reports', sub: 'CSV, Excel or PDF — saved and scheduled' },
      { value: '35', label: 'Request types in one inbox', sub: 'From leave to payroll runs and offers' },
      { value: '15', label: 'Built-in roles, 55 permissions', sub: 'Scoped to an entity, unit, location or group' },
      { value: '7', label: 'Files from every locked payroll run', sub: 'Bank, journal, register, PF, ESI, PT, LWF' },
    ],
    audiences: ['HR & HR operations teams', 'Payroll & finance teams', 'People managers', 'Field & shop-floor staff', 'Recruiters & hiring managers', 'Multi-entity organisations'],
    contactHref: '/contact?product=hr',
  },
};

const MARK: Record<ProductKey, (p: { size?: number }) => React.ReactNode> = {
  restaurant: ({ size = 30 }) => <QrestaMark size={size} />,
  fitbizz: ({ size = 30 }) => <FitBizzMark size={size} />,
  cloudkitchen: ({ size = 30 }) => <CloudKitchenMark size={size} />,
  invoice: ({ size = 30 }) => <QrestaInvoiceMark size={size} />,
  hr: ({ size = 30 }) => <QrestaHrMark size={size} />,
};

const CAPABILITY_STRIP = ['Five products', 'GST-ready billing', 'India payroll', 'Android, Windows & web', 'Role-based access', 'Built in India'];

/**
 * What the products share. Where something is true of only some of them,
 * the line names which — every sentence here was checked against the code
 * of each product it covers.
 */
const PLATFORM_POINTS: Array<{ icon: IconKind; title: string; body: string }> = [
  {
    icon: 'gst',
    title: 'Indian compliance is built in',
    body: 'GST tax invoices with your own numbering in every product that bills, GSTR-1 and GSTR-3B from Qresta Invoice, and PF, ESI, PT, LWF and TDS from Qresta HR — in the shape your chartered accountant expects.',
  },
  {
    icon: 'roles',
    title: 'Roles decide who can do what',
    body: 'Permissions are enforced on the server in every product. In Restaurant Management, FitBizz and CloudKitchen the owner sets them per role and per account; Qresta Invoice has five fixed roles, from Owner to Viewer; and in Qresta HR each role is granted company-wide or for one legal entity, org unit, location or employee group.',
  },
  {
    icon: 'money',
    title: 'Customer payments go to your account',
    body: 'In Restaurant Management and FitBizz you connect one of nine payment gateways, and in Qresta Invoice your own PayU or Razorpay account, so what customers pay settles with you. Gateway keys are stored encrypted.',
  },
  {
    icon: 'multi',
    title: 'Built for more than one location',
    body: 'Outlets, branches, brands, places of business and legal entities are part of each product — from a restaurant chain’s Head Office view to roles in Qresta HR scoped to a single entity or location.',
  },
  {
    icon: 'offline',
    title: 'Built for the counter, not the boardroom',
    body: 'Keyboard-first billing screens, Android apps for captains, members and employees, and Windows apps that drive till printers and cash drawers — and the restaurant till keeps billing with no network.',
  },
  {
    icon: 'support',
    title: 'Set up with you, on your own data',
    body: 'The demo runs on your menu, your plans, your items or your org. Onboarding is done together, so the day you go live is not the day you start figuring it out.',
  },
];

/** Company-level facts — each one checkable, none a business metric. */
const COMPANY_FACTS = [
  { value: '5', label: 'Products, one company', sub: 'Restaurant, gym, cloud kitchen, billing, HR' },
  { value: '9', label: 'Payment gateways you can connect', sub: 'In Restaurant Management and FitBizz' },
  { value: '3', label: 'Kinds of app', sub: 'Web, Android and Windows desktop' },
  { value: 'India', label: 'Built for, and built in', sub: 'Odisha — GST, UPI and Indian payroll first' },
];

const WHICH_ROWS: Array<{ situation: string; product: string; key: ProductKey }> = [
  { situation: 'Guests sit down, order at the table or walk up to a counter', product: 'Restaurant Management', key: 'restaurant' },
  { situation: 'A café, a QSR counter or a food stall', product: 'Restaurant Management', key: 'restaurant' },
  { situation: 'Memberships, renewals and check-in at a front desk', product: 'FitBizz', key: 'fitbizz' },
  { situation: 'Personal training packages, sessions and trainers', product: 'FitBizz', key: 'fitbizz' },
  { situation: 'Every order comes from Swiggy, Zomato or your own app', product: 'CloudKitchen', key: 'cloudkitchen' },
  { situation: 'Several brands cooked out of one address, no dining room', product: 'CloudKitchen', key: 'cloudkitchen' },
  { situation: 'You raise quotes and GST invoices and file GSTR-1', product: 'Qresta Invoice', key: 'invoice' },
  { situation: 'A trading or retail counter that needs proper tax invoices', product: 'Qresta Invoice', key: 'invoice' },
  { situation: 'You run attendance, leave and payroll for a team', product: 'Qresta HR', key: 'hr' },
];

const FAQS = [
  {
    q: 'Which product do I need?',
    a: 'If guests sit down or walk up to a counter, Restaurant Management. If you sell memberships and sessions, FitBizz. If every order arrives from Swiggy, Zomato or your own app and nobody eats on site, CloudKitchen. If you need GST invoices, purchases and returns for any kind of business, Qresta Invoice. If you pay and manage a team, Qresta HR.',
  },
  {
    q: 'Can I use more than one?',
    a: 'Yes. A restaurant with a separate delivery kitchen can run Restaurant Management and CloudKitchen side by side, any business can raise its GST invoices and build its GSTR-1 and GSTR-3B in Qresta Invoice, and any business can run Qresta HR for its staff alongside the product it uses to serve customers.',
  },
  {
    q: 'Can I run more than one outlet, branch or brand?',
    a: 'Yes. Restaurant Management has a Head Office view across outlets, FitBizz runs several branches with a kiosk each, CloudKitchen cooks several brands from one kitchen, Qresta Invoice issues from several places of business, and Qresta HR handles several legal entities and locations.',
  },
  {
    q: 'How do payments reach me?',
    a: 'In Restaurant Management and FitBizz you connect one of nine gateways — Razorpay, PayU, Cashfree, PhonePe, Paytm and others — and in Qresta Invoice your own PayU or Razorpay account. What your customers pay then settles into your account. Until a restaurant connects its own, guest QR payments go through Qresta’s PayU account.',
  },
  {
    q: 'Does it work offline?',
    a: 'The Qresta POS Windows till keeps billing with no network and syncs when the connection returns, and the Qresta HR app queues punches made offline. The web apps need a connection.',
  },
  {
    q: 'Do you help move from what I use today?',
    a: 'Yes. We import your menu, plans, items, customers or employee list before the demo so you see the system running on your own data, and we do the switch-over with you rather than handing you a manual.',
  },
  {
    q: 'Is there an app?',
    a: 'Every product works in the browser. Restaurant Management adds an Android app for captains and the kitchen and a Windows till; FitBizz has an Android app for members and a Windows desk app; CloudKitchen has an Android app for owners; Qresta Invoice has a Windows counter app; and Qresta HR has an app for employees and managers.',
  },
];

/* ===================================================================== */

export default function HomePage() {
  const { openDemoModal } = useLeadModals();

  return (
    // overflow-x-clip, not -hidden: hidden would make this div a scroll
    // container and the sticky product bar would stop sticking.
    <div className="overflow-x-clip">
      <Hero onDemo={openDemoModal} />
      <CapabilityStrip />
      <ProductIndex />
      <SectionNav />
      {PRODUCTS.map((p, i) => (
        <ProductSection key={p.key} productKey={p.key} index={i} onDemo={() => openDemoModal(p.key as LeadProduct)} />
      ))}
      <WhichOne />
      <Platform />
      <CompanyFacts />
      <Faq />
      <ClosingCta onDemo={openDemoModal} />
    </div>
  );
}

/**
 * Same-page jumps. A plain fragment click creates a history entry with no
 * router state, and the Next App Router ignores popstate for such entries —
 * so Back from a page reached via the FitBizz section would not come home.
 * Routing the jump through history.pushState (which Next patches to carry
 * its own state) keeps Back working; the href stays for no-JS, new-tab and
 * modifier clicks, and scroll-margin plus the smooth scroll still apply.
 */
function jump(e: MouseEvent<HTMLAnchorElement>, id: string) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);
  el.scrollIntoView();
}

/* ------------------------------- hero -------------------------------- */

function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" style={{ height: 820 }} />
      <div className="absolute pointer-events-none glow" style={{ width: 900, height: 520, top: -170, left: '50%', transform: 'translateX(-50%)' }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-14 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold"
          style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)', color: 'var(--ink)' }}
        >
          <QrestaMark size={16} />
          Five products · One company · Built in India
        </div>

        <h1
          className="font-display font-bold mx-auto mt-7 mb-6"
          style={{ fontSize: 'clamp(2.35rem, 6.2vw, 4.4rem)', lineHeight: 1.04, letterSpacing: '-0.03em', maxWidth: 1040 }}
        >
          The software Indian restaurants, gyms, kitchens and growing businesses run on.
        </h1>

        <p className="mx-auto text-base sm:text-lg" style={{ color: 'var(--ink-soft)', maxWidth: 740, lineHeight: 1.6 }}>
          A restaurant floor, a gym, a delivery-only kitchen, a billing counter and an HR desk do
          not work the same way, so we do not sell them the same product. Each gets software
          built for its own day — and all five are on this page.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
          <button
            onClick={onDemo}
            className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--blue-600)', boxShadow: '0 12px 32px -12px rgba(30,94,255,0.9)' }}
          >
            Book a demo
          </button>
          <a
            href="#products"
            onClick={(e) => jump(e, 'products')}
            className="rounded-xl px-6 py-3.5 text-sm font-bold inline-flex items-center gap-2 transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
          >
            Explore the five products
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M1 2l4 5 4-5z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <section className="py-6" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {CAPABILITY_STRIP.map((item) => (
          <span key={item} className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--ink-faint)' }}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-5 h-px" style={{ background: 'var(--blue-500)' }} />
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--blue-500)' }}>
        {children}
      </span>
    </div>
  );
}

/* --------------------------- product index --------------------------- */

function ProductIndex() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-5 sm:px-6 pt-20 sm:pt-24 pb-12 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <SectionLabel>What we build</SectionLabel>
        </div>
        <h2 className="font-display font-bold mx-auto mb-4" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', maxWidth: 780 }}>
          Five products, each built for one kind of work.
        </h2>
        <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 640 }}>
          Pick the one that matches how your business actually runs — every one is described in
          full further down this page. If two of them fit, they work side by side.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {PRODUCTS.map((p) => {
          const Mark = MARK[p.key];
          return (
            <a key={p.key} href={`#${p.key}`} onClick={(e) => jump(e, p.key)} className="group rounded-2xl p-5 card-lit flex flex-col transition-colors hover:bg-white/[0.03]">
              <Mark size={34} />
              <div className="font-display text-base font-semibold leading-tight mt-4">{p.label}</div>
              <div className="text-[10.5px] font-mono uppercase tracking-[0.14em] mt-1" style={{ color: 'var(--ink-faint)' }}>
                {p.name}
              </div>
              <p className="text-[13px] leading-relaxed mt-3 flex-1" style={{ color: 'var(--ink-soft)' }}>
                {p.for}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-bold mt-4" style={{ color: 'var(--blue-500)' }}>
                See {p.short}
                <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/** Sticky in-page product bar: one pill per section, the visible one lit. */
function SectionNav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    // Every section in page order, including #which, which has no pill:
    // while it is being read, nothing is lit rather than the wrong product.
    const ids = [...PRODUCTS.map((p) => p.key), 'which', 'platform', 'faq'];
    // The section whose top has passed just under the header and this bar
    // is the one being read. A position check on scroll rather than an
    // IntersectionObserver band: sections are taller than the screen, and
    // a jump from the bar must light the right pill immediately.
    const onScroll = () => {
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const items = [...PRODUCTS.map((p) => ({ id: p.key, label: p.short })), { id: 'platform', label: 'Why Qresta' }, { id: 'faq', label: 'FAQ' }];

  return (
    <nav
      aria-label="Products on this page"
      className="sticky top-16 z-40"
      style={{ background: 'rgba(6,10,23,0.86)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 scroll-x">
        <div className="flex items-center gap-1.5 py-2.5 min-w-max">
          {items.map((it) => {
            const on = active === it.id;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => jump(e, it.id)}
                aria-current={on ? 'true' : undefined}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors whitespace-nowrap"
                style={on ? { background: 'var(--blue-600)', color: '#fff' } : { color: 'var(--ink-soft)', border: '1px solid var(--line)' }}
              >
                {it.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

/* -------------------------- product section -------------------------- */

const TONE: Record<Tone, string> = { green: 'var(--green)', amber: 'var(--amber)', blue: 'var(--blue-500)', red: 'var(--red-600)' };

function ProductSection({ productKey, index, onDemo }: { productKey: ProductKey; index: number; onDemo: () => void }) {
  const p = PRODUCTS.find((x) => x.key === productKey)!;
  const d = DETAILS[productKey];
  const Mark = MARK[productKey];

  return (
    <section
      id={p.key}
      aria-labelledby={`${p.key}-title`}
      className="scroll-mt-32"
      style={{ borderTop: '1px solid var(--line)', background: index % 2 === 1 ? 'var(--paper-alt)' : undefined }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24">
        {/* header + spotlight panel */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionLabel>
              {String(index + 1).padStart(2, '0')} · {p.label}
            </SectionLabel>
            <div className="flex items-center gap-3 mb-5">
              <Mark size={40} />
              <div>
                <div className="font-display text-xl font-bold leading-tight">{p.brandName}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                  {p.for}
                </div>
              </div>
            </div>
            <h2 id={`${p.key}-title`} className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.85rem, 3.9vw, 2.75rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              {d.headline}
            </h2>
            <p className="text-base sm:text-[17px] mb-7" style={{ color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 640 }}>
              {d.intro}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {d.strip.map((s) => (
                <span key={s} className="rounded-full px-3 py-1 text-[12px] font-semibold" style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)', color: 'var(--ink)' }}>
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onDemo}
                className="rounded-xl px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'var(--blue-600)', boxShadow: '0 12px 32px -14px rgba(30,94,255,0.9)' }}
              >
                {/* "an Invoice demo", "an HR demo", "a FitBizz demo" */}
                Book {/^[aeiou]/i.test(p.short) || p.short === 'HR' ? 'an' : 'a'} {p.short} demo
              </button>
              <Link
                href={d.contactHref}
                className="rounded-xl px-5 py-3 text-sm font-bold inline-flex items-center gap-2 transition-colors hover:bg-white/5"
                style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
              >
                Talk to us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Panel panel={d.spotlight.panel} />
          </div>
        </div>

        {/* modules */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {d.modules.map((m) => (
            <div key={m.title} className="rounded-2xl p-6 card-lit">
              <Icon kind={m.icon} />
              <h3 className="font-display text-lg font-semibold mt-4 mb-2">{m.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {m.body}
              </p>
            </div>
          ))}
        </div>

        {/* spotlight + facts */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mt-14 items-start">
          <div className="lg:col-span-6">
            <SectionLabel>{d.spotlight.label}</SectionLabel>
            <h3 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', letterSpacing: '-0.02em', lineHeight: 1.18 }}>
              {d.spotlight.title}
            </h3>
            <div className="grid gap-3">
              {d.spotlight.points.map((pt) => (
                <div key={pt} className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              {d.facts.map((f) => (
                <div key={f.label} className="rounded-2xl p-5 card-lit">
                  <div className="font-display text-3xl font-bold" style={{ color: 'var(--blue-500)', letterSpacing: '-0.03em' }}>
                    {f.value}
                  </div>
                  <div className="text-sm font-semibold mt-1.5">{f.label}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>
                    {f.sub}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] mb-2.5" style={{ color: 'var(--ink-faint)' }}>
                Built for
              </div>
              <div className="flex flex-wrap gap-2">
                {d.audiences.map((a) => (
                  <span key={a} className="rounded-lg px-2.5 py-1 text-[12.5px]" style={{ background: 'var(--card)', border: '1px solid var(--line)', color: 'var(--ink-soft)' }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** A small, fictional app screen — names and figures are demo data, drawn in markup so it never goes stale. */
function Panel({ panel }: { panel: ProductDetail['spotlight']['panel'] }) {
  return (
    <div className="rounded-2xl overflow-hidden card-lit" style={{ boxShadow: '0 40px 90px -40px rgba(0,0,0,0.9)' }} aria-hidden="true">
      <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--line)' }}>
        <span className="flex items-center gap-2">
          <span className="flex gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: '#FF5F57' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#FEBC2E' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#28C840' }} />
          </span>
          <span className="text-xs font-bold ml-1">{panel.title}</span>
        </span>
        <span className="text-[10px] font-mono" style={{ color: 'var(--green)' }}>
          ● {panel.status}
        </span>
      </div>
      <div className="p-3 grid gap-2">
        {panel.rows.map((r) => (
          <div key={r.a + r.b} className="rounded-xl p-3 flex items-center gap-3" style={{ background: 'var(--paper-alt)', border: '1px solid var(--line)' }}>
            <span className="w-1.5 self-stretch rounded-full flex-shrink-0" style={{ background: TONE[r.tone] }} />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold truncate">{r.a}</div>
              <div className="text-[10.5px] truncate" style={{ color: 'var(--ink-faint)' }}>
                {r.b}
              </div>
            </div>
            <span className="text-[10.5px] font-semibold whitespace-nowrap" style={{ color: TONE[r.tone] }}>
              {r.status}
            </span>
            <span className="text-xs font-bold w-[72px] text-right whitespace-nowrap">{r.value}</span>
          </div>
        ))}
        {panel.chips && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {panel.chips.map((c) => (
              <span key={c} className="rounded-md px-2 py-1 text-[10px] font-semibold" style={{ background: 'var(--card)', border: '1px solid var(--line-strong)', color: 'var(--ink-soft)' }}>
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-0.5 w-4 h-4 rounded grid place-items-center flex-shrink-0" style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}>
      <svg width="9" height="7" viewBox="0 0 9 7" aria-hidden="true">
        <path d="M1 3.6L3.2 5.8 8 1" fill="none" stroke="var(--blue-500)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* --------------------------- which one? ------------------------------ */

function WhichOne() {
  return (
    <section id="which" className="scroll-mt-32" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionLabel>Not sure which one</SectionLabel>
            <h2 className="font-display font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Find your business in this list.
            </h2>
            <p className="text-sm sm:text-base mb-6" style={{ color: 'var(--ink-soft)' }}>
              You do not need to know our product names to get started. Tell us how your customers
              reach you and who you pay at the end of the month, and the right one is obvious in a
              minute.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors hover:bg-white/5"
              style={{ border: '1px solid var(--line-strong)', background: 'var(--card)' }}
            >
              Ask us which one fits
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden card-lit">
            {WHICH_ROWS.map((r, i) => (
              <a
                key={r.situation}
                href={`#${r.key}`}
                onClick={(e) => jump(e, r.key)}
                className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-white/[0.03]"
                style={{ borderTop: i === 0 ? undefined : '1px solid var(--line)' }}
              >
                <span className="text-sm flex-1 min-w-0" style={{ color: 'var(--ink-soft)' }}>
                  {r.situation}
                </span>
                <span className="text-[12px] font-bold whitespace-nowrap" style={{ color: 'var(--blue-500)' }}>
                  {r.product}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- platform ------------------------------- */

function Platform() {
  return (
    <section id="platform" className="scroll-mt-32" style={{ borderTop: '1px solid var(--line)', background: 'var(--paper-alt)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <SectionLabel>What all five share</SectionLabel>
          </div>
          <h2 className="font-display font-bold mx-auto mb-4" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)', letterSpacing: '-0.02em', maxWidth: 720 }}>
            Different work. The same things that must never break.
          </h2>
          <p className="mx-auto text-base" style={{ color: 'var(--ink-soft)', maxWidth: 640 }}>
            Whichever product you run, this is how it is built — and why a business that grows into
            a second kind of operation does not start over with a new vendor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLATFORM_POINTS.map((pt) => (
            <div key={pt.title} className="rounded-2xl p-6 card-lit">
              <Icon kind={pt.icon} />
              <h3 className="font-display text-lg font-semibold mt-4 mb-2">{pt.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {pt.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyFacts() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPANY_FACTS.map((f) => (
          <div key={f.label} className="rounded-2xl p-6 card-lit">
            <div className="font-display text-4xl font-bold" style={{ color: 'var(--blue-500)', letterSpacing: '-0.03em' }}>
              {f.value}
            </div>
            <div className="text-sm font-semibold mt-2">{f.label}</div>
            <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>
              {f.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- faq -------------------------------- */

function Faq() {
  return (
    <section id="faq" className="scroll-mt-32" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              The things people ask before the demo.
            </h2>
            <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
              Anything else, ask us directly — {SITE_NAME} is a small team and you will reach a
              person who knows the answer.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-3">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl px-5 py-4 card-lit group">
                <summary className="text-sm font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-lg leading-none transition-transform group-open:rotate-45" style={{ color: 'var(--blue-500)' }} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- close ------------------------------- */

function ClosingCta({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-20 sm:pb-24">
      <div
        className="relative rounded-3xl px-6 py-14 sm:py-20 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--blue-700) 0%, var(--blue-600) 55%, var(--blue-500) 100%)' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="relative">
          <div className="flex justify-center gap-2 mb-6">
            {PRODUCTS.map((p) => {
              const Mark = MARK[p.key];
              return <Mark key={p.key} size={36} />;
            })}
          </div>
          <h2 className="font-display font-bold mb-4 text-white" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.9rem)', letterSpacing: '-0.02em' }}>
            See it running on your own business.
          </h2>
          <p className="mx-auto mb-9 text-base" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 600 }}>
            Book a 20-minute demo. Tell us what you run and we will set it up on your own menu,
            plans, items or team before the call ends.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={onDemo} className="rounded-xl px-6 py-3.5 text-sm font-bold" style={{ background: '#fff', color: 'var(--blue-700)' }}>
              Book a demo
            </button>
            <Link href="/contact" className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.55)' }}>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- icons ------------------------------- */

const ICON_PATHS: Record<IconKind, React.ReactNode> = {
  pos: (<><rect x="3" y="4" width="14" height="12" rx="2" /><path d="M3 8h14M7 12h3" /></>),
  kot: (<><path d="M5 2.5h10v15l-2-1.3-1.5 1.3L10 16.2 8.5 17.5 7 16.2l-2 1.3z" /><path d="M7.5 6.5h5M7.5 9.5h5M7.5 12.5h3" /></>),
  qr: (<><rect x="3" y="3" width="5" height="5" rx="1" /><rect x="12" y="3" width="5" height="5" rx="1" /><rect x="3" y="12" width="5" height="5" rx="1" /><path d="M12 12h2v2M17 12v5h-5" /></>),
  online: (<><circle cx="10" cy="10" r="7" /><path d="M3 10h14M10 3c2 2.2 2.8 4.5 2.8 7S12 14.8 10 17M10 3C8 5.2 7.2 7.5 7.2 10S8 14.8 10 17" /></>),
  inventory: (<><path d="M3 6.5L10 3l7 3.5v7L10 17l-7-3.5z" /><path d="M3 6.5L10 10l7-3.5M10 10v7" /></>),
  reports: (<><path d="M3 17h14" /><rect x="4.5" y="9" width="2.5" height="6" rx="0.6" /><rect x="8.75" y="5" width="2.5" height="10" rx="0.6" /><rect x="13" y="11" width="2.5" height="4" rx="0.6" /></>),
  members: (<><circle cx="8" cy="7" r="3" /><path d="M2.5 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><circle cx="15" cy="8" r="2.2" /><path d="M14 12.3c2.3.2 3.8 1.7 3.8 4" /></>),
  attendance: (<><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="11" y="3" width="6" height="6" rx="1" /><rect x="3" y="11" width="6" height="6" rx="1" /><path d="M11.5 14.5l2 2 3.5-4" /></>),
  trainers: (<><path d="M4 8v4M16 8v4M6 7v6M14 7v6M6 10h8" /><path d="M2.5 9v2M17.5 9v2" /></>),
  fitness: (<><path d="M3 15l4-6 3 4 3-7 4 9" /><path d="M3 17h14" /></>),
  billing: (<><rect x="4" y="2.5" width="12" height="15" rx="1.5" /><path d="M7 6.5h6M7 9.5h6M7 12.5h3" /></>),
  growth: (<><path d="M3 16h14" /><path d="M4 12l4-4 3 3 5-6" /><path d="M13 5h3v3" /></>),
  orders: (<><path d="M4 4h12v12H4z" /><path d="M4 8h12M8 4v12" /></>),
  kitchen: (<><path d="M4 9h12v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16z" /><path d="M3 9h14M7 3.5c0 1.5 1 1.5 1 3M10 3.5c0 1.5 1 1.5 1 3M13 3.5c0 1.5 1 1.5 1 3" /></>),
  menu: (<><path d="M5 3h10v14H5z" /><path d="M7.5 6.5h5M7.5 9.5h5M7.5 12.5h5" /></>),
  costing: (<><circle cx="10" cy="10" r="7" /><path d="M12.3 7.2c-.5-.8-1.3-1.2-2.3-1.2-1.3 0-2.3.7-2.3 1.8 0 2.6 4.8 1.4 4.8 4.1 0 1.1-1 1.9-2.5 1.9-1.1 0-2-.5-2.5-1.3M10 4.8v1.2M10 14v1.2" /></>),
  delivery: (<><path d="M2.5 6h9v7h-9z" /><path d="M11.5 8.5h3l2.5 2.5v2h-5.5" /><circle cx="6" cy="14.5" r="1.6" /><circle cx="14" cy="14.5" r="1.6" /></>),
  docs: (<><path d="M6 2.5h6l3.5 3.5v11.5h-9.5z" /><path d="M12 2.5V6h3.5" /><path d="M3.5 5v12.5h9" /></>),
  gst: (<><path d="M10 2.5l6 2.5v4.5c0 4-2.6 6.8-6 8-3.4-1.2-6-4-6-8V5z" /><path d="M7.3 10.2l1.9 1.9 3.6-3.8" /></>),
  money: (<><rect x="2" y="4.5" width="16" height="11" rx="1.8" /><path d="M2 8.5h16" /><path d="M5 12.5h3" /></>),
  counter: (<><rect x="2.5" y="5" width="15" height="9" rx="1.5" /><path d="M5 8h1M8 8h1M11 8h1M14 8h1M5 11h10" /><path d="M7 17h6" /></>),
  stock: (<><path d="M3 17V8l7-4.5L17 8v9" /><path d="M6.5 17v-5h7v5" /><path d="M6.5 14.5h7" /></>),
  repeat: (<><path d="M4 8a6 6 0 0 1 10.4-3.2L16 6.5" /><path d="M16 3v3.5h-3.5" /><path d="M16 12a6 6 0 0 1-10.4 3.2L4 13.5" /><path d="M4 17v-3.5h3.5" /></>),
  people: (<><circle cx="7" cy="7" r="2.6" /><path d="M2.5 16c0-2.7 2-4.6 4.5-4.6S11.5 13.3 11.5 16" /><circle cx="14.5" cy="8" r="2" /><path d="M13.4 12.2c2.2.2 3.6 1.7 3.6 3.8" /></>),
  clock: (<><circle cx="10" cy="10" r="7" /><path d="M10 6v4.3l2.8 1.7" /></>),
  leave: (<><rect x="3" y="4" width="14" height="13" rx="1.5" /><path d="M3 8h14M7 2.5v3M13 2.5v3" /><path d="M7.5 12.5l1.8 1.8 3.4-3.6" /></>),
  payroll: (<><rect x="3" y="3" width="14" height="14" rx="2" /><path d="M12.5 7.5H8.8a1.6 1.6 0 0 0 0 3.2h2.4a1.6 1.6 0 0 1 0 3.2H7.5M10 6v1.5M10 13.9v1.6" /></>),
  hiring: (<><circle cx="8.5" cy="8.5" r="5" /><path d="M12.2 12.2L17 17" /><path d="M6.5 8.5l1.5 1.5 2.5-3" /></>),
  performance: (<><path d="M10 3l2.1 4.3 4.7.7-3.4 3.3.8 4.7L10 13.8 5.8 16l.8-4.7L3.2 8l4.7-.7z" /></>),
  helpdesk: (<><path d="M4 11V9a6 6 0 0 1 12 0v2" /><rect x="2.5" y="10.5" width="3.5" height="5" rx="1" /><rect x="14" y="10.5" width="3.5" height="5" rx="1" /><path d="M16 15.5c0 1.4-1.6 2-4 2" /></>),
  offline: (<><rect x="3" y="4" width="14" height="10" rx="1.5" /><path d="M7 17h6M10 14v3" /><path d="M7.5 9h5" /></>),
  roles: (<><circle cx="7" cy="7" r="2.6" /><path d="M2.5 16c0-2.7 2-4.6 4.5-4.6S11.5 13.3 11.5 16" /><path d="M13 7.5h4M13 10.5h4M13 13.5h2.5" /></>),
  multi: (<><path d="M3 17V8l4-3 4 3v9" /><path d="M11 17V10l3-2 3 2v7" /><path d="M2 17h16" /><path d="M6 12.5h2M14 13h1" /></>),
  support: (<><circle cx="10" cy="10" r="7.2" /><path d="M7.8 8a2.3 2.3 0 1 1 3.1 2.2c-.6.3-.9.8-.9 1.4v.3" /><circle cx="10" cy="14.4" r="0.9" /></>),
  shield: (<><path d="M10 2.5l6 2.5v4.5c0 4-2.6 6.8-6 8-3.4-1.2-6-4-6-8V5z" /></>),
};

function Icon({ kind }: { kind: IconKind }) {
  return (
    <span className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: 'var(--blue-50)', border: '1px solid var(--line-strong)' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--blue-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICON_PATHS[kind]}
      </svg>
    </span>
  );
}
