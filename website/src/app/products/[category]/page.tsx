import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | J555`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Products", url: absoluteUrl("/products") },
    { name: category.name, url: absoluteUrl(`/products/${category.slug}`) },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-[var(--brand-ink)] pb-16 pt-32 text-white">
        <div className="container-site">
          <Breadcrumbs
              light
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.name },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow text-white/70">
              {category.family === "power-tool-accessories"
                ? "Power tool accessories"
                : "Hand tools"}
            </p>
            {category.newCategory ? (
              <span className="rounded bg-[var(--brand-yellow)] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                New category
              </span>
            ) : null}
          </div>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5rem)]">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{category.description}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <ProductGrid products={products} />
        </div>
      </section>

      <CTASection
        eyebrow="Interested in this range?"
        title={`Enquire about ${category.shortName.toLowerCase()}`}
        description="Tell us the sizes, packing preference, or distribution opportunity you have in mind."
        primaryHref={`/contact`}
        primaryLabel="Send enquiry"
        secondaryHref="/catalogue"
        secondaryLabel="Request catalogue"
      />
    </>
  );
}
