export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  family: "hand-tools" | "power-tool-accessories";
  featured?: boolean;
  newCategory?: boolean;
};

export const categories: ProductCategory[] = [
  {
    id: "striking-tools",
    slug: "striking-tools",
    name: "Striking Tools",
    shortName: "Hammers",
    description:
      "Machinist hammers engineered for professional striking work, including cross-type and cut-type heads.",
    image: "/images/products/j5-01.jpg",
    family: "hand-tools",
    featured: true,
  },
  {
    id: "chisels",
    slug: "chisels",
    name: "Chisels",
    shortName: "Chisels",
    description:
      "A broad chisel range spanning plain, bevelled, mortice, heavy, Malabar, and wooden-handle variants.",
    image: "/images/products/j5-05.jpg",
    family: "hand-tools",
    featured: true,
  },
  {
    id: "cutting-tools",
    slug: "cutting-tools",
    name: "Cutting Tools",
    shortName: "Blades",
    description:
      "Plain and cut iron blades for dependable cutting performance in workshop and site applications.",
    image: "/images/products/cut_blade.jpg",
    family: "hand-tools",
    featured: true,
  },
  {
    id: "driving-tools",
    slug: "driving-tools",
    name: "Driving Tools",
    shortName: "Screwdrivers",
    description:
      "Screwdrivers available in multiple lengths for everyday fastening and maintenance work.",
    image: "/images/products/j5-25.jpg",
    family: "hand-tools",
    featured: true,
  },
  {
    id: "measuring-marking",
    slug: "measuring-marking",
    name: "Measuring & Marking",
    shortName: "Marking Gauges",
    description:
      "Marking gauges for accurate layout and marking tasks in carpentry and workshop use.",
    image: "/images/products/j5-15.jpg",
    family: "hand-tools",
  },
  {
    id: "tiling-tools",
    slug: "tiling-tools",
    name: "Tiling Tools",
    shortName: "Tile Cutters",
    description:
      "Tile cutters designed for clean scoring and cutting on tiling jobs.",
    image: "/images/products/tc.jpg",
    family: "hand-tools",
  },
  {
    id: "specialty-tools",
    slug: "specialty-tools",
    name: "Specialty Tools",
    shortName: "Kayusi",
    description:
      "Specialty hand tools such as the J555 Kayusi for focused workshop applications.",
    image: "/images/products/Kayusi.jpg",
    family: "hand-tools",
  },
  {
    id: "power-tool-accessories",
    slug: "power-tool-accessories",
    name: "Power Tool Accessories",
    shortName: "Drill Bits",
    description:
      "A new product line of drill bits — engineered as power tool accessories, distinct from traditional hand tools.",
    image: "/images/products/drill-bits-placeholder.svg",
    family: "power-tool-accessories",
    featured: true,
    newCategory: true,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
