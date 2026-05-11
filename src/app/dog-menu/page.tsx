import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

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

      {/* Hero band */}
      <section className="bg-cobalt h-80 flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-bebas text-7xl text-white tracking-wide mb-3">The Dog Menu</h1>
        <p className="font-serif italic text-linen/90 text-xl">
          The finest and freshest produce, for your cultured canine.
        </p>
      </section>

      {/* Full-width dog bowl image */}
      <div className="relative h-[400px] w-full -rotate-[1deg] shadow-amber overflow-hidden">
        <Image
          src="/assets/cafe/dog-bowl.png"
          alt="Gourmet dog bowl at Neighbours Café"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Info card */}
      <section className="max-w-3xl mx-auto w-full px-6 mt-12 mb-4">
        <div className="bg-white border-l-4 border-jungle px-8 py-6 rounded-sm shadow-amber">
          <p className="font-sans text-sm text-charcoal leading-relaxed">
            Fresh water is always available. Our courtyard is fully fenced. All ingredients are vet-checked and dog-safe.
          </p>
        </div>
      </section>

      {/* Menu sections */}
      <section className="max-w-3xl mx-auto w-full px-6 py-12">

        {/* Starters */}
        <h2 className="font-bebas text-4xl text-jungle mb-4">Starters</h2>
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
        <h2 className="font-bebas text-4xl text-jungle mt-12 mb-4">Main Plates</h2>
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
        <h2 className="font-bebas text-4xl text-jungle mt-12 mb-4">Dessert</h2>
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
