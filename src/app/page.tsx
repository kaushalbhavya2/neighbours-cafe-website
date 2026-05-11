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
    <main className="flex flex-col">
      <Nav />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
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

        {/* Always-on layered gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65" />

        {/* Hero content — visible on load */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-xs uppercase tracking-[0.25em] text-amber mb-6"
          >
            42 Chapel St · St Kilda East · Open until 4pm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-bebas text-[5.5rem] md:text-[9rem] text-white uppercase leading-[0.88] tracking-wide mb-8"
          >
            Brunch.<br />Dogs.<br />Chapel St.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-sans text-base md:text-lg text-white/85 mb-10 max-w-sm"
          >
            Brunch until 4pm. Dogs always welcome.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Link
              href="/menu"
              className="font-sans font-semibold text-sm bg-folk-red text-white px-8 py-3 hover:bg-folk-red/85 transition-all hover:scale-105 active:scale-100"
            >
              VIEW MENU
            </Link>
            <Link
              href="/find-us"
              className="font-sans font-semibold text-sm border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-cobalt transition-all hover:scale-105 active:scale-100"
            >
              FIND US
            </Link>
          </motion.div>
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

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-cobalt border-b-4 border-amber py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <StatChip value="4pm" label="Open daily until" />
          <div className="hidden md:block w-px h-10 bg-linen/20" />
          <StatChip value="100%" label="Dogs welcome" />
          <div className="hidden md:block w-px h-10 bg-linen/20" />
          <StatChip value="10+" label="Vegan dishes" />
          <div className="hidden md:block w-px h-10 bg-linen/20" />
          <StatChip value="2013" label="Est. Chapel St" />
        </div>
      </section>

      {/* ── SECTION 2: THE FEELING ──────────────────────────────────────────── */}
      <section className="relative bg-cobalt min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-[55%] hidden md:block">
          <Image
            src="/assets/cafe/interior artwork.jpg"
            alt="Neighbours Café interior folk art"
            fill
            className="object-cover object-left"
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cobalt via-cobalt/50 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 max-w-xl pl-8 md:pl-20 py-20 pr-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">St Kilda East · Open until 4pm</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-white leading-tight mb-6">
            A Café That Feels Like Your Street
          </h2>
          <p className="font-sans text-base text-white/85 leading-relaxed mb-8">
            We&apos;re on Chapel St, but we&apos;re not in a rush. Come for the coffee, stay for the courtyard, bring the dog.
          </p>
          <Link href="/about" className="font-sans text-sm text-amber hover:text-white transition-colors underline underline-offset-4">
            Our story →
          </Link>
        </motion.div>
      </section>

      {/* ── SECTION 3: SIGNATURE DISHES ─────────────────────────────────────── */}
      <section className="bg-linen py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-amber mb-2">On the Menu</p>
              <h2 className="font-bebas text-5xl text-cobalt">House Favourites</h2>
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
              description="Sweet potato, mushrooms, kale, roasted cauliflower, chickpea hummus, pomegranate, dukkha"
              price="$22.90"
              delay={0}
            />
            <DishCard
              image="/assets/cafe/greens-grains-bowl.png"
              tag="Vegan"
              name="Greens & Grains Bowl"
              description="Mograbieh, super seeds, kale, sautéed greens, cherry tomatoes, Danish feta, asparagus, two poached eggs"
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
            Big enough to spread out. Small enough to feel like yours. Yellow umbrellas, open sky, dogs welcome at every table.
          </p>
        </div>
      </section>

      {/* ── SECTION 5: ART AS UI ────────────────────────────────────────────── */}
      <section className="relative h-[560px] overflow-hidden">
        <Image
          src="/assets/cafe/Graffiti 3.jpg"
          alt="Neighbours Café street mural"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Angled cobalt overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(108deg, transparent 38%, rgba(28,95,173,0.93) 38%)' }}
        />
        {/* Amber accent line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(108deg, transparent 37.4%, #E8A020 37.4%, #E8A020 38.1%, transparent 38.1%)' }}
        />

        {/* Polaroid photos over graffiti */}
        <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
          <motion.div
            className="relative w-44 h-32 -rotate-[2deg] shadow-amber-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <Image src="/assets/cafe/interior artwork.jpg" alt="Interior folk art" fill className="object-cover" sizes="176px" />
          </motion.div>
          <motion.div
            className="relative w-44 h-32 rotate-[1.5deg] shadow-amber-lg overflow-hidden ml-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <Image src="/assets/cafe/graffiti.jpg" alt="Graffiti wall" fill className="object-cover" sizes="176px" />
          </motion.div>
        </div>

        {/* Text on cobalt side */}
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
              Your Dog Is As Welcome<br />As You Are.
            </h2>
            <p className="font-sans text-base text-charcoal/75 leading-relaxed mb-8">
              We&apos;ve had a dog menu since day one. Fresh water always out. The courtyard is theirs as much as yours.
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

      <Footer />
    </main>
  )
}
