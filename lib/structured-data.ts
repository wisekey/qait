import { SITE_URL, SITE_NAME, CONTACT_EMAIL, ADDRESS } from './constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zurich',
      addressCountry: 'CH',
    },
    description:
      'Swiss non-profit association governing the economic and compliance framework of the SEALCOIN ecosystem.',
    sameAs: ['https://www.sealcoin.ai'],
  }
}

export function webPageSchema({
  path,
  name,
  description,
}: {
  path: string
  name: string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { '@type': 'WebSite', url: SITE_URL, name: SITE_NAME },
  }
}
