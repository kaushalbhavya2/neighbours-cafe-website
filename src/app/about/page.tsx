import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Neighbours Café St Kilda East',
  description:
    'Neighbours Café is a community brunch spot on Chapel Street, St Kilda East: dog-friendly, vegan-friendly, art-filled and open daily until 4pm.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
  openGraph: {
    title: 'About Neighbours Café St Kilda East',
    description:
      'The story behind Neighbours Café, the dog-friendly Chapel Street brunch cafe with murals, courtyard seating and vegan-friendly food.',
    url: absoluteUrl('/about'),
    images: [
      {
        url: absoluteUrl('/assets/cafe/graffiti 2.jpg'),
        width: 1200,
        height: 630,
        alt: 'Street art wall at Neighbours Café',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-linen">
      <Nav />

      {/* ── HERO: graffiti wall IS the header background ─────────────────────
          The mural-section CSS class applies graffiti 2.jpg as a background
          with cobalt multiply overlay via ::before/::after pseudo-elements.
          This is not a photo in a container — the art is the page header.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-24 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/cafe/Hero courtyard .PNG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Cobalt colour-burn so the mural bleeds through the brand colour */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(28,95,173,0.85)', mixBlendMode: 'multiply' }}
        />
        {/* Linen gradient at the bottom — transitions into the page content below */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-linen" />
        {/* Amber bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <BackButton />
          <div className="mt-12">
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Est. 2013 · St Kilda East</p>
            <h1 className="font-bebas text-[5rem] md:text-[8rem] text-white leading-[0.9] uppercase">
              Our<br />Story
            </h1>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────────────── */}
      <section className="bg-linen py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-amber mx-auto mb-8" />
          <blockquote className="font-serif italic text-3xl md:text-4xl text-cobalt leading-snug">
            &ldquo;We just wanted a place where the coffee was good and the dog could come too.&rdquo;
          </blockquote>
          <div className="w-12 h-0.5 bg-amber mx-auto mt-8" />
        </div>
      </section>

      {/* ── BODY TEXT + INLINE ART — two-column layout that breaks the wall ── */}
      <section className="bg-linen pb-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Text spans 3 columns */}
          <div className="md:col-span-3 space-y-6">
            <p className="font-sans text-base text-charcoal leading-relaxed">
              Neighbours started as a simple idea — a brunch café on Chapel St where you didn&apos;t have to rush, where the food was honest, the coffee was properly made, and the dog could come too. We wanted somewhere that felt like St Kilda East: welcoming, a little rough around the edges, genuinely warm. The courtyard came first, really. That open sky and those yellow umbrellas set the tone for everything.
            </p>
            <p className="font-sans text-base text-charcoal leading-relaxed">
              The art came naturally. St Kilda East has always been a place where creativity lives on the walls, and we wanted that inside too. Every canvas is from a real artist. Every mural was painted by someone who left something of themselves here. The menu follows the same spirit: vegan-friendly, generous, colourful, and made for the whole table.
            </p>
            <p className="font-sans text-base text-charcoal leading-relaxed">
              If your dog falls asleep under the table and you end up staying two hours longer than you planned — that&apos;s exactly what we had in mind.
            </p>
          </div>
          {/* Interior artwork as a structural panel — rotated, floating alongside text */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="relative h-64 rotate-[1.5deg] shadow-amber-lg overflow-hidden">
              <Image
                src="/assets/cafe/interior artwork.jpg"
                alt="Interior artwork at Neighbours Café"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Amber frame accent */}
              <div className="absolute inset-0 ring-2 ring-amber/40 pointer-events-none" />
            </div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber text-right pr-1">Inside the walls</p>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED COURTYARD ────────────────────────────────────────────── */}
      <div className="relative h-[520px] w-full overflow-hidden">
        <Image
          src="/assets/cafe/Hero courtyard .PNG"
          alt="Neighbours Café courtyard from above"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle cobalt vignette at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-cobalt/30 via-transparent to-cobalt/30" />
      </div>

      {/* ── GRAFFITI STRIP: mural texture as section background ─────────────
          Here the mural IS the section. Charcoal multiply wash preserves
          the art while keeping text legible — no image box, no container.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 px-6 md:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/cafe/Graffiti 3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26,26,26,0.80)', mixBlendMode: 'multiply' }}
        />
        <div className="absolute inset-0 bg-charcoal/60" />

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: rotated inset of graffiti 2 — layered on top of Graffiti 3 bg */}
          <div className="relative h-[360px] -rotate-[1.5deg] shadow-2xl overflow-hidden">
            <Image
              src="/assets/cafe/graffiti 2.jpg"
              alt="Street art graffiti at Neighbours Café"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Amber frame */}
            <div className="absolute inset-0 ring-2 ring-amber/50 pointer-events-none" />
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">The Art</p>
            <h2 className="font-bebas text-5xl md:text-6xl text-white leading-tight mb-5">
              Every Wall<br />Tells a Story
            </h2>
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              From the giant murals out front to the folk art canvases hanging inside — the art was never an afterthought. It is what Neighbours is made of.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLOSING STRIP ─────────────────────────────────────────────────── */}
      <div className="bg-linen py-12 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-amber">
          42 Chapel St, St Kilda East VIC 3182 · Open until 4pm
        </p>
      </div>

      <Footer />
    </main>
  )
}
