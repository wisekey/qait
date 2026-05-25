import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'

const reasons = [
  {
    number: '01',
    title: 'Machine-to-Machine Settlement',
    description:
      'QAIT defines the economic rules enabling billions of autonomous devices to transact directly — no human intermediary, no manual clearing.',
  },
  {
    number: '02',
    title: 'Secure Device Onboarding',
    description:
      'Through Proof-of-Security, devices must pass hardware-rooted identity verification before participating in the economy. Trust begins at the silicon level.',
  },
  {
    number: '03',
    title: 'Marketplace Interactions',
    description:
      'From energy trading to satellite bandwidth, QAIT governs the settlement layer where devices buy and sell resources without human intervention.',
  },
  {
    number: '04',
    title: 'Autonomous AI Agents',
    description:
      'AI agents operating on behalf of users or systems can transact autonomously within QAIT-governed compliance bounds and spending limits.',
  },
  {
    number: '05',
    title: 'Incentive Coordination',
    description:
      'QAIT tokens align incentives across device manufacturers, operators, validators, and end-users — creating a self-sustaining ecosystem economy.',
  },
]

export function WhyQaitSection() {
  return (
    <SectionWrapper id="why-qait" background="neutral" labelledBy="why-qait-heading">
      <AnimateIn delay={0}>
        <div className="mb-12">
          <h2 id="why-qait-heading" className="text-h2 font-bold text-wk-black mb-4">
            Why QAIT
          </h2>
          <p className="text-base text-wk-n700 max-w-2xl">
            The autonomous machine economy requires governance infrastructure that is
            neutral, compliant, and technically grounded. QAIT was designed to fill
            exactly that role.
          </p>
        </div>
      </AnimateIn>

      <div className="flex flex-col gap-px border border-wk-n200">
        {reasons.map((item, i) => (
          <AnimateIn key={item.number} delay={i * 0.05}>
            <div className="flex flex-col sm:flex-row gap-6 p-6 bg-wk-white border-b border-wk-n200 last:border-b-0">
              <span className="text-sm font-medium text-wk-n500 w-8 flex-shrink-0 pt-0.5">
                {item.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-h4 font-medium text-wk-black">{item.title}</h3>
                <p className="text-sm text-wk-n700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
