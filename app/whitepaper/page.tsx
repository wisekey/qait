import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  path: '/whitepaper',
  title: 'Whitepaper',
  description:
    'Read the SEALCOIN / QAIT technical whitepaper. Protocol architecture, tokenomics, governance, and use cases for the autonomous machine economy.',
})

const sections = [
  { title: 'Introduction', summary: 'Overview of the autonomous machine economy and the need for a governance layer.' },
  { title: 'Platform Architecture', summary: 'SEALCOIN protocol design: device identity, transaction processing, and settlement.' },
  { title: 'Tokenomics', summary: 'QAIT token supply, distribution schedule, and economic model.' },
  { title: 'Governance', summary: 'QAIT Association governance framework, voting mechanisms, and policy process.' },
  { title: 'Proof-of-Security (PoSy)', summary: 'Hardware-rooted device certification and its role in network trust.' },
  { title: 'Use Cases', summary: 'Energy, space connectivity, premium data, and distributed compute applications.' },
  { title: 'Regulatory Compliance', summary: 'eIDAS alignment, Swiss regulatory context, and cross-border considerations.' },
]

export default function WhitepaperPage() {
  return (
    <>
      <SectionWrapper background="white" labelledBy="whitepaper-heading">
        <div className="max-w-3xl">
          <AnimateIn>
            <p className="text-sm font-medium text-wk-red uppercase tracking-wider mb-4">
              Whitepaper
            </p>
            <h1 id="whitepaper-heading" className="text-h1 font-bold text-wk-black mb-6">
              SEALCOIN & QAIT Technical Whitepaper
            </h1>
            <p className="text-lg text-wk-n700 leading-relaxed mb-8">
              The complete technical and economic specification for the SEALCOIN
              protocol and QAIT governance framework. Covers architecture, tokenomics,
              compliance, and use case verticals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/docs/whitepaper.pdf" variant="primary" external>
                Download PDF
              </Button>
              <Button href="/qait-token" variant="secondary">
                QAIT Token Overview
              </Button>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* Table of contents */}
      <SectionWrapper background="neutral" labelledBy="toc-heading">
        <AnimateIn>
          <h2 id="toc-heading" className="text-h2 font-bold text-wk-black mb-8">
            Contents
          </h2>
        </AnimateIn>
        <div className="flex flex-col border border-wk-n200 divide-y divide-wk-n200">
          {sections.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 0.04}>
              <div className="flex flex-col sm:flex-row gap-4 p-6 bg-wk-white">
                <span className="text-sm font-medium text-wk-n500 w-6 flex-shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-medium text-wk-black">{s.title}</h3>
                  <p className="text-sm text-wk-n700">{s.summary}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </SectionWrapper>

      <JsonLd
        schema={{
          '@context': 'https://schema.org',
          '@type': 'DigitalDocument',
          name: 'SEALCOIN & QAIT Technical Whitepaper',
          url: `${SITE_URL}/docs/whitepaper.pdf`,
          description:
            'Complete technical and economic specification for the SEALCOIN protocol and QAIT governance framework.',
          publisher: {
            '@type': 'Organization',
            name: 'QAIT Association',
            url: SITE_URL,
          },
        }}
      />
    </>
  )
}
