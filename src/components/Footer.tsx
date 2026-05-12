import Link from 'next/link'

const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'Dog Menu', href: '/dog-menu' },
  { label: 'Find Us', href: '/find-us' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal px-8 py-14">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber/40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left — brand lockup */}
          <div>
            <p className="font-bebas text-4xl text-linen leading-none tracking-wide">Neighbours</p>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mt-1">
              Café · St Kilda East
            </p>
            <p className="font-sans text-xs text-linen/40 mt-3 leading-relaxed">
              42 Chapel St<br />St Kilda East VIC 3182
            </p>
          </div>

          {/* Centre — links */}
          <nav aria-label="Footer navigation">
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Pages</p>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-linen/60 hover:text-linen transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — contact */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/neighbourscafe"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-linen/60 hover:text-linen transition-colors"
              >
                @neighbourscafe
              </a>
              <a
                href="tel:+61390778950"
                className="font-sans text-sm text-linen/60 hover:text-linen transition-colors"
              >
                (03) 90778950
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Neighbours+Cafe+42+Chapel+Street+St+Kilda+East+VIC+3182+Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-amber hover:text-linen transition-colors"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-linen/10 mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-sans text-xs text-linen/30">
            &copy; 2026 Neighbours Café · All rights reserved
          </p>
          <p className="font-bebas text-xs tracking-widest text-linen/20 uppercase">
            Dogs always welcome
          </p>
        </div>
      </div>
    </footer>
  )
}
