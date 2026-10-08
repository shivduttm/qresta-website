// The Qresta brand mark, drawn inline rather than loaded from /public.
//
// qresta.in serves this marketing site at the root but proxies /login,
// /dashboard, /menu and friends through to the app, so an <img src="/...">
// would work here — yet inlining still wins: the mark appears in the
// header of every page and in the hero, and an inline SVG costs no
// request and can take its colours from the surrounding theme.
//
// Geometry matches qresta-web/src/components/brand.tsx exactly (the mark
// on the login page) and public/qresta-glyph.svg, which the favicon and
// the app icons are rendered from. Change it in one place and the others
// have to follow, or the tab icon stops matching the header.

const CELLS: Array<[number, number]> = [
  [269, 69],
  [369, 69],
  [469, 69],
  [169, 169],
  [569, 169],
  [69, 269],
  [669, 269],
  [69, 369],
  [669, 369],
  [69, 469],
  [669, 469],
  [169, 569],
  [569, 569],
  [269, 669],
  [369, 669],
  [469, 669],
  [669, 669],
];

/** The pixel Q itself: 17 cells plus the two tapering tail squares. */
function QPath({ fill, scale = 0.62, offset = 195 }: { fill: string; scale?: number; offset?: number }) {
  return (
    <g transform={`translate(${offset} ${offset}) scale(${scale})`} fill={fill}>
      {CELLS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={86} height={86} rx={18} />
      ))}
      <rect x={769} y={769} width={70} height={70} rx={15} />
      <rect x={855} y={855} width={56} height={56} rx={12} />
    </g>
  );
}

/** White pixel Q on a Qresta-blue rounded tile — the app-icon lockup. */
export function QrestaMark({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="1024" height="1024" rx="220" fill="#1E5EFF" />
      <QPath fill="#FFFFFF" />
    </svg>
  );
}

/** The bare pixel Q, no tile — for footers and watermarks. */
export function QrestaGlyph({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">
      <QPath fill={color} scale={1} offset={0} />
    </svg>
  );
}

/** Mark + "Qresta" wordmark, optionally with the small product tag. */
export function QrestaLockup({
  size = 36,
  tag,
  fontSize = 21,
}: {
  size?: number;
  tag?: string;
  fontSize?: number;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <QrestaMark size={size} />
      <span className="inline-flex flex-col leading-none">
        <span className="font-display font-bold tracking-tight" style={{ fontSize, color: 'var(--ink)' }}>
          Qresta
        </span>
        {tag && (
          <span
            className="font-mono font-semibold uppercase mt-1"
            style={{ fontSize: fontSize * 0.34, letterSpacing: '0.14em', color: 'var(--ink-faint)' }}
          >
            {tag}
          </span>
        )}
      </span>
    </span>
  );
}

/**
 * The FitBizz mark — same geometry as fitbizz-web/src/components/brand.tsx
 * (a blue tile with a dumbbell between two arcs), inlined here so the
 * marketing site never depends on an asset served by the other app.
 */
export function FitBizzMark({ size = 40, title = 'FitBizz', tile = true }: { size?: number; title?: string; tile?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label={title} style={{ flexShrink: 0 }}>
      {tile && <rect width="48" height="48" rx="12" fill="#1E5EFF" />}
      <path d="M13 24c0-6.1 4.9-11 11-11 3.6 0 6.8 1.7 8.8 4.4" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M35 24c0 6.1-4.9 11-11 11-3.6 0-6.8-1.7-8.8-4.4" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" opacity="0.7" />
      <rect x="15" y="21" width="18" height="6" rx="2" fill="#fff" />
      <rect x="11" y="19" width="4" height="10" rx="1.5" fill="#fff" />
      <rect x="33" y="19" width="4" height="10" rx="1.5" fill="#fff" />
    </svg>
  );
}

/** "FitBizz" set the way the product sets it: Fit in white, Bizz in light blue. */
export function FitBizzWordmark({ size = 20 }: { size?: number }) {
  return (
    <span className="font-display font-extrabold leading-none" style={{ fontSize: size, letterSpacing: '-0.5px' }}>
      Fit<span style={{ color: '#8FB0FF' }}>Bizz</span>
    </span>
  );
}

/**
 * The CloudKitchen mark — a blue tile holding a cloche with a cloud lid,
 * inlined here so the marketing site never depends on an asset served by
 * the other app.
 */
export function CloudKitchenMark({ size = 40, title = 'CloudKitchen', tile = true }: { size?: number; title?: string; tile?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label={title} style={{ flexShrink: 0 }}>
      {tile && <rect width="48" height="48" rx="12" fill="#1E5EFF" />}
      <path d="M17.5 20.5a5 5 0 0 1 9.2-2.2 4 4 0 0 1 5.6 3.1 3.4 3.4 0 0 1-.7 6.6H18a4 4 0 0 1-.5-7.5Z" fill="#fff" opacity="0.92" />
      <path d="M11 33.5c0-5.9 5.8-10.5 13-10.5s13 4.6 13 10.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" opacity="0.75" />
      <rect x="9" y="33" width="30" height="3.6" rx="1.8" fill="#fff" />
    </svg>
  );
}

/** "CloudKitchen" set the way the product sets it: Cloud in white, Kitchen in light blue. */
export function CloudKitchenWordmark({ size = 20 }: { size?: number }) {
  return (
    <span className="font-display font-extrabold leading-none" style={{ fontSize: size, letterSpacing: '-0.5px' }}>
      Cloud<span style={{ color: '#8FB0FF' }}>Kitchen</span>
    </span>
  );
}


/**
 * The Qresta HR mark — geometry copied from qresta-hr/brand/icon.svg (a
 * 1024 canvas, rx 220 blue tile, two people from a 48-unit box scaled by
 * 17.07 about its centre), so it matches the app's sidebar and icon.
 */
export function QrestaHrMark({ size = 40, title = 'Qresta HR', tile = true }: { size?: number; title?: string; tile?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" role="img" aria-label={title} style={{ flexShrink: 0 }}>
      {tile && <rect width="1024" height="1024" rx="220" fill="#1E5EFF" />}
      <g transform="translate(512 512) scale(17.07) translate(-25 -24.5)">
        <g fill="#fff" opacity="0.62">
          <circle cx="32" cy="16" r="4.8" />
          <path d="M22.5 33.6a9.8 9.8 0 0 1 19.6 0v1.2a1.5 1.5 0 0 1-1.5 1.5H24a1.5 1.5 0 0 1-1.5-1.5z" />
        </g>
        <g fill="#fff" stroke="#1E5EFF" strokeWidth="2.2" paintOrder="stroke">
          <circle cx="19.5" cy="17" r="5.8" />
          <path d="M8 36.4a11.5 11.5 0 0 1 23 0v1.1a1.7 1.7 0 0 1-1.7 1.7H9.7A1.7 1.7 0 0 1 8 37.5z" />
        </g>
      </g>
    </svg>
  );
}

/**
 * The Qresta Invoice mark. The Invoice app's own icon is the plain Qresta
 * mark (qresta-invoice/src/app/icon.svg), so this is the Qresta tile with a
 * small invoice sheet badge in the corner — distinct on a page that shows
 * five products side by side, still unmistakably the same family.
 */
export function QrestaInvoiceMark({ size = 40, title = 'Qresta Invoice' }: { size?: number; title?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label={title} style={{ flexShrink: 0 }}>
      <rect width="48" height="48" rx="12" fill="#1E5EFF" />
      <path d="M15 10h13l6 6v20.5a1.5 1.5 0 0 1-1.5 1.5h-17a1.5 1.5 0 0 1-1.5-1.5v-25A1.5 1.5 0 0 1 15 10z" fill="#fff" />
      <path d="M28 10v6h6" fill="#BFD0FF" />
      <path d="M18.5 21h11M18.5 25h11M18.5 29h6" stroke="#1E5EFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="31" cy="32" r="4.6" fill="#12B76A" stroke="#fff" strokeWidth="1.6" />
      <path d="M29 32l1.4 1.4 2.6-2.8" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
