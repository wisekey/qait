import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-section-lg text-center">
      <p className="text-sm font-medium text-wk-red uppercase tracking-wider mb-4">404</p>
      <h1 className="text-h2 font-bold text-wk-black mb-4">Page not found</h1>
      <p className="text-base text-wk-n700 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-wk-black text-wk-white text-sm font-medium hover:bg-wk-n700 transition-colors"
      >
        Return home
      </Link>
    </div>
  )
}
