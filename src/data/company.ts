export const company = {
  name: "Jagdish Tools",
  brand: "J555",
  legalName: "Jagdish Tools",
  tagline: "Trusted Tool Manufacturing Since 1972",
  established: 1972,
  founder: "Lt. Jagdishbhai Ashodia",
  email: "info@j555tools.com",
  phones: ["+91-7573883295", "+91-9825709555"],
  whatsapp: "917573883295",
  whatsappDisplay: "+91-7573883295",
  address: {
    line1: "Jagdish Tools, Vavdi Main Road",
    line2: "B/H Krishna Park Hotel, Vavdi",
    city: "Rajkot",
    pincode: "360004",
    state: "Gujarat",
    country: "India",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14772.081153788477!2d70.796339!3d22.239309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbe38e109293%3A0x4f3be6c24dd250da!2sJagdish%20Tools!5e0!3m2!1sen!2sin!4v1677506066260!5m2!1sen!2sin",
  mapsUrl: "https://maps.google.com/?q=Jagdish+Tools+Vavdi+Rajkot",
  website: "https://j555tools.com",
  social: {
    instagram: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export const companyStory = {
  intro:
    "Jagdish Tools, popularly known in the market as J555 tools, was established by Lt. Jagdishbhai Ashodia in 1972. With decades of manufacturing experience and expertise in tool making, the company has always believed in providing consistent quality products to its market.",
  manufacturing:
    "Our manufacturing process — from raw materials through to final packaging — is conducted in-house with the help of our machines and quality workforce, which remain our pride and strength as a company.",
  materials:
    "Our tools — including hammers, chisels, iron blades, screwdrivers, and related products — use carefully selected materials chosen for durability, reliability, and safety.",
  vision:
    "The company builds trust by aiming to provide fine-quality products to its users. With a vision of growth, Jagdish Tools has established presence across various states in India and is looking forward to working globally.",
  reputation:
    "With an established history of manufacturing and delivering precision products within an economical range, the company has earned a strong reputation in the field.",
} as const;

export const enquiryTypes = [
  { value: "product", label: "Product enquiry" },
  { value: "dealer", label: "Dealer / distributor enquiry" },
  { value: "bulk", label: "Bulk purchase enquiry" },
  { value: "catalogue", label: "Catalogue request" },
  { value: "export", label: "Export / international enquiry" },
  { value: "general", label: "General business enquiry" },
] as const;
