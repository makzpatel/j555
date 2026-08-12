import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/products/CategoryCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function CategoryShowcase() {
  return (
    <section className="section-pad bg-[var(--brand-surface)]">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Product families"
            title="Built for professional work"
            description="Explore the J555 range across striking, cutting, driving, marking, tiling, specialty tools, and new power tool accessories."
          />
          <Button href="/products" variant="dark" className="shrink-0 self-start md:self-auto">
            Browse all products
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 stagger">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} className="animate-fade-up" />
          ))}
        </div>
      </div>
    </section>
  );
}
