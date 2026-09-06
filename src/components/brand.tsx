// The Qresta brand mark, drawn inline rather than loaded from /public.
//
// qresta.in serves this marketing site at the root but proxies /login,
// /dashboard, /menu and friends through to the app, so an <img src="/...">
// is fine here — yet inlining still wins: the mark appears in the header
// of every page and in the hero, and an inline SVG costs no request and
// can take its colours from the surrounding theme.
//
// Geometry is lifted verbatim from public/qresta-glyph.svg so the pixel Q
// is identical to the one on the app, the APKs and the favicon.

const Q_PIXELS: Array<[number, number, number, number]> = [
  // [x, y, size, radius]
  [124, 34, 39, 10],
  [169, 34, 39, 10],
  [214, 34, 39, 10],
  [79, 79, 39, 10],
  [259, 79, 39, 10],
  [34, 124, 39, 10],
  [304, 124, 39, 10],
  [34, 169, 39, 10],
  [304, 169, 39, 10],
  [34, 214, 39, 10],
  [304, 214, 39, 10],
  [79, 259, 39, 10],
  [259, 259, 39, 10],
  [124, 304, 39, 10],
  [169, 304, 39, 10],
  [214, 304, 39, 10],
  [304, 304, 39, 10],
  [348.9, 348.9, 25.7, 6.6],
  [386.4, 386.4, 16.4, 4.2],
];

/** White pixel Q on a Qresta-blue rounded tile — the app-icon lockup. */
export function QrestaMark({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 436.8 436.8"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="qrestaTile" x1="0" y1="0" x2="437" y2="437" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3B76FF" />
          <stop offset="1" stopColor="#1E5EFF" />
        </linearGradient>
      </defs>
      <rect width="436.8" height="436.8" rx="96" fill="url(#qrestaTile)" />
      <g transform="translate(218.4 218.4) scale(0.78) translate(-218.4 -218.4)">
        {Q_PIXELS.map(([x, y, s, r]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={s} height={s} rx={r} fill="#FFFFFF" />
        ))}
      </g>
    </svg>
  );
}

/** The bare pixel Q, no tile — for footers and watermarks. */
export function QrestaGlyph({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 436.8 436.8" aria-hidden="true" focusable="false">
      {Q_PIXELS.map(([x, y, s, r]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={s} height={s} rx={r} fill={color} />
      ))}
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
