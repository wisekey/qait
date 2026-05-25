import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { webPageSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  path: '/spacedrop',
  title: 'Spacedrop',
  description:
    'Spacedrop is the QAIT community onboarding program. Register your device, join the network, and earn QAIT tokens.',
})

const steps = [
  {
    step: '01',
    title: 'Register Your Device',
    description:
      'Submit your device details through the Spacedrop portal. Devices must meet SEALCOIN hardware security requirements.',
  },
  {
    step: '02',
    title: 'Proof-of-Security Verification',
    description:
      'Your device undergoes automated PoSy verification, confirming hardware-rooted identity and cryptographic integrity.',
  },
  {
    step: '03',
    title: 'Join the Network',
    description:
      'Verified devices are onboarded to the SEALCOIN network and receive a QAIT address for ecosystem participation.',
  },
  {
    step: '04',
    title: 'Earn QAIT Tokens',
    description:
      'Participate in network validation, data provision, or compute sharing to earn QAIT tokens according to the incentive schedule.',
  },
]

export default function SpacedropPage() {
  const description =
    'Spacedrop is the QAIT community onboarding program. Register your device, join the network, and earn QAIT tokens.'

  return (
    <>
      {/* Hero */}
      <SectionWrapper background="white" labelledBy="spacedrop-heading">
        <div className="max-w-3xl">
          <AnimateIn>
            <p className="text-sm font-medium text-wk-red uppercase tracking-wider mb-4">
              Spacedrop
            </p>
            <h1 id="spacedrop-heading" className="text-h1 font-bold text-wk-black mb-6">
              Join the Autonomous Machine Economy
            </h1>
            <p className="text-lg text-wk-n700 leading-relaxed mb-4">
              Spacedrop is the QAIT ecosystem's community onboarding program. Connect
              your hardware, complete Proof-of-Security verification, and start earning
              QAIT tokens.
            </p>
            <p className="text-base text-wk-n500 mb-8">
              The full Spacedrop registration portal is available at{' '}
              <a
                href="https://spacedrop.sealcoin.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wk-black underline underline-offset-4 hover:text-wk-red transition-colors"
              >
                spacedrop.sealcoin.ai
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                href="https://spacedrop.sealcoin.ai"
                variant="primary"
                external
              >
                Open Spacedrop Portal ↗
              </Button>
              <Button href="/qait-token" variant="secondary">
                QAIT Token Details
              </Button>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper background="neutral" labelledBy="how-it-works-heading">
        <AnimateIn>
          <h2 id="how-it-works-heading" className="text-h2 font-bold text-wk-black mb-10">
            How Spacedrop Works
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <AnimateIn key={s.step} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-6 bg-wk-white border border-wk-n200">
                <span className="text-2xl font-bold text-wk-red">{s.step}</span>
                <div>
                  <h3 className="text-base font-medium text-wk-black mb-2">{s.title}</h3>
                  <p className="text-sm text-wk-n700 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Eligibility */}
      <SectionWrapper background="white" labelledBy="eligibility-heading">
        <div className="max-w-2xl">
          <AnimateIn>
            <h2 id="eligibility-heading" className="text-h2 font-bold text-wk-black mb-6">
              Device Requirements
            </h2>
            <p className="text-base text-wk-n700 leading-relaxed mb-6">
              To participate in Spacedrop, devices must meet the SEALCOIN
              hardware security baseline established by QAIT Association.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Hardware-rooted identity (secure element or TPM)',
                'Cryptographic attestation capability',
                'SEALCOIN-compatible firmware or SDK',
                'Network connectivity for PoSy verification',
              ].map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-wk-red flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-wk-n700">{req}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-wk-n500">
              Full technical requirements are documented in the{' '}
              <a href="/whitepaper" className="text-wk-black underline underline-offset-4 hover:text-wk-red transition-colors">
                QAIT Whitepaper
              </a>
              .
            </p>
          </AnimateIn>
        </div>
      </SectionWrapper>

      <JsonLd schema={webPageSchema({ path: '/spacedrop', name: 'Spacedrop', description })} />
    </>
  )
}
