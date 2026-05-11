import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

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
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">42 Chapel St · St Kilda East</p>
            <h1 className="font-bebas text-[5rem] md:text-[8rem] text-white leading-[0.9] uppercase">
              Find Us
            </h1>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="w-full h-[480px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d144.9920!3d-37.8650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667f0d8b77f0b%3A0x1234!2s42+Chapel+St%2C+St+Kilda+East+VIC+3183!5e0!3m2!1sen!2sau!4v1"
          width="100%"
          height="480"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Neighbours Café location on Google Maps"
        />
      </section>

      {/* ── INFO STRIP: Graffiti 3 as section background ─────────────────────
          The mural is the background of the info strip, not a photo below it.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative border-t-4 border-amber py-16 px-6 md:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/cafe/Graffiti 3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(28,95,173,0.90)', mixBlendMode: 'multiply' }}
        />
        <div className="absolute inset-0 bg-cobalt/60" />

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Hours</p>
            <ul className="font-sans text-sm text-white leading-8">
              <li>Mon — 7:30am–4pm</li>
              <li>Tue–Wed — 6:30am–4pm</li>
              <li>Thu–Sun — 7:30am–4pm</li>
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Location</p>
            <ul className="font-sans text-sm text-white leading-8">
              <li>42 Chapel St</li>
              <li>St Kilda East VIC 3183</li>
              <li>(03) 90778950</li>
              <li>
                <a
                  href="https://maps.google.com/?q=42+Chapel+St+St+Kilda+East+VIC+3183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:underline underline-offset-4 transition-colors"
                >
                  Get directions →
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Getting Here</p>
            <ul className="font-sans text-sm text-white leading-8">
              <li>Tram 3/3a on Chapel St</li>
              <li>2 min walk</li>
              <li>Dog-friendly parking on side streets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exterior full-bleed with caption — a final visual payoff on scroll */}
      <div className="relative h-[340px] w-full overflow-hidden">
        <Image
          src="/assets/cafe/EXTERIOR.jpeg"
          alt="Neighbours Café exterior building"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-linen/80 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-cobalt">
            That&apos;s the mural building on the corner.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
