import { getNewProducts, getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedProducts() {
  const newProducts = getNewProducts();
  const featured = getFeaturedProducts()
    .filter((p) => !p.newProduct)
    .slice(0, 4);

  return (
    <section className="section-pad">
      <div className="container-site space-y-14">
        <div>
          <SectionHeader
            eyebrow="New launches"
            title="Expanding the J555 range"
            description="New product lines are being introduced while the established hand tools catalogue continues to serve professional users."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Featured"
            title="Established product lines"
            description="Core J555 tools with published sizes and packing details from the existing catalogue."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
