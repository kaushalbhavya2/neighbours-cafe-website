import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Dog-Friendly Café & Dog Menu St Kilda East',
  description:
    'Bring your dog to Neighbours Café. Dog-friendly Chapel Street courtyard, fresh water, dog menu, treats and brunch in St Kilda East.',
  alternates: {
    canonical: absoluteUrl('/dog-menu'),
  },
  openGraph: {
    title: 'Dog-Friendly Café & Dog Menu St Kilda East | Neighbours Café',
    description:
      'Courtyard tables, fresh water, dog-safe treats and brunch for humans at Neighbours Café.',
    url: absoluteUrl('/dog-menu'),
    images: [
      {
        url: absoluteUrl('/assets/cafe/dog-bowl.png'),
        width: 1200,
        height: 630,
        alt: 'Dog menu and water bowl at Neighbours Café',
      },
    ],
  },
}

// ─── Dog menu item ────────────────────────────────────────────────────────────
function DogItem({
  name,
  flavour,
  price,
}: {
  name: string
  flavour: string
  price: string
}) {
  return (
    <div className="flex items-start justify-between py-5 border-b border-jungle/20">
      <div className="flex-1 pr-8">
        <p className="font-sans font-semibold text-charcoal">{name}</p>
        <p className="font-serif italic text-sm text-charcoal/70 mt-1 leading-relaxed">{flavour}</p>
      </div>
      <span className="font-sans font-semibold text-gold shrink-0">{price}</span>
    </div>
  )
}

export default function DogMenuPage() {
  return (
    <main className="flex flex-col min-h-screen bg-linen">
      <Nav />

      {/* Back button */}
      <div className="bg-linen pt-20 pb-2 px-6 md:px-16">
        <BackButton />
      </div>

      {/* ── HERO: dog bowl image IS the header background ─────────────────────
          The dog bowl photo bleeds out as a CSS background-image with a
          jungle green multiply overlay — art is structural, not decorative.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative h-80 flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/cafe/dog-bowl.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Jungle green colour wash — the dog bowl photo bleeds through */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(58,125,68,0.82)', mixBlendMode: 'multiply' }}
        />
        {/* Extra legibility layer */}
        <div className="absolute inset-0 bg-jungle/55" />
        {/* Amber accent bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber" />

        <div className="relative z-10">
          <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Dog-friendly cafe in St Kilda East</p>
          <h1 className="font-bebas text-7xl text-white tracking-wide mb-3">The Dog Menu</h1>
          <p className="font-serif italic text-linen/90 text-lg max-w-xl">
            Courtyard tables, fresh water, and a proper dog menu for your four-legged mate.
          </p>
        </div>
      </section>

      {/* Info card */}
      <section className="max-w-3xl mx-auto w-full px-6 mt-12 mb-4">
        <div className="bg-white border-l-4 border-jungle px-8 py-6 shadow-amber">
          <p className="font-sans text-sm text-charcoal leading-relaxed">
            Neighbours Café is St Kilda East&apos;s dog-friendly brunch spot: dogs are welcome in our Chapel Street courtyard, fresh water is always available, and all dog-menu ingredients are vet-checked and dog-safe.
          </p>
        </div>
      </section>

      {/* Menu sections */}
      <section className="max-w-3xl mx-auto w-full px-6 py-12">
        <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-10">
          Convenient for dog owners in St Kilda, Elwood, Balaclava, Prahran, and South Yarra, our outdoor courtyard is made for slow coffee, brunch, and a dog treat or two.
        </p>

        {/* Starters */}
        <h2 className="font-bebas text-4xl text-jungle mb-1 paint-underline">Starters</h2>
        <div className="mb-6" />
        <DogItem
          name="Peking Duck Jerky"
          flavour="Duck a l'jerke. An indulgent chew, low in fat, high in protein."
          price="$2.95"
        />
        <DogItem
          name="Shark Cartilage"
          flavour="Gourmet paw-sized portions from South Australian fisheries. Omega 3 and glucosamine for joint health."
          price="$2.95"
        />

        {/* Main Plates */}
        <h2 className="font-bebas text-4xl text-jungle mt-14 mb-1 paint-underline">Main Plates</h2>
        <div className="mb-6" />
        <DogItem
          name="Lamb Shank Bone"
          flavour="Large cut, oven baked to pawfection. Calcium and phosphorus for healthy bones."
          price="$4.95"
        />
        <DogItem
          name="Beef Bully Stick"
          flavour="High-protein beef muscle. Great for clean teeth and strong muscles. Highly wag-able."
          price="$5.95"
        />
        <DogItem
          name="Outback Kangaroo Ribs"
          flavour="100% free-range. Rich in calcium and phosphorus. Great for dental hygiene."
          price="$7.95"
        />

        {/* Dessert */}
        <h2 className="font-bebas text-4xl text-jungle mt-14 mb-1 paint-underline">Dessert</h2>
        <div className="mb-6" />
        <DogItem
          name="Chicken Necks (x2)"
          flavour="Locally sourced, perfectly dehydrated. Crunchy texture with a drool-inducing aroma."
          price="$2.95"
        />

        {/* Credit */}
        <p className="font-sans text-xs text-charcoal/50 text-center mt-16">
          Dog menu supplied by k9katering.com
        </p>
      </section>

      <Footer />
    </main>
  )
}
