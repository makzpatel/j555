import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--brand-border)] bg-white transition hover:border-[var(--brand-ink)]/25 hover:shadow-[var(--shadow-soft)] focus-ring",
        className,
      )}
    >
      <div className="relative aspect-square bg-[var(--brand-surface)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 25vw"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.newProduct ? (
            <span className="rounded bg-[var(--brand-yellow)] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
              New
            </span>
          ) : null}
          {product.imagePending ? (
            <span className="rounded bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              Imagery soon
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        {product.subcategory ? (
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--brand-muted)]">
            {product.subcategory}
          </p>
        ) : null}
        <h3 className="mt-1 font-display text-xl text-[var(--brand-ink)]">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-[var(--brand-muted)]">
          {product.description}
        </p>
        <span className="mt-auto pt-4 text-sm font-semibold text-[var(--brand-ink)] group-hover:underline">
          View details
        </span>
      </div>
    </Link>
  );
}
