import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Vegan-Friendly Brunch Menu St Kilda East',
  description:
    'Vegan Chilli Hash, Greens & Grains Bowl, coffee, smoothies and more. Explore the vegan-friendly brunch menu at Neighbours Café on Chapel Street.',
  alternates: {
    canonical: absoluteUrl('/menu'),
  },
  openGraph: {
    title: 'Vegan-Friendly Brunch Menu St Kilda East | Neighbours Café',
    description:
      'Plant-based brunch, healthy bowls, coffee and Chapel Street cafe favourites at Neighbours Café.',
    url: absoluteUrl('/menu'),
    images: [
      {
        url: absoluteUrl('/assets/cafe/vegan-chilli-hash.png'),
        width: 1200,
        height: 630,
        alt: 'Vegan Chilli Hash at Neighbours Café',
      },
    ],
  },
}

// ─── MenuItem ────────────────────────────────────────────────────────────────
function MenuItem({
  name,
  description,
  price,
  popular,
}: {
  name: string
  description?: string
  price: string
  popular?: boolean
}) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-charcoal/10">
      <div className="flex-1 pr-8">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-sans font-semibold text-charcoal">{name}</span>
          {popular && (
            <span className="text-[0.65rem] uppercase tracking-wider bg-jungle text-white px-2 py-0.5 rounded-sm">
              Popular
            </span>
          )}
        </div>
        {description && (
          <p className="font-sans text-sm text-charcoal/65 mt-1 leading-relaxed">{description}</p>
        )}
      </div>
      <span className="font-sans font-semibold text-gold shrink-0">{price}</span>
    </div>
  )
}

// ─── Section heading within tabs ─────────────────────────────────────────────
function MenuSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h3 className="font-bebas text-2xl text-cobalt mb-2 border-b-2 border-amber pb-1">{title}</h3>
      {children}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  return (
    <main className="flex flex-col min-h-screen bg-linen">
      <Nav />

      {/* Back button */}
      <div className="bg-linen pt-20 pb-2 px-6 md:px-16">
        <BackButton />
      </div>

      {/* ── HERO: MURAL FOOD image IS the header — with graffiti texture layered
              in as a CSS background blend, not a second image in a box. ── */}
      <section
        className="relative h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('/assets/cafe/MURAL FOOD.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Graffiti texture bled over the food photo via multiply blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/cafe/Graffiti 3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: 0.18,
          }}
        />
        {/* Cobalt overlay for legibility */}
        <div className="absolute inset-0 bg-cobalt/60" />
        {/* Amber bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Brunch until 4pm</p>
          <h1 className="font-bebas text-7xl md:text-8xl text-white tracking-wide mb-3">The Menu</h1>
          <p className="font-serif italic text-linen/90 text-xl max-w-lg leading-relaxed">
            Vegan-friendly brunch, healthy bowls, proper coffee, and Chapel Street favourites made fresh until 4pm.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="flex-1 px-4 md:px-16 py-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-amber mb-4">Vegan-friendly brunch in St Kilda East</p>
          <p className="font-sans text-base leading-relaxed text-charcoal/75">
            Our Chapel Street menu is built for mixed tables: plant-based brunch, healthy breakfast plates, burgers, salads, smoothies, and coffee for St Kilda East locals, Balaclava neighbours, and anyone heading through Chapel Street.
          </p>
        </div>
        <Tabs defaultValue="breakfast" className="w-full max-w-4xl mx-auto">
          {/* Tab list */}
          <TabsList className="mb-10 flex w-full gap-0 bg-transparent h-auto p-0 rounded-none border-b-2 border-charcoal/10">
            {(['breakfast', 'lunch', 'drinks'] as const).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 font-bebas text-2xl tracking-wider rounded-none border-b-4 border-transparent data-active:border-folk-red data-active:text-folk-red text-charcoal/50 hover:text-charcoal hover:border-charcoal/20 transition-all py-4 h-auto"
              >
                {tab === 'breakfast' ? 'Breakfast' : tab === 'lunch' ? 'Lunch' : 'Drinks'}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ── BREAKFAST ─────────────────────────────────────────────────── */}
          <TabsContent value="breakfast" className="bg-linen">
            <MenuItem name="Smashed Avocado" description="Danish fetta, pickle chilli, herbs, radish, pomegranate, dukkha, lime, two poached eggs, multigrain toast" price="$19.50" popular />
            <MenuItem name="Pulled Pork Addict" description="Sourdough toast, two poached eggs, champagne hollandaise, apple-pomegranate emulsion, bacon dust" price="$21.50" />
            <MenuItem name="AA Bowl" description="Nuts and seeds, house-made granola, chia seeds, strawberries, banana" price="$19.50" />
            <MenuItem name="Vegan Smash" description="Pumpkin, quinoa, hummus, broccolini, fried chickpeas, black beans, super seeds, kale, dukkha" price="$19.50" />
            <MenuItem name="Eggs on Toast" price="$13.50" />
            <MenuItem name="Thyme Mushrooms and Cauliflower" description="Halloumi, red onion, cherry tomatoes, kale, super seeds, two poached eggs, multigrain toast" price="$22.50" />
            <MenuItem name="Bush Lamb and Sweet Potato Hash" description="Charred corn, sweet potatoes, carrots, green peas, slow roasted lamb shoulder, pomegranates, pistachio, tahini yoghurt, mint, fried egg" price="$21.50" />
            <MenuItem name="Shakshuka" description="Zucchini, eggplant, crispy lemony kale, feta, dukkha, tahini yoghurt, multigrain toast" price="$21.50" />
            <MenuItem name="Hungry Neighbours" description="Eggs your way, sourdough toast, bacon, spinach, hash browns, mushroom, pork & fennel sausages" price="$24.50" />
            <MenuItem name="Greens & Grains" description="Mograbieh, super seeds, kale, sautéed greens, cherry tomatoes, Danish feta, asparagus, pomegranates, green peas, mint, two poached eggs" price="$21.90" popular />
            <MenuItem name="Vegan Brekkie" description="Tofu scrambled, wilted spinach, roma tomatoes, mushrooms, smashed avo, chilli jam" price="$22.50" />
            <MenuItem name="Vegan Burritos" description="Beans stew, spinach, avocado, sliced tomatoes, fried tofu, sweet potatoes" price="$17.50" />
            <MenuItem name="Vegan Chilli Hash" description="Sweet potato, mushrooms, kale, cherry tomatoes, shallot, green herbs, roasted cauliflower, chickpea hummus, pomegranate, dukkha" price="$22.90" popular />
            <MenuItem name="Breakfast Burrito" description="Avocado, bacon, spinach, spicy beans, tomatoes, scrambled eggs, tomato relish" price="$17.00" />
          </TabsContent>

          {/* ── LUNCH ─────────────────────────────────────────────────────── */}
          <TabsContent value="lunch" className="bg-linen">
            <MenuItem name="Wagyu Beef Burger" description="Sliced roma, crispy iceberg, chilli jam, bacon, caramelised onion, swiss cheese, fried egg" price="$18.90" />
            <MenuItem name="Spicy Chicken Sandwich" description="Asian slaw, tomatoes, avocado, pickle onion, minted yoghurt, chips" price="$19.50" />
            <MenuItem name="Superfood Salad" description="Kale, broccoli, spinach, quinoa, asparagus, wild black rice, cucumber, cherry tomatoes, chilli, pomegranate, feta, balsamic dressing" price="$18.50" />
            <MenuItem name="Salt & Pepper Calamari Salad" description="House-made slaw, cherry tomatoes, cucumbers, mixed herbs, black rice, green olives, chilli, fried shallots, sriracha mayo" price="$21.50" />
            <MenuItem name="Steak Fries" description="With aioli & relish" price="$9.50" />
            <MenuItem name="Nuggets & Fries" description="6 nuggets, beer battered fries, tomato sauce" price="$10.90" />
          </TabsContent>

          {/* ── DRINKS ────────────────────────────────────────────────────── */}
          <TabsContent value="drinks" className="bg-linen">
            <MenuSection title="Juice">
              <MenuItem name="Freshly Squeezed Juice" price="$9.00" />
            </MenuSection>

            <MenuSection title="Smoothies">
              <MenuItem name="Vegan Peanut Butter Smoothie" price="$10.50" />
              <MenuItem name="Green AA Smoothie" price="$10.00" />
              <MenuItem name="AA Smoothie" price="$4.50" />
            </MenuSection>

            <MenuSection title="Soft Drinks">
              <MenuItem name="Coke" price="$3.80" />
              <MenuItem name="Fanta" price="$3.80" />
              <MenuItem name="Sprite" price="$3.80" />
              <MenuItem name="Mount Franklin Water" price="$3.80" />
            </MenuSection>

            <MenuSection title="Coffee & Hot Drinks">
              <MenuItem name="House Blend" price="$4.00" />
              <MenuItem name="Single Origin" price="$4.00" />
              <MenuItem name="Decaf" price="$4.00" />
              <MenuItem name="Hot Chocolate" price="$4.50" />
              <MenuItem name="Mayan Hot Chocolate" price="$5.00" />
              <MenuItem name="Chai Latte" price="$5.50" />
              <MenuItem name="Dirty Chai Latte" price="$6.00" />
              <MenuItem name="Matcha Latte" price="$4.00" />
              <MenuItem name="Golden Latte" price="$4.00" />
              <MenuItem name="Tea" price="$4.50" />
              <MenuItem name="Hot Apple Chai" price="$5.50" />
              <MenuItem name="Hot Apple" price="$5.00" />
            </MenuSection>

            <MenuSection title="Cold Drinks">
              <MenuItem name="Cold Drip" price="$4.00" />
              <MenuItem name="Iced Latte" price="$4.50" />
              <MenuItem name="Iced Coffee" price="$8.00" />
              <MenuItem name="Milkshakes" price="$8.50" />
            </MenuSection>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  )
}
