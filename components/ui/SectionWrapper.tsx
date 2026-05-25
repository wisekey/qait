interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: 'white' | 'neutral'
  labelledBy?: string
}

export function SectionWrapper({
  children,
  id,
  className = '',
  background = 'white',
  labelledBy,
}: SectionWrapperProps) {
  const bg = background === 'neutral' ? 'bg-wk-n100' : 'bg-wk-white'

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${bg} py-section-sm md:py-section-md lg:py-section-lg ${className}`}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
