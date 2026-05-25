import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ExplainerSection } from '@/components/sections/ExplainerSection'
import { ResponsibilitiesSection } from '@/components/sections/ResponsibilitiesSection'
import { WhyQaitSection } from '@/components/sections/WhyQaitSection'
import { UseCasesSection } from '@/components/sections/UseCasesSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { webPageSchema } from '@/lib/structured-data'
import { SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Governance and Trust Layer for Autonomous Machine Economies',
  description: SITE_DESCRIPTION,
  alternates: { canonical: 'https://www.qait.ch' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExplainerSection />
      <ResponsibilitiesSection />
      <WhyQaitSection />
      <UseCasesSection />
      <JsonLd
        schema={webPageSchema({
          path: '/',
          name: 'QAIT Association — Governance and Trust Layer',
          description: SITE_DESCRIPTION,
        })}
      />
    </>
  )
}
