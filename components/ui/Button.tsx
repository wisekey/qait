import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'secondary-light' | 'tertiary' | 'tertiary-light'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: ButtonVariant
  external?: boolean
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-wk-red text-wk-white hover:bg-red-700 px-6 py-3 text-sm font-medium transition-colors duration-200',
  secondary:
    'border border-wk-black text-wk-black hover:bg-wk-n100 px-6 py-3 text-sm font-medium transition-colors duration-200',
  'secondary-light':
    'border border-white/60 text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition-colors duration-200',
  tertiary:
    'text-wk-black underline-offset-4 hover:underline text-sm font-medium',
  'tertiary-light':
    'text-white/80 hover:text-white underline-offset-4 hover:underline text-sm font-medium transition-colors duration-200',
}

export function Button({
  href,
  children,
  variant = 'secondary',
  external = false,
  className = '',
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}
