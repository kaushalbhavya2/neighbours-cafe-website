import Link from 'next/link'

const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'Dog Menu', href: '/dog-menu' },
  { label: 'Find Us', href: '/find-us' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left — brand */}
          <div>
            <p className="font-bebas text-3xl text-linen leading-none">Neighbours</p>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mt-1">
              Café · St Kilda East
            </p>
          </div>

          {/* Centre — links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-linen/70 hover:text-linen transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — contact */}
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com/neighbourscafe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-linen/70 hover:text-linen transition-colors"
            >
              @neighbourscafe
            </a>
            <a
              href="tel:+61390778950"
              className="font-sans text-sm text-linen/70 hover:text-linen transition-colors"
            >
              (03) 90778950
            </a>
          </div>
        </div>

        <div className="border-t border-linen/10 mt-10 pt-6">
          <p className="font-sans text-xs text-linen/40">
            © 2026 Neighbours Café · 42 Chapel St, St Kilda East
          </p>
        </div>
      </div>
    </footer>
  )
}
