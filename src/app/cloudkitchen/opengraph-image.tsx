import { ImageResponse } from 'next/og';
import { CLOUDKITCHEN, SITE_NAME } from '@/lib/site';

// The share card for qresta.in/cloudkitchen — same construction as the
// root opengraph-image.tsx, carrying the CloudKitchen mark and brand
// phrase so a shared link reads "CloudKitchen by Qresta" at a glance.
export const alt = `${CLOUDKITCHEN.brandName} — cloud kitchen management software`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The mark from components/brand.tsx as a data URI: ImageResponse lays
// out flexbox and images, not arbitrary inline SVG children.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path d="M17.5 20.5a5 5 0 0 1 9.2-2.2 4 4 0 0 1 5.6 3.1 3.4 3.4 0 0 1-.7 6.6H18a4 4 0 0 1-.5-7.5Z" fill="#fff" opacity="0.92"/><path d="M11 33.5c0-5.9 5.8-10.5 13-10.5s13 4.6 13 10.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity="0.75"/><rect x="9" y="33" width="30" height="3.6" rx="1.8" fill="#fff"/></svg>`;

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
            Cloud<span style={{ color: '#8FB0FF' }}>Kitchen</span>
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
          Every channel, one queue. Every dish, a real cost.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', fontSize: 26, color: '#9DABCD' }}>
            Swiggy & Zomato · Kitchen display · Recipes & food cost · Inventory · GST invoices
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#8FB0FF', fontWeight: 600 }}>qresta.in/cloudkitchen</div>
        </div>
      </div>
    ),
    size,
  );
}
