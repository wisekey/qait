import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { webPageSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  path: '/qait-token',
  title: 'QAIT Token',
  description:
    'QAIT is the native utility and governance token of the SEALCOIN ecosystem. Learn about tokenomics, distribution, and use cases.',
})

const tokenStats = [
  { label: 'Token Name', value: 'QAIT' },
  { label: 'Type', value: 'Utility & Governance' },
  { label: 'Network', value: 'TBC — pending chain confirmation' },
  { label: 'Association', value: 'QAIT Association, Zurich CH' },
]

const distribution = [
  { segment: 'Ecosystem Incentives', percentage: '40%', description: 'Device operator rewards, validator incentives, and staking pools.' },
  { segment: 'Foundation Reserve', percentage: '20%', description: 'Long-term ecosystem development, held by QAIT Association.' },
  { segment: 'Community & Spacedrop', percentage: '20%', description: 'Community onboarding, early adopter rewards, and Spacedrop allocations.' },
  { segment: 'Team & Advisors', percentage: '10%', description: 'Core team and strategic advisors, subject to vesting schedule.' },
  { segment: 'Strategic Partners', percentage: '10%', description: 'Technology and ecosystem partners enabling SEALCOIN infrastructure.' },
]

const useCases = [
  'Device onboarding fees via Proof-of-Security',
  'Data marketplace settlement between devices',
  'Governance voting on protocol parameters',
  'Staking to participate in network validation',
  'AI agent transaction budgets and spending limits',
  'Compute and energy resource clearing',
]

export default function QaitTokenPage() {
  const description = 'QAIT is the native utility and governance token of the SEALCOIN ecosystem.'

  return (
    <>
      {/* Hero */}
      <SectionWrapper background="white" labelledBy="token-heading">
        <div className="max-w-3xl">
          <AnimateIn>
            <p className="text-sm font-medium text-wk-red uppercase tracking-wider mb-4">
              QAIT Token
            </p>
            <h1 id="token-heading" className="text-h1 font-bold text-wk-black mb-6">
              The Economic Engine of the Machine Economy
            </h1>
            <p className="text-lg text-wk-n700 leading-relaxed mb-8">
              QAIT is the native utility and governance token of the SEALCOIN ecosystem.
              It powers device onboarding, marketplace settlement, and on-chain
              governance across the autonomous machine economy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/whitepaper" variant="primary">Read Whitepaper</Button>
              <Button href="/spacedrop" variant="secondary">Explore Spacedrop</Button>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* Token facts */}
      <SectionWrapper background="neutral" labelledBy="token-facts-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimateIn>
            <div>
              <h2 id="token-facts-heading" className="text-h2 font-bold text-wk-black mb-6">
                Token Overview
              </h2>
              <dl className="flex flex-col border border-wk-n200 divide-y divide-wk-n200">
                {tokenStats.map((stat) => (
                  <div key={stat.label} className="flex justify-between px-6 py-4 bg-wk-white">
                    <dt className="text-sm text-wk-n500">{stat.label}</dt>
                    <dd className="text-sm font-medium text-wk-black">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div>
              <h2 className="text-h2 font-bold text-wk-black mb-6">Use Cases</h2>
              <ul className="flex flex-col gap-3">
                {useCases.map((uc) => (
                  <li key={uc} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-wk-red flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-wk-n700">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* Distribution */}
      <SectionWrapper background="white" labelledBy="distribution-heading">
        <AnimateIn>
          <h2 id="distribution-heading" className="text-h2 font-bold text-wk-black mb-8">
            Token Distribution
          </h2>
        </AnimateIn>
        <div className="flex flex-col gap-px border border-wk-n200">
          {distribution.map((item, i) => (
            <AnimateIn key={item.segment} delay={i * 0.05}>
              <div className="flex flex-col sm:flex-row gap-4 p-6 bg-wk-white border-b border-wk-n200 last:border-b-0">
                <div className="flex items-center gap-4 sm:w-48 flex-shrink-0">
                  <span className="text-lg font-bold text-wk-red">{item.percentage}</span>
                  <span className="text-sm font-medium text-wk-black">{item.segment}</span>
                </div>
                <p className="text-sm text-wk-n700 leading-relaxed">{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <p className="mt-6 text-xs text-wk-n500">
          * Final token supply and distribution are subject to the governance framework
          defined in the QAIT Whitepaper.
        </p>
      </SectionWrapper>

      <JsonLd schema={webPageSchema({ path: '/qait-token', name: 'QAIT Token', description })} />
    </>
  )
}
