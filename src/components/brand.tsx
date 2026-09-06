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
