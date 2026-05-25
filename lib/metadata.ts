import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './constants'

interface BuildMetadataOptions {
  path: string
  title: string
  description?: string
  ogImage?: string
}

export function buildMetadata({
  path,
  title,
  description = SITE_DESCRIPTION,
  ogImage = '/images/og/default.png',
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`
  const image = `${SITE_URL}${ogImage}`

  return {
    title: `${title} — ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [image],
    },
  }
}
