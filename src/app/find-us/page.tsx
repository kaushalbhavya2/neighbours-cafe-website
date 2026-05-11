import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function FindUsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-linen">
      <Nav />

      {/* Page header */}
      <section className="bg-linen pt-24 pb-12 px-6 md:px-16">
        <BackButton />
        <div className="h-4" />
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bebas text-7xl text-cobalt leading-none">Find Us</h1>
        </div>

      </section>

      {/* Map embed */}
      <section className="w-full h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d144.9920!3d-37.8650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667f0d8b77f0b%3A0x1234!2s42+Chapel+St%2C+St+Kilda+East+VIC+3183!5e0!3m2!1sen!2sau!4v1"
          width="100%"
          height="500"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Neighbours Café location on Google Maps"
        />
      </section>

      {/* Info strip — same as home section 7 */}
      <section className="bg-cobalt border-t-4 border-amber py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
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
                  className="text-amber hover:underline underline-offset-4"
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

      {/* Exterior artwork — full bleed, no overlay */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/assets/cafe/Exterior artwork.jpg"
          alt="Neighbours Café exterior mural artwork"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Caption */}
      <p className="font-sans text-sm italic text-charcoal/70 text-center py-8 bg-linen px-6">
        42 Chapel St, St Kilda East — that&apos;s the mural building on the corner.
      </p>

      <Footer />
    </main>
  )
}
