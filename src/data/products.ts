export type SpecRow = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  subcategory?: string;
  description: string;
  images: string[];
  features?: string[];
  applications?: string[];
  materials?: string[];
  specifications?: SpecRow[];
  sizeTable?: {
    columns: string[];
    rows: string[][];
  };
  featured?: boolean;
  newProduct?: boolean;
  imagePending?: boolean;
};

export const products: Product[] = [
  // —— Striking Tools ——
  {
    id: "machinist-cross-type-hammer",
    slug: "machinist-cross-type-hammer",
    name: "Machinist Cross Type Hammer",
    categorySlug: "striking-tools",
    subcategory: "Hammers",
    description:
      "Machinist cross-type hammer head from the J555 striking tools range, available in multiple weights for professional workshop use.",
    images: ["/images/products/j5-01.jpg", "/images/products/crosstype.jpg"],
    features: [
      "Cross-type machinist head profile",
      "J555 branded forging",
      "Multiple weight options",
    ],
    applications: ["Workshop striking", "Fabrication", "Maintenance"],
    sizeTable: {
      columns: ["Weight (gms)", "IB / OB"],
      rows: [
        ["50", "12 / 35"],
        ["100", "12 / 30"],
        ["150", "12 / 30"],
        ["200", "12 / 24"],
        ["250", "12 / 20"],
        ["300", "6 / 15"],
        ["400", "6 / 15"],
      ],
    },
    featured: true,
  },
  {
    id: "machinist-cut-type-hammer",
    slug: "machinist-cut-type-hammer",
    name: "Machinist Cut Type Hammer",
    categorySlug: "striking-tools",
    subcategory: "Hammers",
    description:
      "Machinist cut-type hammer head designed for controlled striking applications across common workshop weights.",
    images: ["/images/products/j5-35.jpg", "/images/products/cuttype.jpg"],
    features: [
      "Cut-type machinist head profile",
      "J555 branded forging",
      "Multiple weight options",
    ],
    applications: ["Workshop striking", "Fabrication", "Maintenance"],
    sizeTable: {
      columns: ["Weight (gms)", "IB / OB"],
      rows: [
        ["100", "12 / 30"],
        ["150", "12 / 30"],
        ["200", "12 / 24"],
        ["250", "12 / 20"],
        ["300", "6 / 15"],
        ["400", "6 / 15"],
      ],
    },
    featured: true,
  },
  {
    id: "wooden-handle-hammers",
    slug: "wooden-handle-hammers",
    name: "Wooden Handle Hammers",
    categorySlug: "striking-tools",
    subcategory: "Wooden Handle Hammers",
    description:
      "New wooden-handle hammer range extending the J555 striking tools portfolio. Detailed specifications and product photography will be published as the line is finalised.",
    images: ["/images/products/j5-01.jpg"],
    features: ["Wooden handle configuration", "Part of the new product programme"],
    applications: ["General striking", "Site work", "Workshop use"],
    newProduct: true,
    featured: true,
    imagePending: true,
    specifications: [
      {
        label: "Status",
        value: "New product — specifications to be confirmed",
      },
    ],
  },

  // —— Chisels ——
  {
    id: "plain-chisel",
    slug: "plain-chisel",
    name: "Plain Chisel",
    categorySlug: "chisels",
    subcategory: "Chisels",
    description:
      "Plain chisel from the J555 range, offered in a wide selection of metric sizes.",
    images: ["/images/products/j5-17.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["6", "12 / 35"],
        ["8", "12 / 35"],
        ["10", "12 / 35"],
        ["12", "12 / 35"],
        ["19", "12 / 28"],
        ["25", "12 / 28"],
        ["32", "12 / 24"],
        ["38", "12 / 24"],
        ["45", "6 / 15"],
        ["50", "6 / 15"],
      ],
    },
    applications: ["Carpentry", "Joinery", "Workshop cutting"],
    featured: true,
  },
  {
    id: "bevelled-chisel",
    slug: "bevelled-chisel",
    name: "Bevelled Chisel",
    categorySlug: "chisels",
    subcategory: "Chisels",
    description:
      "Bevelled-edge chisel for precise cutting and shaping work. Listed on the existing catalogue as Bevelle Chisel.",
    images: ["/images/products/j5-05.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["12", "12 / 35"],
        ["19", "12 / 28"],
        ["25", "12 / 28"],
        ["32", "12 / 24"],
        ["38", "12 / 24"],
        ["45", "6 / 15"],
        ["50", "6 / 15"],
      ],
    },
    applications: ["Carpentry", "Joinery", "Detail cutting"],
    featured: true,
  },
  {
    id: "mortice-chisel",
    slug: "mortice-chisel",
    name: "Mortice Chisel",
    categorySlug: "chisels",
    subcategory: "Chisels",
    description:
      "Mortice chisel for creating and cleaning mortices in woodworking applications.",
    images: ["/images/products/mortice.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["6", "12 / 35"],
        ["8", "12 / 25"],
        ["10", "12 / 25"],
        ["12", "12 / 24"],
        ["19", "12 / 24"],
        ["25", "12 / 22"],
      ],
    },
    applications: ["Joinery", "Morticing", "Woodworking"],
  },
  {
    id: "mortice-chisel-bangalore-type",
    slug: "mortice-chisel-bangalore-type",
    name: "Mortice Chisel (Bangalore Type)",
    categorySlug: "chisels",
    subcategory: "Chisels",
    description:
      "Bangalore-type mortice chisel variant from the J555 chisel family.",
    images: ["/images/products/mortice_2.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["6", "12 / 35"],
        ["8", "12 / 25"],
        ["10", "12 / 24"],
        ["12", "12 / 24"],
        ["19", "12 / 24"],
        ["25", "12 / 22"],
      ],
    },
    applications: ["Joinery", "Morticing", "Regional woodworking styles"],
  },
  {
    id: "heavy-chisel",
    slug: "heavy-chisel",
    name: "Heavy Chisel",
    categorySlug: "chisels",
    subcategory: "Chisels",
    description:
      "Heavy-duty chisel for demanding cutting and shaping tasks.",
    images: ["/images/products/heavy.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["12", "12 / 24"],
        ["19", "12 / 25"],
        ["25", "12 / 22"],
      ],
    },
    applications: ["Heavy workshop work", "Construction", "Fabrication support"],
  },
  {
    id: "malabar-chisel",
    slug: "malabar-chisel",
    name: "Malabar Chisel",
    categorySlug: "chisels",
    subcategory: "Chisels",
    description:
      "Malabar-pattern chisel offered in larger sizes for specialised cutting work.",
    images: ["/images/products/malabar.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["69", "6 / 35"],
        ["76", "6 / 15"],
      ],
    },
    applications: ["Specialised carpentry", "Regional workshop use"],
  },
  {
    id: "chisel-wooden-handle",
    slug: "chisel-wooden-handle",
    name: "Chisel with Wooden Handle",
    categorySlug: "chisels",
    subcategory: "Wooden Handle Chisels",
    description:
      "Chisel supplied with wooden handle, available in mild and heavy configurations.",
    images: ["/images/products/j5-04.jpg"],
    sizeTable: {
      columns: ["Type", "PCS."],
      rows: [
        ["Mild", "150"],
        ["Heavy", "150"],
      ],
    },
    applications: ["Carpentry", "General workshop use"],
    featured: true,
  },

  // —— Cutting Tools ——
  {
    id: "plain-blade",
    slug: "plain-blade",
    name: "Plain Blade",
    categorySlug: "cutting-tools",
    subcategory: "Blades",
    description:
      "Plain iron blade from the J555 cutting tools range.",
    images: ["/images/products/Plain_blade.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["32", "12 / 30"],
        ["38", "12 / 30"],
        ["45", "12 / 30"],
        ["50", "12 / 30"],
      ],
    },
    applications: ["Cutting", "Workshop fabrication"],
  },
  {
    id: "cut-iron-blade",
    slug: "cut-iron-blade",
    name: "Cut Iron Blade",
    categorySlug: "cutting-tools",
    subcategory: "Blades",
    description:
      "Cut iron blade for reliable cutting performance across common metric sizes.",
    images: ["/images/products/cut_blade.jpg"],
    sizeTable: {
      columns: ["Size (mm)", "IB / OB"],
      rows: [
        ["32", "12 / 30"],
        ["38", "12 / 30"],
        ["45", "12 / 30"],
        ["50", "12 / 30"],
      ],
    },
    applications: ["Cutting", "Workshop fabrication"],
    featured: true,
  },

  // —— Driving Tools ——
  {
    id: "screwdriver",
    slug: "screwdriver",
    name: "Screwdriver",
    categorySlug: "driving-tools",
    subcategory: "Screwdrivers",
    description:
      "J555 screwdriver available in multiple lengths for fastening and maintenance work.",
    images: ["/images/products/j5-25.jpg"],
    sizeTable: {
      columns: ["Size (inch)", "OB"],
      rows: [
        ["6", "150"],
        ["8", "150"],
        ["10", "150"],
        ["12", "150"],
        ["14", "150"],
        ["16", "120"],
        ["18", "120"],
      ],
    },
    applications: ["Assembly", "Maintenance", "Electrical & general fastening"],
    featured: true,
  },

  // —— Measuring & Marking ——
  {
    id: "marking-gauge",
    slug: "marking-gauge",
    name: "Marking Gauge",
    categorySlug: "measuring-marking",
    subcategory: "Marking Gauges",
    description:
      "Marking gauge for accurate layout and marking in carpentry and workshop applications.",
    images: ["/images/products/j5-15.jpg"],
    sizeTable: {
      columns: ["Size", "PCS."],
      rows: [["Single", "250"]],
    },
    applications: ["Carpentry layout", "Workshop marking"],
    featured: true,
  },

  // —— Tiling ——
  {
    id: "tile-cutter",
    slug: "tile-cutter",
    name: "Tile Cutter",
    categorySlug: "tiling-tools",
    subcategory: "Tile Cutters",
    description:
      "Tile cutter from the J555 tiling tools range for scoring and cutting tiles.",
    images: ["/images/products/tc.jpg"],
    sizeTable: {
      columns: ["Size", "IB / OB"],
      rows: [["Single", "12 / 50"]],
    },
    applications: ["Tiling", "Interior finishing"],
    featured: true,
  },

  // —— Specialty ——
  {
    id: "kayusi",
    slug: "kayusi",
    name: "Kayusi",
    categorySlug: "specialty-tools",
    subcategory: "Kayusi",
    description:
      "J555 Kayusi specialty hand tool for focused workshop applications.",
    images: ["/images/products/Kayusi.jpg"],
    sizeTable: {
      columns: ["Size", "IB / OB"],
      rows: [["Single", "12 / 40"]],
    },
    applications: ["Specialty workshop use"],
    featured: true,
  },

  // —— Power Tool Accessories ——
  {
    id: "drill-bits",
    slug: "drill-bits",
    name: "Drill Bits",
    categorySlug: "power-tool-accessories",
    subcategory: "Drill Bits",
    description:
      "New J555 drill bit line for power tool applications. This range sits under Power Tool Accessories and is distinct from traditional hand tools. Full specifications and photography will be published as the catalogue expands.",
    images: ["/images/products/drill-bits-placeholder.svg"],
    features: [
      "New product category",
      "Designed as power tool accessories",
      "Specifications forthcoming",
    ],
    applications: ["Drilling with power tools", "Workshop & site use"],
    newProduct: true,
    featured: true,
    imagePending: true,
    specifications: [
      {
        label: "Status",
        value: "New product line — detailed sizes and materials to be confirmed",
      },
    ],
  },
];

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, slug: string) {
  return products.find(
    (p) => p.categorySlug === categorySlug && p.slug === slug,
  );
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getNewProducts() {
  return products.filter((p) => p.newProduct);
}

export function getAllProductSlugs() {
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}
