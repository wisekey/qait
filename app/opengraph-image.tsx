import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#FFFFFF',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Red left bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: '100%', background: '#E30613' }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '72px 80px' }}>
          {/* Top: logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: '#E30613', letterSpacing: '-0.5px' }}>QAIT</span>
            <span style={{ fontSize: 28, fontWeight: 400, color: '#999999' }}>Association</span>
          </div>

          {/* Middle: headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ fontSize: 60, fontWeight: 700, color: '#000000', lineHeight: 1.1, letterSpacing: '-1px', maxWidth: 900 }}>
              Governance and Trust Layer for Autonomous Machine Economies
            </div>
            <div style={{ fontSize: 24, color: '#333333', fontWeight: 400, maxWidth: 700 }}>
              Swiss non-profit · Zurich, Switzerland
            </div>
          </div>

          {/* Bottom: url */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#E30613' }} />
            <span style={{ fontSize: 18, color: '#999999' }}>qait.ch</span>
          </div>
        </div>

        {/* Bottom border */}
        <div style={{ position: 'absolute', bottom: 0, left: 8, right: 0, height: 1, background: '#E5E5E5' }} />
      </div>
    ),
    { ...size }
  )
}
