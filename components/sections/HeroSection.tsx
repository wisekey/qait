import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center"
    >
      {/* Background image — canh phải để logo QAIT hiện vùng phải */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-right-top"
        aria-hidden="true"
      />

      {/* Gradient: tối hoàn toàn bên trái (text), trong suốt bên phải (logo) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.40) 35%, rgba(0,0,0,0.10) 58%, rgba(0,0,0,0.00) 75%)',
        }}
        aria-hidden="true"
      />

      {/* Gradient bottom: fade nhẹ phía dưới để depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.00) 40%)',
        }}
        aria-hidden="true"
      />

      {/* Content — chiếm max 55% chiều rộng để nhường logo */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8 py-section-md lg:py-section-lg w-full">
        <div className="max-w-[55%] lg:max-w-[50%]" style={{ minWidth: 'min(100%, 480px)' }}>
          <AnimateIn delay={0}>
            <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-6">
              Swiss Non-Profit · Zurich
            </p>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h1
              id="hero-heading"
              className="text-h1 font-bold text-white leading-[1.1] mb-6"
            >
              Governance and Trust Layer for Autonomous Machine Economies
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-base text-white/70 leading-relaxed mb-10">
              Swiss non-profit association governing the economic and compliance
              framework of the SEALCOIN ecosystem.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Button href="/whitepaper" variant="primary">
                Read Whitepaper
              </Button>
              <Button href="/spacedrop" variant="secondary-light">
                Explore Spacedrop
              </Button>
              <Button href="/qait-token" variant="secondary-light">
                QAIT Token
              </Button>
              <Button href="/about" variant="tertiary-light">
                About the Association →
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
