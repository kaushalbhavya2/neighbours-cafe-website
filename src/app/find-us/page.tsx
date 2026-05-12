import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Find Neighbours Café on Chapel Street St Kilda East',
  description:
    'Visit Neighbours Café at 42 Chapel St, St Kilda East VIC 3182. Dog-friendly courtyard, brunch until 4pm, near Carlisle Street and Balaclava Station.',
  alternates: {
    canonical: absoluteUrl('/find-us'),
  },
  openGraph: {
    title: 'Find Neighbours Café on Chapel Street St Kilda East',
    description:
      'Map, hours and directions for Neighbours Café at 42 Chapel St, St Kilda East VIC 3182.',
    url: absoluteUrl('/find-us'),
    images: [
      {
        url: absoluteUrl('/assets/cafe/EXTERIOR.jpeg'),
        width: 1200,
        height: 630,
        alt: 'Neighbours Café exterior on Chapel Street',
      },
    ],
  },
}

export default function FindUsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-linen">
      <Nav />

      {/* ── HERO: Exterior mural IS the page header ───────────────────────────
          The exterior artwork background-image is the section. Cobalt washes
          over it so the mural bleeds through the brand colour structurally.
          This is not a photo placed below a heading — it is the heading.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-20 px-6 md:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/cafe/Exterior artwork.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Cobalt multiply wash — mural bleeds through the brand colour */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(28,95,173,0.88)', mixBlendMode: 'multiply' }}
        />
        {/* Legibility wash */}
        <div className="absolute inset-0 bg-cobalt/55" />
        {/* Linen gradient blending into the map below */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-linen" />
        {/* Amber bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <BackButton />
          <div className="mt-12">
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">42 Chapel St · St Kilda East VIC 3182</p>
            <h1 className="font-bebas text-[5rem] md:text-[8rem] text-white leading-[0.9] uppercase">
              Find Us
            </h1>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-linen/85">
              We&apos;re on the corner of Chapel Street and Inkerman Street in St Kilda East, close to Carlisle Street, Balaclava Station, and the St Kilda brunch crowd.
            </p>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="w-full h-[480px] relative">
        <iframe
          src="https://maps.google.com/maps?q=Neighbours%20Cafe%2042%20Chapel%20Street%20St%20Kilda%20East%20VIC%203182%20Australia&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="480"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Neighbours Café location on Google Maps"
        />
      </section>

      <section className="border-t-4 border-amber bg-linen px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Hours</p>
            <ul className="font-sans text-sm text-charcoal/75 leading-8">
              <li>Mon — 7:30am–4pm</li>
              <li>Tue–Wed — 6:30am–4pm</li>
              <li>Thu–Sun — 7:30am–4pm</li>
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Location</p>
            <ul className="font-sans text-sm text-charcoal/75 leading-8">
              <li>42 Chapel St</li>
              <li>St Kilda East VIC 3182</li>
              <li>Corner of Chapel & Inkerman</li>
              <li>(03) 90778950</li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Neighbours+Cafe+42+Chapel+Street+St+Kilda+East+VIC+3182+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cobalt hover:text-folk-red hover:underline underline-offset-4 transition-colors"
                >
                  Get directions →
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Getting Here</p>
            <ul className="font-sans text-sm text-charcoal/75 leading-8">
              <li>Tram 3/3a on Chapel St</li>
              <li>Near Carlisle Street and Balaclava Station</li>
              <li>Street parking nearby</li>
              <li>Dog-friendly courtyard access</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
