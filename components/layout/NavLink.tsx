import Link from 'next/link'

interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
  className?: string
}

export function NavLink({ href, label, onClick, className = '' }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium text-wk-n700 hover:text-wk-black transition-colors duration-200 ${className}`}
    >
      {label}
    </Link>
  )
}
