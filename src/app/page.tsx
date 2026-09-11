import HomeContent from './home-content';
import { PRODUCTS, SITE_NAME, SITE_URL } from '@/lib/site';

// The page itself is a client component (modals, dropdowns), and a
// client component cannot export `metadata` — hence this thin server
// wrapper, the same pattern used across the site. The home page adds no
// metadata of its own: the root layout's default title, description and
// canonical ("/") are already the ones this page wants.
export default function Page() {
  // An ItemList of the three products, so a search engine reading the
  // company page can see what Qresta sells and follow each one to its
  // own SoftwareApplication node. The Organization and WebSite nodes
  // come from the root layout's StructuredData.
  const productList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#products`,
    name: `${SITE_NAME} products`,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.brandName,
      description: p.blurb,
      url: `${SITE_URL}${p.path}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productList) }} />
      <HomeContent />
    </>
  );
}
