import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { HorizontalCard } from '@/components/ui/HorizontalCard'
import { AnimateIn } from '@/components/ui/AnimateIn'

const useCases = [
  {
    label: 'Use Case',
    title: 'Energy & Electric Mobility',
    description:
      'EVs, charging stations, and grid nodes transact autonomously. QAIT governs the settlement rules for energy traded between devices in real time.',
  },
  {
    label: 'Use Case',
    title: 'Space Connectivity',
    description:
      'Satellite bandwidth allocation and ground station access, settled on-chain via QAIT-governed rules between WISeSat LEO satellites and terrestrial devices.',
  },
  {
    label: 'Use Case',
    title: 'Premium Data',
    description:
      'Secure sensor data from certified hardware is monetised through QAIT-governed data marketplaces with provenance and integrity guarantees.',
  },
  {
    label: 'Use Case',
    title: 'Distributed Compute',
    description:
      'Edge compute resources are pooled, priced, and traded between autonomous agents. QAIT defines the compliance framework for compute resource clearing.',
  },
]

export function UseCasesSection() {
  return (
    <SectionWrapper id="use-cases" background="white" labelledBy="use-cases-heading">
      <AnimateIn delay={0}>
        <div className="mb-12">
          <h2 id="use-cases-heading" className="text-h2 font-bold text-wk-black mb-4">
            Ecosystem Use Cases
          </h2>
          <p className="text-base text-wk-n700 max-w-2xl">
            QAIT governance enables machine-economy applications across four high-value
            verticals.
          </p>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {useCases.map((item, i) => (
          <AnimateIn key={item.title} delay={i * 0.05}>
            <HorizontalCard
              label={item.label}
              title={item.title}
              description={item.description}
            />
          </AnimateIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
