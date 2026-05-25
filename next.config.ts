import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Internal canonical normalization
      { source: '/qait',        destination: '/qait-token', permanent: true },
      { source: '/token',       destination: '/qait-token', permanent: true },
      { source: '/whitepaper/', destination: '/whitepaper', permanent: true },
      { source: '/qait-token/', destination: '/qait-token', permanent: true },
      { source: '/spacedrop/',  destination: '/spacedrop',  permanent: true },
      { source: '/about/',      destination: '/about',      permanent: true },
    ]
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
