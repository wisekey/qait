import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { webPageSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  path: '/governance',
  title: 'Governance',
  description:
    'QAIT Association governance framework: how decisions are made, how token holders participate, and how protocol parameters are updated.',
})

const pillars = [
  {
    title: 'Association Council',
    description:
      'The QAIT Association Council is the primary governance body. Council members are elected by token holders and are responsible for ratifying protocol changes and managing Foundation reserves.',
  },
  {
    title: 'Token Holder Voting',
    description:
      'QAIT token holders participate in on-chain governance votes on protocol parameter changes, treasury allocations, and ecosystem policy decisions.',
  },
  {
    title: 'Technical Committee',
    description:
      'A standing Technical Committee reviews and validates proposed protocol changes, ensuring all upgrades meet the security and cryptographic standards required by the SEALCOIN infrastructure.',
  },
  {
    title: 'Compliance Working Group',
    description:
      'Monitors regulatory developments across jurisdictions, proposes compliance policy updates, and ensures QAIT governance remains aligned with applicable law.',
  },
]

export default function GovernancePage() {
  const description =
    'QAIT Association governance framework: how decisions are made, how token holders participate, and how protocol parameters are updated.'

  return (
    <>
      <SectionWrapper background="white" labelledBy="governance-heading">
        <div className="max-w-3xl">
          <AnimateIn>
            <p className="text-sm font-medium text-wk-red uppercase tracking-wider mb-4">
              Governance
            </p>
            <h1 id="governance-heading" className="text-h1 font-bold text-wk-black mb-6">
              How QAIT Governs the Ecosystem
            </h1>
            <p className="text-lg text-wk-n700 leading-relaxed mb-8">
              QAIT Association uses a structured, multi-body governance framework to
              manage protocol evolution, compliance, and treasury decisions — balancing
              technical rigour with community participation.
            </p>
            <Button href="/whitepaper" variant="primary">
              Read the Governance Specification
            </Button>
          </AnimateIn>
        </div>
      </SectionWrapper>

      <SectionWrapper background="neutral" labelledBy="pillars-heading">
        <AnimateIn>
          <h2 id="pillars-heading" className="text-h2 font-bold text-wk-black mb-10">
            Governance Structure
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 0.05}>
              <div className="flex flex-col gap-3 p-6 bg-wk-white border border-wk-n200">
                <h3 className="text-h4 font-medium text-wk-black">{p.title}</h3>
                <p className="text-sm text-wk-n700 leading-relaxed">{p.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </SectionWrapper>

      <JsonLd schema={webPageSchema({ path: '/governance', name: 'Governance', description })} />
    </>
  )
}
