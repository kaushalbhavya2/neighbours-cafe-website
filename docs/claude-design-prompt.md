NEIGHBOURS CAFÉ — COMPLETE WEBSITE DESIGN SPECIFICATION
Claude Design Prompt | Version 2.0 | May 2026

Paste everything below directly into Claude Design.

---

DESIGN PHILOSOPHY

This is not a minimal café website. Neighbours Café is an art-saturated, dog-welcoming, community-rooted brunch destination on Chapel St, St Kilda East. Every design decision must reflect the physical space: cobalt blue walls covered in folk art canvases, street murals big enough to stop foot traffic, yellow umbrellas over a courtyard full of dogs and people who have nowhere else they need to be.

The website should feel like turning the corner onto Chapel St and seeing that mural for the first time. Bold, warm, alive, slightly unpredictable — but completely intentional.

If any section feels "clean" or "minimal" or "corporate," it is wrong.

---

GLOBAL DESIGN TOKENS

COLOUR PALETTE (hard values, no substitutions):
- Cobalt Blue: #1C5FAD — dominant brand colour, used for full-bleed sections, nav background, headings on linen
- Sky Blue: #4BA3D4 — secondary blue, courtyard fence tone, lighter accents
- Warm Amber: #E8A020 — labels, price text, caption accents, links
- Off-White Linen: #F5F0E8 — page background base, never pure white (#FFFFFF)
- Charcoal: #1A1A1A — body text, footer background
- Folk Art Red: #D94F3D — primary CTA buttons, active states, focus outlines, animation labels
- Jungle Green: #3A7D44 — tags, dog menu accents, secondary buttons
- Muted Gold: #C8923A — price highlights, secondary warm accent

FORBIDDEN: cool greys, gradients, pure white backgrounds, corporate blues, any colour not in this palette.

TYPOGRAPHY:

Display / Hero Headlines:
- Font: Bebas Neue (fallback: Black Han Sans, Impact, sans-serif)
- Weight: 400 (Bebas is already heavy)
- Case: ALWAYS uppercase
- Hero size: 7rem desktop / 3.5rem mobile
- H2 size: 3.5rem desktop
- Letter spacing: 0.02em

Subheadings / Pull Quotes:
- Font: DM Serif Display
- Style: Italic where emotionally appropriate
- H3 size: 1.75rem
- Colour: cobalt or linen depending on background

Body Copy:
- Font: Inter
- Size: 1rem
- Line height: 1.75
- Colour: charcoal on linen, white or white 85% on cobalt

Labels / Captions / Tags:
- Font: Inter
- Size: 0.8rem
- Case: UPPERCASE
- Letter spacing: 0.08em
- Colour: amber (#E8A020) unless otherwise specified

VISUAL LANGUAGE — MANDATORY DESIGN PATTERNS:

1. Image framing: Images presented as slightly rotated, pinned canvases. Not perfectly square. Rotation values specified per section.
2. Colour blocking: Full-bleed cobalt blue sections alternate with linen sections. No gradients between them. Hard edges.
3. Section dividers: Loose, hand-painted-feeling borders where dividers exist. Not geometric ruler lines. Organic, brushstroke-inspired.
4. Backgrounds: Off-white linen #F5F0E8 with very subtle paper texture — never flat white.
5. Shadows: Warm amber-tinted drop shadows (not neutral grey box-shadows) on rotated cards and image elements.
6. Overlapping elements: Images or graphic elements that bleed into adjacent sections, creating depth.
7. Animation labels: Each animated section gets a top-right corner label — Inter Mono 0.75rem, folk-art-red #D94F3D text, semi-transparent charcoal background, 4px border-radius. Content: the animation library name in brackets e.g. [Framer Motion useScroll + useTransform]

ACCESSIBILITY (non-negotiable):
- focus-visible on ALL interactive elements: 2px solid #D94F3D, 2px offset
- Minimum tap target: 44px x 44px
- prefers-reduced-motion: render final visible states, zero transitions, zero parallax
- All menu content: HTML text only, never image-based. SEO critical.
- Zero lorem ipsum. All copy is real and specified below.

---

PAGE 1: HOME PAGE

Render at: 1280px desktop AND 390px mobile (show both)

= = = = = = = = = = = = = = = =
NAV
= = = = = = = = = = = = = = = =

Behaviour: Hidden on initial page load. Triggers into view after hero section scrolls past viewport. Sticky, stays fixed at top thereafter.

Visual:
- Height: 64px
- Background: #1C5FAD (cobalt blue) with backdrop-filter blur(12px)
- Left side: "Neighbours" in Bebas Neue, 1.75rem, linen #F5F0E8
- Right side: four links — "Menu" · "Dog Menu" · "Find Us" · "About" — Inter 0.9rem, linen #F5F0E8
- Link hover and active state: folk-art-red #D94F3D underline, 2px, offset 3px below baseline
- Nav slides down: Framer Motion y from -64px to 0, opacity 0 to 1, spring easing

Mobile nav (390px): Hamburger icon right side, linen. Tap opens full-screen cobalt overlay with links stacked vertically, Bebas Neue 3rem, centred, with folk-art-red active underline.

Animation label (top-right of nav component): [Framer Motion scroll trigger]

= = = = = = = = = = = = = = = =
SECTION 1 — HERO
= = = = = = = = = = = = = = = =

Height: 100vh (full viewport)
Image: public/assets/cafe/Hero courtyard .PNG
Image behaviour: parallax scale — starts at scale(1.12), slowly returns to scale(1.0) as user scrolls. Image fills full frame, object-fit cover.

Animation label (top-right): [Framer Motion useScroll + useTransform] [Lenis]

THREE SCROLL-DRIVEN STATES — design all three visible in sequence (show as annotated comp or stacked states):

STATE A — On page load, 0% scroll:
- Image at scale(1.12), full frame
- NO text
- NO overlay
- NO UI chrome visible except the hero image

STATE B — Approximately 35% scroll progress:
- Cobalt blue overlay appears at 0.2 opacity over the image
- Headline begins fading in, positioned 20px below its final resting position, mid-fade
- Headline font: DM Serif Display italic
- Headline text: "Your courtyard, whenever you need it."
- Colour: white
- Size: 3rem desktop / 1.75rem mobile
- Centred horizontally, vertically centred in viewport

STATE C — Approximately 70% scroll progress:
- Cobalt blue overlay at 0.4 opacity
- Main headline fully in: Bebas Neue 7rem desktop / 3.5rem mobile, white, uppercase, letter-spacing 0.02em: "BRUNCH. DOGS. CHAPEL ST."
- Subheadline below: Inter 1.1rem white 90%: "Brunch until 4pm. Dogs always welcome. 42 Chapel St, St Kilda East."
- Two CTA buttons below subheadline, centred, 16px gap between:
  Button 1 — filled, background #D94F3D folk art red, white text Inter 0.9rem semibold uppercase: "VIEW MENU" — border-radius 2px, padding 14px 28px
  Button 2 — outlined, white border 2px, white text Inter 0.9rem semibold uppercase: "FIND US" — same sizing as Button 1

Mobile (390px) STATE C: Headline 3.5rem Bebas Neue. Subheadline 0.9rem. Buttons stack vertically, full width minus 32px margin.

= = = = = = = = = = = = = = = =
SECTION 2 — THE FEELING
= = = = = = = = = = = = = = = =

Background: Cobalt blue #1C5FAD, full-bleed edge to edge
Height: Auto, minimum 520px desktop

Layout: Two-zone composition
- Left zone: Text content, centred in a column, max-width 600px, vertically centred, padding 80px left on desktop
- Right zone: Full-height image of interior artwork wall bleeds off the right edge of the viewport. Shows approximately 60% of the image, cropped. No border, no frame, just the edge of this vibrant wall of folk art canvases bleeding in from the right.

Image: public/assets/cafe/interior artwork.jpg — cropped right-bleed, full section height, object-position left centre.

Text content (left zone, all white):
- Label: Inter 0.8rem uppercase letter-spacing 0.08em, amber #E8A020: "ST KILDA EAST · OPEN UNTIL 4PM"
- 12px gap
- H2: Bebas Neue 3.5rem white: "A CAFÉ THAT FEELS LIKE YOUR STREET"
- 24px gap
- Body: Inter 1rem white 90%, line-height 1.75, max-width 520px: "We're on Chapel St, but we're not in a rush. Come for the coffee, stay for the courtyard, bring the dog."

Animation label (top-right): [Framer Motion whileInView]
Entry animation: opacity 0 to 1, y 24px to 0, duration 700ms, easing ease-out.

Mobile: Text column full width, padding 32px. Right-bleed image becomes a full-width image below the text, height 280px, object-fit cover.

= = = = = = = = = = = = = = = =
SECTION 3 — SIGNATURE DISHES
= = = = = = = = = = = = = = = =

Background: Off-white linen #F5F0E8
Padding: 96px top and bottom desktop / 64px mobile

Section label above content, centred:
- Inter 0.8rem uppercase amber #E8A020 letter-spacing 0.08em: "ON THE MENU"
- 8px below label: thin hand-drawn-style divider line, 80px wide, cobalt blue, centred (brushstroke texture, not a perfect geometric rule)

Desktop layout: Two cards side by side, centred, gap 48px, cards max-width 520px each.
Mobile layout: Embla Carousel, one card visible at a time, peek of second card (20%) at right edge. Dot indicators below in cobalt.

CARD DESIGN — Both cards share this structure:
- Background: white with very slight warm tint
- Border-radius: 4px
- Warm amber-tinted drop shadow: 0 8px 32px rgba(232, 160, 32, 0.18)
- Slight rotation applied (see per-card specs)
- Image at top: 4:3 ratio, full card width, object-fit cover, border-radius 4px 4px 0 0

CARD 1:
- Rotation: -1.5deg (tilted slightly counterclockwise — pinned canvas effect)
- Image: public/assets/cafe/vegan-chilli-hash.png
- Tag below image, left-aligned: jungle green #3A7D44 background, white text Inter 0.7rem uppercase letter-spacing 0.1em: "HOUSE FAVOURITE" — border-radius 2px, padding 4px 10px
- H3: DM Serif Display 1.75rem charcoal: "Vegan Chilli Hash"
- Body: Inter 0.9rem charcoal 80% line-height 1.7: "Sweet potato, mushrooms, kale, roasted cauliflower, chickpea hummus, pomegranate, dukkha"
- Price: Inter 1rem muted gold #C8923A semibold: "$22.90"
- Link: Inter 0.85rem folk-art-red #D94F3D, no underline default, underline on hover: "Full menu →"
- Card padding (below image): 24px

CARD 2:
- Rotation: +1deg (tilted slightly clockwise)
- Image: public/assets/cafe/greens-grains-bowl.png
- Tag: jungle green background, white text: "VEGAN"
- H3: DM Serif Display 1.75rem: "Greens & Grains Bowl"
- Body: Inter 0.9rem charcoal 80%: "Mograbieh, super seeds, kale, sautéed greens, cherry tomatoes, Danish feta, asparagus, two poached eggs"
- Price: Inter 1rem muted gold: "$21.90"
- Link: folk-art-red: "Full menu →"

Below the cards, centred, margin-top 48px:
- CTA button: background #D94F3D, white text Bebas Neue 1.1rem uppercase letter-spacing 0.05em: "SEE THE FULL MENU" — padding 16px 36px, border-radius 2px

Animation label (top-right): [Framer Motion whileInView] [Embla Carousel mobile]
Entry: Cards stagger in — y 32px to 0, opacity 0 to 1, 700ms duration, 120ms stagger between Card 1 and Card 2.

= = = = = = = = = = = = = = = =
SECTION 4 — THE COURTYARD
= = = = = = = = = = = = = = = =

TWO ZONES, stacked:

ZONE A — Full-bleed parallax image:
- Image: public/assets/cafe/COURTYARD.jpeg
- Height: 600px
- Object-fit: cover
- Parallax: image moves at 0.6x scroll speed relative to section (GSAP ScrollTrigger scrub). On scroll down, image translates upward slower than the page — classic parallax depth.
- NO overlay. NO text over the image. Let the yellow umbrellas and open courtyard breathe.

ZONE B — Text below the image:
- Background: linen #F5F0E8
- Padding: 64px left on desktop (left-aligned content), 80px top/bottom
- Max content width: 600px

Content (left-aligned):
- Label: Inter 0.8rem uppercase amber letter-spacing 0.08em: "42 CHAPEL ST, ST KILDA EAST"
- 8px gap
- H2: Bebas Neue 3.5rem cobalt #1C5FAD: "A COURTYARD WORTH STAYING IN."
- 20px gap
- Body: Inter 1rem charcoal line-height 1.75, max-width 480px: "Big enough to spread out. Small enough to feel like yours. Yellow umbrellas, open sky, dogs welcome at every table."

Animation label (top-right of full section): [GSAP ScrollTrigger]

Mobile: Parallax image height 320px (reduced). Text below, full-width padding 32px.

= = = = = = = = = = = = = = = =
SECTION 5 — THE ART
= = = = = = = = = = = = = = = =

Layout: 50/50 horizontal split, full-bleed section, no padding on outer edges.

LEFT HALF — Image collage:
Background: charcoal #1A1A1A (to frame the art)
Content: Three images stacked vertically with slight overlaps and offsets — feels like photographs tacked to a wall:
- Image 1: public/assets/cafe/interior artwork.jpg — full width of left panel, height 40% of section, rotation -1deg, slight left offset
- Image 2: public/assets/cafe/graffiti.jpg — full width, height 32% of section, rotation +1.5deg, slightly overlapping Image 1 bottom edge
- Image 3: public/assets/cafe/Graffiti 3.jpg — full width, height 32% of section, rotation -0.5deg, overlapping Image 2 bottom edge

Each image has a warm amber-tinted shadow to create the canvas-pinned depth effect.

RIGHT HALF — Cobalt blue panel:
Background: #1C5FAD
Padding: 80px desktop, vertically centred content
Content:
- Label: Inter 0.8rem uppercase amber letter-spacing 0.08em: "GALLERY NEIGHBOURS"
- 16px gap
- H2: Bebas Neue 3.5rem white: "ART ON EVERY WALL"
- 24px gap
- Body: Inter 1rem white 85% line-height 1.75: "Every wall tells a story. From the street murals out front to the folk art canvases inside — this place is as much a gallery as it is a café."
- NO button in this section. The art is the call to action.

Animation label (top-right): [Framer Motion whileInView]
Entry: Left half slides in from x -40px to 0, right half from x +40px to 0. Both opacity 0 to 1. Duration 700ms, ease-out.

Mobile (390px): Stack vertically. Images collage full-width, stacked with overlaps. Text panel below, full-width, cobalt, padding 48px 32px.

= = = = = = = = = = = = = = = =
SECTION 6 — DOG WELCOME
= = = = = = = = = = = = = = = =

Background: Linen #F5F0E8
Padding: 96px top/bottom

Desktop layout: Two columns, equal width, gap 64px, vertically centred.

LEFT COLUMN — Image:
- Image: public/assets/cafe/dog-bowl.png
- Aspect ratio: 4:3
- Rotation: -2deg
- Warm amber drop shadow: 0 12px 40px rgba(232, 160, 32, 0.22)
- Border-radius: 4px

RIGHT COLUMN — Text:
- Label: Inter 0.8rem uppercase jungle green #3A7D44 letter-spacing 0.08em: "DOG FRIENDLY"
- 12px gap
- H2: Bebas Neue 3.5rem cobalt #1C5FAD: "YOUR DOG IS AS WELCOME AS YOU ARE."
- 20px gap
- Body: Inter 1rem charcoal line-height 1.75: "We've had a dog menu since day one. Fresh water always out. The courtyard is theirs as much as yours."
- 32px gap
- Button: outlined, border 2px solid jungle green #3A7D44, text jungle green #3A7D44 Inter 0.9rem semibold uppercase: "VIEW DOG MENU →" — padding 14px 28px, border-radius 2px. Hover: fill jungle green background, white text.

Animation label (top-right): [Framer Motion whileInView]
Entry: Left image slides from x -32px, right text from x +32px. Opacity 0 to 1, 600ms.

Mobile: Stack vertically. Image full-width, then text below, padding 32px.

= = = = = = = = = = = = = = = =
SECTION 7 — FIND US STRIP
= = = = = = = = = = = = = = = =

Background: Cobalt blue #1C5FAD
Padding: 64px top/bottom
Border-top: 4px solid amber #E8A020 (hard amber rule marks the transition from the linen section above)

Layout: Three equal columns, white text throughout, 48px column gap.

COLUMN 1 — Hours:
- Label: Inter 0.8rem uppercase amber: "HOURS"
- 12px gap
- Body Inter 0.95rem white line-height 2.0:
  "Mon: 7:30am – 4pm"
  "Tue – Wed: 6:30am – 4pm"
  "Thu – Sun: 7:30am – 4pm"

COLUMN 2 — Location:
- Label: Inter 0.8rem uppercase amber: "FIND US"
- 12px gap
- Body Inter 0.95rem white line-height 2.0:
  "42 Chapel St"
  "St Kilda East VIC 3183"
  "(03) 90778950"
- Amber link below: Inter 0.85rem amber: "Get directions →" — underline on hover

COLUMN 3 — Getting Here:
- Label: Inter 0.8rem uppercase amber: "GETTING HERE"
- 12px gap
- Body Inter 0.95rem white line-height 2.0:
  "Tram 3 / 3a on Chapel St"
  "2 min walk from tram stop"
  "Dog-friendly parking on side streets"

Mobile: Stack all three columns vertically, full width, 48px vertical gap between each. Left-aligned.

= = = = = = = = = = = = = = = =
FOOTER
= = = = = = = = = = = = = = = =

Background: Charcoal #1A1A1A
Padding: 56px top / 40px bottom

Layout: Three columns on desktop, stacked on mobile.

LEFT COLUMN:
- "Neighbours" in Bebas Neue 2rem linen #F5F0E8
- Below: "Café · St Kilda East" — Inter 0.8rem uppercase amber #E8A020 letter-spacing 0.08em

CENTRE COLUMN:
- Links stacked vertically: Menu · Dog Menu · Find Us · About
- Inter 0.9rem linen 70%
- Hover: full opacity + amber underline
- Vertical gap: 12px between each

RIGHT COLUMN:
- "@neighbourscafe" — Inter 0.9rem linen, with Instagram icon (linen, 18px) inline left
- Below: "(03) 90778950" — Inter 0.9rem linen 70%

Bottom of footer (full width):
- 1px rule: linen 15% opacity
- Below rule: copyright line Inter 0.75rem linen 40%: "© 2026 Neighbours Café · 42 Chapel St, St Kilda East · All rights reserved."

---

PAGE 2: MENU PAGE (Desktop 1280px only)

= = = = = = = = = = = = = = = =
HERO BAND
= = = = = = = = = = = = = = = =

Image: public/assets/cafe/MURAL FOOD.jpeg
Height: 400px
Object-fit: cover, object-position: centre

Overlay: Cobalt blue #1C5FAD at 0.55 opacity, full image area.

Text (centred, vertically centred within the 400px):
- H1: Bebas Neue 5rem white uppercase letter-spacing 0.02em: "THE MENU"
- 16px below:
- Subheadline: DM Serif Display italic 1.3rem linen #F5F0E8: "Everything made fresh. Most of it plant-based. All of it worth staying for."

= = = = = = = = = = = = = = = =
TAB NAVIGATION — shadcn/ui Tabs
= = = = = = = = = = = = = = = =

Below hero, sticky within page scroll.
Background: linen #F5F0E8
Border-bottom: 2px solid cobalt #1C5FAD at 20% opacity

Three tabs: "BREAKFAST" · "LUNCH" · "DRINKS"
Font: Bebas Neue 1.4rem charcoal
Active tab: folk-art-red #D94F3D bottom border 3px, red text
Inactive tab hover: cobalt #1C5FAD text

Tab content area background: linen #F5F0E8
Content padding: 64px left/right, 48px top/bottom

Animation label on tab component: [shadcn/ui Tabs]

= = = = = = = = = = = = = = = =
MENU ITEM ROW DESIGN — ALL SECTIONS
= = = = = = = = = = = = = = = =

Each menu item:
- Full content width row
- Flex layout: left side (name + description) flex-grow, right side (price) flex-shrink-0
- Item name: Inter 1rem semibold charcoal #1A1A1A
- Description: Inter 0.875rem charcoal 65%, line-height 1.6, margin-top 4px
- Price: Inter 1rem muted gold #C8923A semibold, right-aligned, min-width 60px
- Bottom border: 1px solid #1A1A1A at 10% opacity
- Padding: 16px 0 per row

All menu text is HTML text. Never images. Selectable, copyable, indexable.

= = = = = = = = = = = = = = = =
BREAKFAST TAB (default active)
= = = = = = = = = = = = = = = =

Section header: Bebas Neue 2rem cobalt: "BREAKFAST"
Label below: Inter 0.8rem uppercase amber: "SERVED DAILY UNTIL 4PM"

Items:
1. Smashed Avocado · $19.50
2. Pulled Pork Addict · $21.50
3. AA Bowl · $19.50
4. Vegan Smash · $19.50
5. Eggs on Toast · $13.50
6. Thyme Mushrooms and Cauliflower · $22.50
7. Bush Lamb and Sweet Potato Hash · $21.50
8. Shakshuka · $21.50
9. Hungry Neighbours · $24.50
10. Greens & Grains · $21.90
11. Vegan Brekkie · $22.50
12. Vegan Burritos · $17.50
13. Vegan Chilli Hash · $22.90
14. Breakfast Burrito · $17.00

Items 1, 10, 13 get a jungle green "POPULAR" tag inline with name.

= = = = = = = = = = = = = = = =
LUNCH TAB
= = = = = = = = = = = = = = = =

Section header: Bebas Neue 2rem cobalt: "LUNCH"
Label: Inter 0.8rem uppercase amber: "SERVED FROM 11AM"

Items:
1. Wagyu Beef Burger · $18.90
2. Spicy Chicken Sandwich · $19.50
3. Superfood Salad · $18.50
4. Salt & Pepper Calamari Salad · $21.50
5. Steak Fries · $9.50
6. Nuggets & Fries · $10.90

= = = = = = = = = = = = = = = =
DRINKS TAB
= = = = = = = = = = = = = = = =

Section header: Bebas Neue 2rem cobalt: "DRINKS"

JUICE
- Freshly Squeezed Juice · $9.00

SMOOTHIES
- Vegan Peanut Butter Smoothie · $10.50
- Green AA Smoothie · $10.00
- AA Smoothie · $4.50

SOFT DRINKS
- Coke / Fanta / Sprite / Water · $3.80

COFFEE & HOT DRINKS
- House Blend / Single Origin / Decaf · $4.00
- Hot Chocolate · $4.50
- Mayan Hot Chocolate · $5.00
- Chai Latte · $5.50
- Dirty Chai · $6.00
- Matcha Latte · $4.00
- Golden Latte · $4.00
- Tea · $4.50
- Hot Apple Chai · $5.50
- Hot Apple · $5.00

COLD DRINKS
- Cold Drip · $4.00
- Iced Latte · $4.50
- Iced Coffee · $8.00
- Milkshakes · $8.50

---

PAGE 3: DOG MENU PAGE (Desktop 1280px only)

= = = = = = = = = = = = = = = =
HERO BAND
= = = = = = = = = = = = = = = =

Background: Cobalt blue #1C5FAD, full-bleed, height 320px.
No image. Pure colour.
Vertically and horizontally centred text:
- H1: Bebas Neue 5rem white uppercase: "THE DOG MENU"
- 16px below:
- Tagline: DM Serif Display italic 1.3rem linen: "The finest and freshest produce, for your cultured canine."

= = = = = = = = = = = = = = = =
DOG BOWL IMAGE
= = = = = = = = = = = = = = = =

Image: public/assets/cafe/dog-bowl.png
Width: 100% of content area
Height: 400px
Object-fit: cover
Rotation: -1deg
Warm amber shadow below the image edge.

= = = = = = = = = = = = = = = =
NOTICE BLOCK
= = = = = = = = = = = = = = = =

Background: linen #F5F0E8
Max-width: 760px, centred, margin 48px auto.

Card: white background, border-radius 4px, left border 3px solid jungle green #3A7D44, padding 24px 32px, warm shadow.

Text: Inter 0.95rem charcoal line-height 1.75:
"Fresh water is always available. Our courtyard is fully fenced. All ingredients are vet-checked and dog-safe."

= = = = = = = = = = = = = = = =
DOG MENU ITEMS
= = = = = = = = = = = = = = = =

Background: linen #F5F0E8
Content max-width: 760px, centred.
Jungle green as the dominant accent throughout this page.

Section headers: Bebas Neue 2.5rem jungle green, uppercase.
Item name: Inter 1rem semibold charcoal.
Flavour text: DM Serif Display italic 0.9rem charcoal 70%.
Price: Inter 1rem muted gold, right-aligned.

STARTERS

Peking Duck Jerky · $2.95
"Duck a l'jerke. An indulgent chew, low in fat, high in protein."

Shark Cartilage · $2.95
"Gourmet paw-sized portions from South Australian fisheries. Omega 3 and glucosamine for joint health."

MAIN PLATES

Lamb Shank Bone · $4.95
"Large cut, oven baked to pawfection. Calcium and phosphorus for healthy bones."

Beef Bully Stick · $5.95
"High-protein beef muscle. Great for clean teeth and strong muscles. Highly wag-able."

Outback Kangaroo Ribs · $7.95
"100% free-range. Rich in calcium and phosphorus. Great for dental hygiene."

DESSERT

Chicken Necks (x2) · $2.95
"Locally sourced, perfectly dehydrated. Crunchy texture with a drool-inducing aroma."

Footer attribution: "Dog menu supplied by k9katering.com"

---

PAGE 4: FIND US PAGE (Desktop 1280px only)

= = = = = = = = = = = = = = = =
HERO HEADER
= = = = = = = = = = = = = = = =

Background: linen #F5F0E8
Padding: 80px top, 48px bottom, left-aligned.
H1: Bebas Neue 5rem cobalt uppercase: "FIND US"
Below: thin amber brushstroke-style rule, 120px wide.

= = = = = = = = = = = = = = = =
MAP
= = = = = = = = = = = = = = = =

Full-bleed, height 500px.
Map placeholder: cobalt blue background with centred pin icon and white text:
- Pin icon: 48px, white
- Text: Inter 1rem white: "42 Chapel St, St Kilda East VIC 3183"
- Below: amber link "Open in Google Maps →"

Border above map: 3px solid amber #E8A020.

= = = = = = = = = = = = = = = =
INFO STRIP
= = = = = = = = = = = = = = = =

Identical to Home page Section 7 — three equal columns, cobalt background, white text, amber labels.

Hours · Address + phone · Getting Here

= = = = = = = = = = = = = = = =
EXTERIOR IMAGE
= = = = = = = = = = = = = = = =

Image: public/assets/cafe/Exterior artwork.jpg
Full-bleed, height 400px, object-fit cover.
NO overlay. NO text over the image.

Caption below, linen background, centred, padding 32px top/bottom:
Inter 0.9rem charcoal 70% italic: "42 Chapel St, St Kilda East — that's the mural building on the corner."

---

PAGE 5: ABOUT PAGE (Desktop 1280px only)

= = = = = = = = = = = = = = = =
PULL QUOTE
= = = = = = = = = = = = = = = =

Background: linen #F5F0E8
Padding: 96px top/bottom
Max-width: 680px centred.

Pull quote: DM Serif Display italic 2.5rem cobalt #1C5FAD, centred, line-height 1.4:
"We just wanted a place where the coffee was good and the dog could come too."

Decorative element above and below: two cobalt horizontal lines, 2px, 60px wide, centred.

= = = = = = = = = = = = = = = =
OWNER STORY TEXT
= = = = = = = = = = = = = = = =

Max-width: 680px centred. Inter 1rem charcoal line-height 1.75.

Paragraph 1: "Neighbours started as a simple idea — a place on Chapel St where you didn't have to rush, where the food was honest and the coffee was properly made. We wanted somewhere that felt like the neighbourhood: welcoming, a little rough around the edges, genuinely warm. The courtyard came first, really. That open sky and those yellow umbrellas set the tone for everything."

Paragraph 2: "The art came naturally. St Kilda East has always been a place where creativity lives on the walls, and we wanted that inside too. Every canvas is from a real artist. Every mural was painted by someone who left something of themselves here. If your dog falls asleep under the table and you end up staying two hours longer than you planned — that's exactly what we had in mind."

= = = = = = = = = = = = = = = =
FULL-BLEED COURTYARD IMAGE
= = = = = = = = = = = = = = = =

Image: public/assets/cafe/Hero courtyard .PNG
Full-bleed, height 560px, object-fit cover.
NO overlay. NO text.

= = = = = = = = = = = = = = = =
DOUBLE IMAGE — ART WALLS
= = = = = = = = = = = = = = = =

Background: charcoal #1A1A1A
Two images side by side, equal width, full bleed, no gap:
- Left: public/assets/cafe/interior artwork.jpg — height 400px, object-fit cover, rotation +1deg
- Right: public/assets/cafe/graffiti 2.jpg — height 400px, object-fit cover, rotation -1deg

Warm amber drop shadow on inner edges.

= = = = = = = = = = = = = = = =
CLOSING CAPTION
= = = = = = = = = = = = = = = =

Background: linen #F5F0E8
Padding: 48px top/bottom, centred.
Inter 0.8rem uppercase amber letter-spacing 0.08em: "42 CHAPEL ST, ST KILDA EAST · OPEN UNTIL 4PM"

---

GLOBAL ANIMATION REFERENCE — LABEL EVERY SECTION

[Framer Motion useScroll + useTransform] — Hero scroll states
[Lenis] — Global smooth scroll (label once on hero)
[Framer Motion whileInView] — The Feeling, Signature Dishes, The Art, Dog Welcome
[GSAP ScrollTrigger] — Courtyard parallax
[Embla Carousel] — Signature Dishes mobile carousel
[shadcn/ui Tabs] — Menu page tab navigation

Label format: Inter Mono 0.75rem, folk-art-red #D94F3D text on semi-transparent charcoal background (#1A1A1A at 75% opacity), border-radius 4px, padding 4px 8px, absolute top-right of each section.

prefers-reduced-motion: render all sections in final visible state. No parallax, no fade-ins, no transforms.

---

ASSET FILE REFERENCE (public/assets/cafe/)

- Hero courtyard .PNG (space in filename)
- interior artwork.jpg
- graffiti.jpg
- Graffiti 3.jpg
- graffiti 2.jpg
- Exterior artwork.jpg
- COURTYARD.jpeg
- MURAL FOOD.jpeg
- TABEL SHOT.jpeg
- vegan-chilli-hash.png
- greens-grains-bowl.png
- dog-bowl.png

---

FINAL DESIGN CHECKLIST

- Every section uses only the specified colour palette. No neutrals, no gradients.
- All Bebas Neue headlines are uppercase without exception.
- Every image on linen background has a slight rotation and warm amber shadow.
- The hero has three visually distinct scroll states rendered.
- Menu content is HTML text only — never image-based.
- Animation labels visible on every animated section.
- Folk-art-red focus outlines on all interactive elements.
- All prices match exactly. No rounding.
- Dog menu flavour text in DM Serif Display italic.
- The site feels eclectic, art-forward, warm and alive. If it feels minimal or corporate, revise until it does not.
