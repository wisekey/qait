import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { IconCard } from '@/components/ui/IconCard'
import { AnimateIn } from '@/components/ui/AnimateIn'

const responsibilities = [
  {
    title: 'QAIT Token Governance',
    description:
      'Defining token issuance policy, distribution rules, and on-chain governance parameters for the QAIT utility token.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Proof-of-Security (PoSy)',
    description:
      'Coordinating the Proof-of-Security mechanism that certifies device integrity and enables trusted machine-to-machine interactions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Compliance & Identity',
    description:
      'Setting eIDAS-aligned identity standards for device onboarding, AML/KYC frameworks, and regulatory compliance across jurisdictions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: 'Ecosystem Incentives',
    description:
      'Designing and managing token-based incentive structures that reward device operators, validators, and service providers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Marketplace Settlement',
    description:
      'Governing the rules for data marketplace settlement, compute resource trading, and energy transaction clearing between autonomous agents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
]

export function ResponsibilitiesSection() {
  return (
    <SectionWrapper id="responsibilities" background="white" labelledBy="responsibilities-heading">
      <AnimateIn delay={0}>
        <div className="mb-12">
          <h2 id="responsibilities-heading" className="text-h2 font-bold text-wk-black mb-4">
            Core Responsibilities
          </h2>
          <p className="text-base text-wk-n700 max-w-2xl">
            QAIT Association exercises governance across five critical dimensions of the
            autonomous machine economy.
          </p>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {responsibilities.map((item, i) => (
          <AnimateIn key={item.title} delay={i * 0.05}>
            <IconCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </AnimateIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
