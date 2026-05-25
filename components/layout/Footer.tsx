import Link from 'next/link'
import { CONTACT_EMAIL, ADDRESS } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-wk-n200 bg-wk-white" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-wk-black">
              <span className="text-wk-red">QAIT</span> Association
            </span>
            <p className="text-sm text-wk-n500">{ADDRESS}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-wk-n700 hover:text-wk-black transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-wk-n500 uppercase tracking-wider">Association</span>
              <Link href="/about" className="text-sm text-wk-n700 hover:text-wk-black transition-colors">About</Link>
              <Link href="/governance" className="text-sm text-wk-n700 hover:text-wk-black transition-colors">Governance</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-wk-n500 uppercase tracking-wider">Ecosystem</span>
              <Link href="/qait-token" className="text-sm text-wk-n700 hover:text-wk-black transition-colors">QAIT Token</Link>
              <Link href="/whitepaper" className="text-sm text-wk-n700 hover:text-wk-black transition-colors">Whitepaper</Link>
              <Link href="/spacedrop" className="text-sm text-wk-n700 hover:text-wk-black transition-colors">Spacedrop</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-wk-n500 uppercase tracking-wider">Infrastructure</span>
              <a
                href="https://www.sealcoin.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-wk-n700 hover:text-wk-black transition-colors"
              >
                SEALCOIN ↗
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-wk-n200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-wk-n500">
            © {year} QAIT Association. All rights reserved.
          </p>
          <p className="text-xs text-wk-n500">
            Swiss non-profit · Zurich, Switzerland
          </p>
        </div>
      </div>
    </footer>
  )
}
