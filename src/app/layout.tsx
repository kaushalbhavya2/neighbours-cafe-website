import type { Metadata } from "next";
import { Inter, Bebas_Neue, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { absoluteUrl, siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-var",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dog-Friendly Brunch Café St Kilda | Neighbours Café",
    template: "%s | Neighbours Café",
  },
  description:
    "Dog-friendly brunch, vegan eats and courtyard coffee at 42 Chapel St, St Kilda East. Open daily until 4pm.",
  keywords:
    "brunch St Kilda, dog friendly cafe St Kilda, vegan brunch St Kilda, cafe St Kilda East, Chapel Street cafe",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Dog-Friendly Brunch Café St Kilda | Neighbours Café",
    description:
      "Big brunch, good coffee, dogs in the courtyard. Visit Neighbours Café at 42 Chapel St, St Kilda East.",
    type: "website",
    locale: "en_AU",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/assets/cafe/Hero courtyard .PNG"),
        width: 1200,
        height: 630,
        alt: "Neighbours Café dog-friendly courtyard in St Kilda East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog-Friendly Brunch Café St Kilda | Neighbours Café",
    description:
      "Big brunch, good coffee, dogs in the courtyard at 42 Chapel St, St Kilda East.",
    images: [absoluteUrl("/assets/cafe/Hero courtyard .PNG")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${bebasNeue.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
