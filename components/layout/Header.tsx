import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-wk-white border-b border-wk-n200">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-wk-black tracking-tight text-lg"
          aria-label="QAIT Association — home"
        >
          <span className="text-wk-red font-bold">QAIT</span>
          <span className="text-wk-n500 font-normal text-sm hidden sm:inline">Association</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-wk-n700 hover:text-wk-black transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/whitepaper"
            className="px-4 py-2 border border-wk-black text-sm font-medium text-wk-black hover:bg-wk-n100 transition-colors duration-200"
          >
            Read Whitepaper
          </Link>
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </div>
    </header>
  )
}
