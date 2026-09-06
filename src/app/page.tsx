import HomeContent from './home-content';

// The page itself is a client component (modals, dropdowns), and a
// client component cannot export `metadata` — hence this thin server
// wrapper, the same pattern used for /about, /careers, /contact and
// /demo. The home page adds no metadata of its own: the root layout's
// default title, description and canonical ("/") are already the ones
// this page wants.
export default function Page() {
  return <HomeContent />;
}
