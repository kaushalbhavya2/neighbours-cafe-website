'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// ─── Dish Card ────────────────────────────────────────────────────────────────
interface DishCardProps {
  image: string
  tag: string
  name: string
  description: string
  price: string
  delay?: number
}

function DishCard({ image, tag, name, description, price, delay = 0 }: DishCardProps) {
  return (
    <motion.div
      className="bg-white overflow-hidden flex-1 group cursor-default"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 border-t-2 border-amber">
        <span className="inline-block font-sans text-[0.65rem] uppercase tracking-wider bg-jungle text-white px-2 py-0.5 mb-3">
          {tag}
        </span>
        <h3 className="font-serif text-xl text-charcoal mb-2">{name}</h3>
        <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-sans font-semibold text-gold text-lg">{price}</span>
          <Link href="/menu" className="font-sans text-sm text-folk-red hover:underline underline-offset-4 transition-colors">
            Full menu →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-bebas text-5xl text-amber leading-none">{value}</p>
      <p className="font-sans text-xs uppercase tracking-widest text-linen/70 mt-1">{label}</p>
    </div>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(heroProgress, [0, 1], [1.08, 1.0])
  const heroOpacity = useTransform(heroProgress, [0.6, 1], [1, 0])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    return () => { ScrollTrigger.killAll() }
  }, [])

  return (
    <main id="top" className="flex flex-col">
      <Nav />
      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/cafe/Hero courtyard .PNG"
            alt="Neighbours Café courtyard"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Layered gradient: dark top for nav, calm left-side reading area, atmospheric bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,28,0.86)_0%,rgba(8,18,28,0.58)_38%,rgba(8,18,28,0.18)_72%,rgba(8,18,28,0.36)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-transparent to-black/68" />

        {/* Hero content */}
        <motion.div
          className="absolute inset-0 flex items-end px-6 pb-20 pt-28 md:px-16 md:pb-16"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl text-left">
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-5 w-fit bg-amber px-3 py-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-charcoal shadow-[6px_6px_0_rgba(217,79,61,0.88)]"
            >
              42 Chapel St · Corner of Inkerman
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="font-bebas text-[5.3rem] uppercase leading-[0.82] tracking-wide text-white md:text-[9.5rem] lg:text-[11rem]"
            >
              Neighbours<br />Cafe
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl border-l-4 border-amber pl-5"
            >
              <p className="font-serif text-2xl italic leading-snug text-linen md:text-3xl">
                Big brunch, good coffee, dogs in the courtyard.
              </p>
              <p className="mt-4 font-sans text-sm uppercase tracking-[0.18em] text-linen/70">
                Dog-friendly brunch in St Kilda East · Open daily until 4pm
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.08 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/menu"
                className="font-sans text-sm font-semibold bg-folk-red px-8 py-3 text-white transition-all hover:-translate-y-1 hover:bg-amber hover:text-charcoal active:translate-y-0"
              >
                VIEW MENU
              </Link>
              <Link
                href="/find-us"
                className="font-sans text-sm font-semibold border-2 border-linen px-8 py-3 text-linen transition-all hover:-translate-y-1 hover:bg-linen hover:text-cobalt active:translate-y-0"
              >
                GET DIRECTIONS
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent origin-top"
          />
        </motion.div>
      </section>

      {/* ── STATS BAR — graffiti texture baked into cobalt ───────────────────── */}
      <section className="relative bg-cobalt border-b-4 border-amber py-10 px-6 overflow-hidden graffiti-texture artwork-texture">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <StatChip value="4pm" label="Open daily until" />
          <div className="hidden md:block w-px h-10 bg-linen/20" />
          <StatChip value="Dogs" label="Welcome outside" />
          <div className="hidden md:block w-px h-10 bg-linen/20" />
          <StatChip value="10+" label="Vegan dishes" />
          <div className="hidden md:block w-px h-10 bg-linen/20" />
          <StatChip value="42" label="Chapel Street" />
        </div>
      </section>

      {/* ── SECTION 2: THE FEELING ──────────────────────────────────────────── */}
      {/*
        Interior artwork is NOT in a box here. It's bled as a css background
        on the right panel, with cobalt multiply overlay — so the folk art
        BECOMES the colour and texture of the section, not a photo inside it.
      */}
      <section className="relative bg-cobalt min-h-[560px] flex items-stretch overflow-hidden">
        {/* Left: text content */}
        <motion.div
          className="relative z-10 flex-1 max-w-xl pl-8 md:pl-20 py-20 pr-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">St Kilda East · Open until 4pm</p>
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-[0.92] mb-6">
            A Café That<br />Feels Like<br />Your Street
          </h2>
          <p className="font-sans text-base text-white/80 leading-relaxed mb-8 max-w-sm">
            We&apos;re a St Kilda East brunch café on Chapel Street with good coffee, vegan-friendly plates, healthy brunch options, and a dog-friendly outdoor courtyard made for slow mornings.
          </p>
          <Link href="/about" className="font-sans text-sm text-amber hover:text-white transition-colors underline underline-offset-4">
            Our story →
          </Link>
        </motion.div>

        {/* Right: interior artwork as structural background panel, not a photo in a div */}
        <div
          className="hidden md:block absolute right-0 top-0 h-full w-[52%]"
          style={{
            backgroundImage: "url('/assets/cafe/interior artwork.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
          aria-hidden="true"
        >
          {/* Cobalt bleeds LEFT over the image — creates split without a border */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #1C5FAD 0%, rgba(28,95,173,0.55) 40%, rgba(28,95,173,0.1) 100%)',
            }}
          />
          {/* Amber accent stripe at the seam */}
          <div
            className="absolute top-0 left-0 bottom-0 w-1"
            style={{ background: 'linear-gradient(to bottom, transparent 10%, #E8A020 30%, #E8A020 70%, transparent 90%)' }}
          />
        </div>
      </section>

      {/* ── SECTION 3: SIGNATURE DISHES ─────────────────────────────────────── */}
      <section className="bg-linen py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-amber mb-3">On the Menu · Vegan-Friendly Brunch</p>
              <h2 className="font-bebas text-6xl text-cobalt paint-underline">House Favourites</h2>
            </div>
            <Link href="/menu" className="font-sans text-sm text-charcoal/60 hover:text-folk-red transition-colors underline-offset-4 hover:underline shrink-0">
              See all dishes →
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
            <DishCard
              image="/assets/cafe/vegan-chilli-hash.png"
              tag="House Favourite"
              name="Vegan Chilli Hash"
              description="A plant-based brunch favourite with sweet potato, mushrooms, kale, roasted cauliflower, chickpea hummus, pomegranate, and dukkha."
              price="$22.90"
              delay={0}
            />
            <DishCard
              image="/assets/cafe/greens-grains-bowl.png"
              tag="Vegan"
              name="Greens & Grains Bowl"
              description="A healthy brunch bowl of mograbieh, super seeds, kale, sautéed greens, cherry tomatoes, Danish feta, asparagus, and two poached eggs."
              price="$21.90"
              delay={0.12}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: COURTYARD ────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[580px] overflow-hidden">
          <Image
            src="/assets/cafe/exterior-golden-hour.png"
            alt="Neighbours Café golden hour exterior"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-linen" />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-10 md:p-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-3">42 Chapel St, St Kilda East</p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cobalt leading-tight">A Courtyard Worth Staying In.</h2>
          </motion.div>
        </div>

        <div className="bg-linen py-10 px-6 md:px-16">
          <p className="font-sans text-base text-charcoal/75 leading-relaxed max-w-xl">
            Big enough to spread out. Small enough to feel like yours. Yellow umbrellas, open sky, and dogs welcome at every outdoor table for brunch with outdoor seating in St Kilda East.
          </p>
        </div>
      </section>

      {/* ── SECTION 5: ART AS UI ─────────────────────────────────────────────
          The graffiti here IS the section. It is the CSS background of the
          entire panel — not a photo sitting in a container. The cobalt angle
          is burned in via ::before and the amber seam is a CSS gradient.
          The polaroid-style overlays float ON TOP of the mural background.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative h-[560px] overflow-hidden grain-overlay"
        style={{
          backgroundImage: "url('/assets/cafe/Graffiti 3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Angled cobalt wash — bleeds out of the mural, not over a photo */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(108deg, transparent 36%, rgba(28,95,173,0.92) 36%)',
          }}
        />
        {/* Amber seam line at the diagonal break */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(108deg, transparent 35.5%, #E8A020 35.5%, #E8A020 36.3%, transparent 36.3%)',
          }}
        />

        {/* Polaroids — raw snapshots pinned to the mural wall */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
          <motion.div
            className="relative bg-white p-2 pb-8 shadow-2xl -rotate-[3deg]"
            style={{ width: '176px' }}
            initial={{ opacity: 0, x: -24, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.06 }}
          >
            <div className="relative h-28 w-full overflow-hidden">
              <Image src="/assets/cafe/interior artwork.jpg" alt="Interior folk art" fill className="object-cover" sizes="160px" />
            </div>
            <p className="font-sans text-[0.55rem] uppercase tracking-wider text-charcoal/50 text-center mt-2">inside</p>
          </motion.div>

          <motion.div
            className="relative bg-white p-2 pb-8 shadow-2xl rotate-[2deg] ml-8"
            style={{ width: '176px' }}
            initial={{ opacity: 0, x: -24, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.06 }}
          >
            <div className="relative h-28 w-full overflow-hidden">
              <Image src="/assets/cafe/COURTYARD.jpeg" alt="Courtyard" fill className="object-cover" sizes="160px" />
            </div>
            <p className="font-sans text-[0.55rem] uppercase tracking-wider text-charcoal/50 text-center mt-2">courtyard</p>
          </motion.div>
        </div>

        {/* Text on the cobalt side */}
        <motion.div
          className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 text-right z-10 max-w-xs md:max-w-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Gallery · Neighbours</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-white leading-tight mb-5">Art on Every Wall</h2>
          <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
            From the street murals out front to the folk art canvases inside — every wall tells a story.
          </p>
          <Link href="/about" className="font-sans text-sm text-amber hover:text-white transition-colors underline underline-offset-4">
            Read our story →
          </Link>
        </motion.div>
      </section>

      {/* ── SECTION 6: DOG WELCOME ──────────────────────────────────────────── */}
      <section className="bg-linen py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative h-96 shadow-amber-lg overflow-hidden group"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/assets/cafe/dog-bowl.png"
              alt="Dog bowl at Neighbours Café"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 bg-jungle text-white font-sans text-[0.65rem] uppercase tracking-widest px-3 py-1">
              Always Welcome
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-xs uppercase tracking-widest text-jungle mb-4">Dog Friendly</p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cobalt mb-6 leading-tight">
              Your Dog Is As<br />Welcome As You Are.
            </h2>
            <p className="font-sans text-base text-charcoal/75 leading-relaxed mb-8">
              We&apos;ve had a dog menu since day one. Fresh water always out. Our Chapel Street courtyard is one of the easiest dog-friendly café stops for St Kilda, Elwood, and Balaclava locals.
            </p>
            <Link
              href="/dog-menu"
              className="font-sans font-semibold text-sm border-2 border-jungle text-jungle px-8 py-3 hover:bg-jungle hover:text-white transition-all hover:scale-105 active:scale-100 inline-block"
            >
              VIEW DOG MENU →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: FIND US STRIP ─────────────────────────────────────────── */}
      {/*
        The exterior mural is used as a CSS background behind this section —
        NOT a photo above or below it. The mural IS the section background.
        Cobalt sits on top via multiply blend so the graffiti bleeds through.
      */}
      <section className="relative border-t-4 border-amber bg-cobalt py-16 px-6 md:px-16 overflow-hidden">
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
              <li>42 Chapel Street</li>
              <li>St Kilda East VIC 3182</li>
              <li>Corner of Chapel & Inkerman</li>
              <li>(03) 90778950</li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Neighbours+Cafe+42+Chapel+Street+St+Kilda+East+VIC+3182+Australia"
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
              <li>Tram 3/3a on Chapel Street</li>
              <li>Inkerman Street corner</li>
              <li>Dog-friendly parking on side streets</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
