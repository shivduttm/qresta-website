import Link from 'next/link';
import { PRODUCTS } from '@/lib/site';

/**
 * The five products, rendered the same way in every footer on the
 * domain. Each links to its section on the single home page, so whichever
 * page a visitor is on, every product is one click away.
 *
 * `current` dims the product whose own site you are already reading.
 */
export function ProductLinks({ current, title = 'Products' }: { current?: string; title?: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: 'var(--ink-faint)' }}>
        {title}
      </div>
      <div className="grid gap-2.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
        {PRODUCTS.map((p) => (
          <Link
            key={p.key}
            href={p.href}
            className="transition-colors hover:text-white"
            style={p.key === current ? { color: 'var(--ink)', fontWeight: 600 } : undefined}
          >
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
