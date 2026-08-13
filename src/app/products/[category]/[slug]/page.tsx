import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/categories";
import {
  getAllProductSlugs,
  getProductBySlug,
  getProductsByCategory,
} from "@/data/products";
import { ProductSpecifications } from "@/components/products/ProductSpecifications";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(categorySlug, slug);
  const category = getCategoryBySlug(categorySlug);
  if (!product || !category) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | J555`,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(categorySlug, slug);
  const category = getCategoryBySlug(categorySlug);
  if (!product || !category) notFound();

  const related = getProductsByCategory(categorySlug)
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  const productUrl = absoluteUrl(`/products/${category.slug}/${product.slug}`);
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: absoluteUrl("/") },
    { name: "Products", url: absoluteUrl("/products") },
    { name: category.name, url: absoluteUrl(`/products/${category.slug}`) },
    { name: product.name, url: productUrl },
  ]);
  const productSchema = productJsonLd({
    name: product.name,
    description: product.description,
    images: product.images,
    categoryName: category.name,
    url: productUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="bg-[var(--brand-surface)] pb-10 pt-28">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.name, href: `/products/${category.slug}` },
              { label: product.name },
            ]}
          />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-white">
              <div className="relative aspect-square">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-10"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {product.images.length > 1 ? (
                <div className="grid grid-cols-3 gap-3 border-t border-[var(--brand-border)] p-4">
                  {product.images.map((image) => (
                    <div
                      key={image}
                      className="relative aspect-square overflow-hidden rounded-md bg-[var(--brand-surface)]"
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-contain p-3"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--brand-border)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--brand-muted)]">
                  {category.name}
                </span>
                {product.newProduct ? (
                  <span className="rounded-full bg-[var(--brand-yellow)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
                    New
                  </span>
                ) : null}
              </div>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] text-[var(--brand-ink)]">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--brand-muted)] md:text-lg">
                {product.description}
              </p>

              {product.features?.length ? (
                <ul className="mt-6 space-y-2 text-sm text-[var(--brand-ink)]">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-yellow)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {product.applications?.length ? (
                <div className="mt-6">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                    Applications
                  </h2>
                  <p className="mt-2 text-sm text-[var(--brand-ink)]">
                    {product.applications.join(" · ")}
                  </p>
                </div>
              ) : null}

              {product.imagePending ? (
                <p className="mt-6 rounded-[var(--radius)] border border-dashed border-[var(--brand-border)] bg-white px-4 py-3 text-sm text-[var(--brand-muted)]">
                  Dedicated product photography for this line will be added as assets become
                  available.
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={`/contact`}
                  size="lg"
                >
                  Enquire about this product
                </Button>
                <Button href="/catalogue" variant="ghost" size="lg">
                  Request catalogue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductSpecifications product={product} />
          <aside className="h-fit rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
            <h2 className="font-display text-2xl">Need a quote?</h2>
            <p className="mt-2 text-sm text-[var(--brand-muted)]">
              Share required sizes, quantities, and destination. Our team will respond with
              availability and next steps.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button href="/contact">Open enquiry form</Button>
              <Button href="/products" variant="ghost">
                Back to all products
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="section-pad bg-[var(--brand-surface)]">
          <div className="container-site">
            <h2 className="font-display text-3xl">Related in {category.name}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
