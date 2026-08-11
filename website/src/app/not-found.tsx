import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[var(--brand-ink)] pt-24 text-white">
      <div className="container-site py-20">
        <p className="eyebrow text-white/70">404</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Page not found</h1>
        <p className="mt-4 max-w-lg text-white/70">
          The page you requested is not available. Head back to products or the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Go home</Button>
          <Button href="/products" variant="secondary">
            Browse products
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/40">
          Or <Link href="/contact" className="underline">contact us</Link> if you need help.
        </p>
      </div>
    </section>
  );
}
