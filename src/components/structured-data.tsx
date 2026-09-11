import {
  CONTACT,
  PRODUCTS,
  FOUNDER,
  FOUNDER_PROFILES,
  ORG_PROFILES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site';

/**
 * Site-wide schema.org graph, rendered once in the root layout so it is
 * present on every page.
 *
 * One @graph with cross-referenced @ids beats several loose blocks:
 * Google reads the Organization, the WebSite that publishes it and the
 * Person who founded and runs it as one connected set, which is what a
 * company/founder knowledge panel is built from. /founder adds a
 * ProfilePage node that points back at the same Person @id.
 */
export function StructuredData() {
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/qresta-logo.png`,
        contentUrl: `${SITE_URL}/qresta-logo.png`,
        caption: SITE_NAME,
      },
      image: { '@id': `${SITE_URL}/#logo` },
      email: CONTACT.email,
      telephone: CONTACT.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        addressRegion: CONTACT.region,
        addressCountry: CONTACT.country,
      },
      areaServed: { '@type': 'Country', name: 'India' },
      // The two properties this whole file exists for: who founded the
      // company and who runs it. Both point at the single Person node
      // below rather than repeating the name inline.
      founder: { '@id': FOUNDER.id },
      employee: { '@id': FOUNDER.id },
      // Every product line, so 'FitBizz by Qresta' or 'CloudKitchen by
      // Qresta' resolves to this company rather than to an unrelated
      // brand of the same name.
      brand: PRODUCTS.map((p) => ({ '@id': `${SITE_URL}${p.path}#brand` })),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: CONTACT.email,
          telephone: CONTACT.phoneDisplay,
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: CONTACT.email,
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
      ],
      ...(ORG_PROFILES.length ? { sameAs: ORG_PROFILES } : {}),
    },
    {
      '@type': 'Person',
      '@id': FOUNDER.id,
      name: FOUNDER.name,
      givenName: FOUNDER.name.split(' ')[0],
      familyName: FOUNDER.name.split(' ').slice(1).join(' '),
      jobTitle: FOUNDER.jobTitle,
      description: FOUNDER.description,
      url: FOUNDER.url,
      worksFor: { '@id': `${SITE_URL}/#organization` },
      nationality: { '@type': 'Country', name: 'India' },
      ...(FOUNDER_PROFILES.length ? { sameAs: FOUNDER_PROFILES } : {}),
    },
    ...PRODUCTS.map((p) => ({
      '@type': 'Brand',
      '@id': `${SITE_URL}${p.path}#brand`,
      name: p.name,
      alternateName: p.brandName,
      description: p.blurb,
      url: `${SITE_URL}${p.path}`,
      logo: `${SITE_URL}${p.path}/opengraph-image`,
    })),
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: PRODUCTS.map((p) => p.brandName),
      description: SITE_DESCRIPTION,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON-LD is data, not markup, and this string is built entirely
      // from constants in src/lib/site.ts — no user input reaches it.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
