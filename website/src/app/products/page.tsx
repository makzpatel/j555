import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { getFeaturedProducts, getNewProducts } from "@/data/products";
import { CategoryCard } from "@/components/products/CategoryCard";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore J555 hand tools and power tool accessories — striking tools, chisels, blades, screwdrivers, marking gauges, tile cutters, kayusi, and drill bits.",
};

export default function ProductsPage() {
  const featured = getFeaturedProducts().slice(0, 4);
  const newest = getNewProducts();

  return (
    <>
      <section className="bg-[var(--brand-ink)] pb-16 pt-32 text-white">
        <div className="container-site">
          <Breadcrumbs
              light
            items={[
              { label: "Home", href: "/" },
              { label: "Products" },
            ]}
          />
          <p className="eyebrow text-white/70">Products</p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5rem)]">
            Product portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Organised by tool family for faster discovery — from established hand tools to
            new power tool accessories.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader
            eyebrow="Categories"
            title="Choose a product family"
            description="Each category opens into dedicated product pages with available sizes and packing details."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--brand-surface)]">
        <div className="container-site space-y-12">
          <div>
            <SectionHeader
              eyebrow="New"
              title="New products"
              description="Recently introduced lines that extend the J555 offering beyond traditional hand tools."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {newest.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Featured"
              title="Popular lines"
              description="A selection of established products with published catalogue data."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need help selecting?"
        title="Talk to us about the right range"
        description="Share your application, preferred sizes, or distribution plans and we will guide you to the relevant J555 products."
        primaryHref="/contact"
        primaryLabel="Send product enquiry"
        secondaryHref="/catalogue"
        secondaryLabel="Request catalogue"
      />
    </>
  );
}
