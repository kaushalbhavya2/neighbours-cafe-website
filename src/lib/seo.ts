export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://neighbourscafe.com.au";

export const business = {
  name: "Neighbours Café",
  url: siteUrl,
  phone: "+61390778950",
  displayPhone: "(03) 90778950",
  streetAddress: "42 Chapel St",
  locality: "St Kilda East",
  region: "VIC",
  postalCode: "3182",
  country: "AU",
  mapQuery:
    "Neighbours Cafe 42 Chapel Street St Kilda East VIC 3182 Australia",
  instagram: "https://instagram.com/neighbourscafe",
};

export const routes = [
  "",
  "/menu",
  "/dog-menu",
  "/find-us",
  "/about",
];

export function absoluteUrl(path = "") {
  return new URL(path, siteUrl).toString();
}

