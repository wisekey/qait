import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function ExplainerSection() {
  return (
    <SectionWrapper id="explainer" background="neutral" labelledBy="explainer-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: QAIT intro */}
        <AnimateIn delay={0}>
          <div className="flex flex-col gap-6">
            <h2 id="explainer-heading" className="text-h2 font-bold text-wk-black">
              Two Layers. One Ecosystem.
            </h2>
            <p className="text-base text-wk-n700 leading-relaxed">
              <strong className="text-wk-black font-medium">SEALCOIN</strong> is the
              protocol infrastructure: device identity, autonomous machine transactions,
              and secure hardware-to-hardware settlement at scale.
            </p>
            <p className="text-base text-wk-n700 leading-relaxed">
              <strong className="text-wk-black font-medium">QAIT Association</strong> is
              the governance layer above it. As a Swiss non-profit, QAIT governs the
              economic framework, defines compliance requirements, manages the QAIT token,
              and coordinates the Proof-of-Security mechanism across the ecosystem.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-wk-red flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-wk-n700">Registered Swiss non-profit association</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-wk-red flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-wk-n700">Independent of any single corporate entity</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-wk-red flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-wk-n700">Token governance, compliance standards, and ecosystem incentives</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Right: Architecture diagram */}
        <AnimateIn delay={0.1}>
          <ArchitectureDiagram />
        </AnimateIn>
      </div>
    </SectionWrapper>
  )
}
