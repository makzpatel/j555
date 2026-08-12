import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/data/products";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <p className="rounded-[var(--radius)] border border-dashed border-[var(--brand-border)] bg-[var(--brand-surface)] p-8 text-[var(--brand-muted)]">
        Products for this category will appear here as the catalogue expands.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
