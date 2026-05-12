import { absoluteUrl, business } from "@/lib/seo";

export default function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: business.name,
    url: business.url,
    telephone: business.phone,
    image: [
      absoluteUrl("/assets/cafe/Hero courtyard .PNG"),
      absoluteUrl("/assets/cafe/exterior-golden-hour.png"),
      absoluteUrl("/assets/cafe/vegan-chilli-hash.png"),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.locality,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      business.mapQuery,
    )}`,
    servesCuisine: ["Australian", "Brunch", "Coffee", "Vegan", "Vegetarian"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: "07:30",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday"],
        opens: "06:30",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:30",
        closes: "16:00",
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Dog friendly courtyard",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Outdoor seating",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Vegan-friendly menu",
        value: true,
      },
    ],
    sameAs: [business.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

