import type { Metadata } from "next";
import { Inter, Bebas_Neue, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

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
  title: "Neighbours Café | Dog-Friendly Brunch in St Kilda East",
  description:
    "Neighbours Café — dog-friendly brunch café at 42 Chapel St, St Kilda East. Vegan-friendly menu, large outdoor courtyard, great coffee. Open daily until 4pm.",
  keywords:
    "brunch St Kilda, dog friendly café Melbourne, vegan brunch St Kilda East, Neighbours Café Chapel St, dog friendly restaurant Melbourne",
  openGraph: {
    title: "Neighbours Café | Dog-Friendly Brunch in St Kilda East",
    description:
      "Brunch until 4pm. Dogs always welcome. 42 Chapel St, St Kilda East.",
    type: "website",
    locale: "en_AU",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
