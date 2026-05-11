import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-linen">
      <Nav />

      {/* Back button */}
      <div className="bg-linen pt-20 pb-2 px-6 md:px-16">
        <BackButton />
      </div>

      {/* Pull quote */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-cobalt mx-auto mb-8" />
          <blockquote className="font-serif italic text-4xl text-cobalt leading-snug">
            &ldquo;We just wanted a place where the coffee was good and the dog could come too.&rdquo;
          </blockquote>
          <div className="w-16 h-0.5 bg-cobalt mx-auto mt-8" />
        </div>
      </section>

      {/* Body text */}
      <section className="bg-linen pb-20 px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="font-sans text-base text-charcoal leading-relaxed">
            Neighbours started as a simple idea — a place on Chapel St where you didn&apos;t have to rush, where the food was honest and the coffee was properly made. We wanted somewhere that felt like the neighbourhood: welcoming, a little rough around the edges, genuinely warm. The courtyard came first, really. That open sky and those yellow umbrellas set the tone for everything.
          </p>
          <p className="font-sans text-base text-charcoal leading-relaxed">
            The art came naturally. St Kilda East has always been a place where creativity lives on the walls, and we wanted that inside too. Every canvas is from a real artist. Every mural was painted by someone who left something of themselves here. If your dog falls asleep under the table and you end up staying two hours longer than you planned — that&apos;s exactly what we had in mind.
          </p>
        </div>
      </section>

      {/* Full-bleed courtyard hero */}
      <div className="relative h-[560px] w-full overflow-hidden">
        <Image
          src="/assets/cafe/Hero courtyard .PNG"
          alt="Neighbours Café courtyard from above"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Double image — dark background */}
      <section className="bg-charcoal py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rotate-[1deg] shadow-amber rounded-sm overflow-hidden">
            <Image
              src="/assets/cafe/interior artwork.jpg"
              alt="Interior artwork at Neighbours Café"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-[400px] -rotate-[1deg] shadow-amber rounded-sm overflow-hidden">
            <Image
              src="/assets/cafe/graffiti 2.jpg"
              alt="Street art graffiti at Neighbours Café"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Closing caption */}
      <div className="bg-linen py-12">
        <p className="font-sans text-xs uppercase tracking-widest text-amber text-center">
          42 Chapel St, St Kilda East · Open until 4pm
        </p>
      </div>

      <Footer />
    </main>
  )
}
