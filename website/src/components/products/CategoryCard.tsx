import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  className,
}: {
  category: ProductCategory;
  className?: string;
}) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-[var(--radius-lg)] bg-[var(--brand-surface)] focus-ring",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-2xl tracking-wide">{category.name}</h3>
            {category.newCategory ? (
              <span className="rounded bg-[var(--brand-yellow)] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                New
              </span>
            ) : null}
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-white/80">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
