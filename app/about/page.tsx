import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { webPageSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  path: '/about',
  title: 'About',
  description:
    'QAIT Association is a Swiss non-profit governing the economic and compliance framework of the SEALCOIN autonomous machine economy.',
})

const milestones = [
  { year: '2023', event: 'QAIT Association founded in Zurich, Switzerland' },
  { year: '2024', event: 'SEALCOIN protocol whitepaper published' },
  { year: '2024', event: 'Proof-of-Security (PoSy) mechanism specification released' },
  { year: '2025', event: 'QAIT token governance framework established' },
  { year: '2025', event: 'Spacedrop program launched — first device community onboarding' },
  { year: '2026', event: 'Ecosystem expansion: energy, space, data, and compute verticals' },
]

export default function AboutPage() {
  const description =
    'QAIT Association is a Swiss non-profit governing the economic and compliance framework of the SEALCOIN autonomous machine economy.'

  return (
    <>
      {/* Hero */}
      <SectionWrapper background="white" labelledBy="about-heading">
        <div className="max-w-3xl">
          <AnimateIn>
            <p className="text-sm font-medium text-wk-red uppercase tracking-wider mb-4">
              About
            </p>
            <h1 id="about-heading" className="text-h1 font-bold text-wk-black mb-6">
              QAIT Association
            </h1>
            <p className="text-lg text-wk-n700 leading-relaxed mb-8">
              A Swiss non-profit association established to govern the economic and
              compliance framework of the SEALCOIN ecosystem. Independent, neutral,
              and technically grounded.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/whitepaper" variant="primary">Read Whitepaper</Button>
              <Button href="/governance" variant="secondary">Governance Framework</Button>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* Mission & Values */}
      <SectionWrapper background="neutral" labelledBy="mission-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimateIn>
            <div>
              <h2 id="mission-heading" className="text-h2 font-bold text-wk-black mb-6">
                Mission
              </h2>
              <p className="text-base text-wk-n700 leading-relaxed mb-4">
                To create and maintain a trustworthy, compliant, and economically
                sustainable framework for autonomous machine-to-machine economies —
                where billions of devices can transact securely without human
                intermediaries.
              </p>
              <p className="text-base text-wk-n700 leading-relaxed">
                QAIT Association operates at the intersection of cryptographic security,
                regulatory compliance, and decentralised governance — providing the
                institutional infrastructure the machine economy needs to scale.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div>
              <h2 className="text-h2 font-bold text-wk-black mb-6">Principles</h2>
              <ul className="flex flex-col gap-4">
                {[
                  ['Neutrality', 'Independent of any single technology company or nation state.'],
                  ['Transparency', 'Governance decisions documented and publicly accessible.'],
                  ['Swiss Standards', 'Operating under Swiss law with the precision and stability it provides.'],
                  ['Technical Rigour', 'All specifications grounded in proven cryptographic and hardware security standards.'],
                ].map(([title, text]) => (
                  <li key={title} className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-wk-black">{title}</span>
                    <span className="text-sm text-wk-n700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* Roadmap */}
      <SectionWrapper background="white" labelledBy="roadmap-heading">
        <AnimateIn>
          <h2 id="roadmap-heading" className="text-h2 font-bold text-wk-black mb-10">
            Milestones
          </h2>
        </AnimateIn>
        <div className="flex flex-col border-l border-wk-n200 pl-6 gap-8">
          {milestones.map((m, i) => (
            <AnimateIn key={m.year + m.event} delay={i * 0.05}>
              <div className="flex flex-col sm:flex-row gap-4">
                <span className="text-sm font-medium text-wk-red w-12 flex-shrink-0">
                  {m.year}
                </span>
                <p className="text-sm text-wk-n700">{m.event}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </SectionWrapper>

      <JsonLd schema={webPageSchema({ path: '/about', name: 'About QAIT Association', description })} />
    </>
  )
}
