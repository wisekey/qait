import { Button } from '@/components/ui/Button'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-wk-white py-section-md lg:py-section-lg border-b border-wk-n200"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimateIn delay={0}>
            <p className="text-sm font-medium text-wk-red uppercase tracking-wider mb-6">
              Swiss Non-Profit · Zurich
            </p>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h1
              id="hero-heading"
              className="text-h1 font-bold text-wk-black leading-[1.1] mb-6"
            >
              Governance and Trust Layer for Autonomous Machine Economies
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-lg text-wk-n700 leading-relaxed mb-10 max-w-2xl">
              Swiss non-profit association governing the economic and compliance
              framework of the SEALCOIN ecosystem.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Button href="/whitepaper" variant="primary">
                Read Whitepaper
              </Button>
              <Button href="/spacedrop" variant="secondary">
                Explore Spacedrop
              </Button>
              <Button href="/qait-token" variant="secondary">
                QAIT Token
              </Button>
              <Button href="/about" variant="tertiary">
                About the Association →
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
