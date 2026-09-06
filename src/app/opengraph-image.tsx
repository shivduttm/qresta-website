import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

// The card Google, WhatsApp, LinkedIn and X show when qresta.in is
// shared or previewed. Generated rather than shipped as a PNG so it
// never drifts from the site's own colours.
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The pixel Q, inlined as a data URI: the renderer behind ImageResponse
// lays out flexbox, not arbitrary SVG children, so the mark comes in as
// an image rather than as elements.
const Q_RECTS = [
  [124, 34],
  [169, 34],
  [214, 34],
  [79, 79],
  [259, 79],
  [34, 124],
  [304, 124],
  [34, 169],
  [304, 169],
  [34, 214],
  [304, 214],
  [79, 259],
  [259, 259],
  [124, 304],
  [169, 304],
  [214, 304],
  [304, 304],
]
  .map(([x, y]) => `<rect x="${x}" y="${y}" width="39" height="39" rx="10" fill="white"/>`)
  .join('');

const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.8 436.8" width="436.8" height="436.8">${Q_RECTS}<rect x="348.9" y="348.9" width="25.7" height="25.7" rx="6.6" fill="white"/><rect x="386.4" y="386.4" width="16.4" height="16.4" rx="4.2" fill="white"/></svg>`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #060A17 0%, #0B1F4B 65%, #1740A0 100%)',
          padding: 72,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              background: '#1E5EFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`} width={54} height={54} alt="" />
          </div>
          <div style={{ marginLeft: 22, fontSize: 46, fontWeight: 700, color: '#EDF1FB', letterSpacing: -1 }}>
            {SITE_NAME}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 68,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 940,
          }}
        >
          The restaurant operating system built for India&apos;s rush hour.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 27, color: '#9DABCD' }}>
            Billing · Kitchen · QR ordering · Online orders · Inventory · Reports
          </div>
          <div style={{ display: 'flex', fontSize: 27, color: '#3B76FF', fontWeight: 600 }}>qresta.in</div>
        </div>
      </div>
    ),
    size,
  );
}
