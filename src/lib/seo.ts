import { company } from "@/data/company";

export const siteConfig = {
  name: `${company.brand} — ${company.name}`,
  shortName: company.brand,
  description:
    "Jagdish Tools (J555) — hand tools manufacturer in Rajkot, India since 1972. Hammers, chisels, blades, screwdrivers, marking gauges, tile cutters, and power tool accessories.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://j555tools.com",
  locale: "en_IN",
};

export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.brand,
    url: siteConfig.url,
    logo: absoluteUrl("/images/brand/logo.png"),
    foundingDate: String(company.established),
    email: company.email,
    telephone: company.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      postalCode: company.address.pincode,
      addressRegion: company.address.state,
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phones[0],
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  images: string[];
  categoryName: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => absoluteUrl(img)),
    brand: {
      "@type": "Brand",
      name: company.brand,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.name,
    },
    category: product.categoryName,
    url: product.url,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
