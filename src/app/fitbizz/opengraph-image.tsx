import { ImageResponse } from 'next/og';
import { FITBIZZ, SITE_NAME } from '@/lib/site';

// The share card for qresta.in/fitbizz — same construction as the root
// opengraph-image.tsx, carrying the FitBizz mark and brand phrase so a
// shared link reads "FitBizz by Qresta" at a glance.
export const alt = `${FITBIZZ.brandName} — gym management software`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The mark from components/brand.tsx as a data URI: ImageResponse lays
// out flexbox and images, not arbitrary inline SVG children.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path d="M13 24c0-6.1 4.9-11 11-11 3.6 0 6.8 1.7 8.8 4.4" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/><path d="M35 24c0 6.1-4.9 11-11 11-3.6 0-6.8-1.7-8.8-4.4" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" opacity="0.7"/><rect x="15" y="21" width="18" height="6" rx="2" fill="#fff"/><rect x="11" y="19" width="4" height="10" rx="1.5" fill="#fff"/><rect x="33" y="19" width="4" height="10" rx="1.5" fill="#fff"/></svg>`;

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
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`} width={64} height={64} alt="" />
          </div>
          <div style={{ display: 'flex', marginLeft: 22, fontSize: 46, fontWeight: 700, color: '#EDF1FB', letterSpacing: -1 }}>
            Fit<span style={{ color: '#8FB0FF' }}>Bizz</span>
            <span style={{ color: '#9DABCD', fontWeight: 500, marginLeft: 16 }}>by {SITE_NAME}</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          Gym management software. Members pay you, not us.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', fontSize: 26, color: '#9DABCD' }}>
            Memberships · QR & biometric check-in · Trainers & PT · GST invoices · Supplements POS
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#8FB0FF', fontWeight: 600 }}>qresta.in/fitbizz</div>
        </div>
      </div>
    ),
    size,
  );
}
