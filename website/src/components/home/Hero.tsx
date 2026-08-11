import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--brand-ink)] text-white">
      <Image
        src="/images/hero/tools-floor.jpg"
        alt="J555 industrial hand tools"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative container-site flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow text-white/70">
            {company.brand} · Established {company.established}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.2rem,9vw,6.5rem)] leading-[0.92] text-white">
            J555
            <span className="block text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-[0.04em] text-[var(--brand-yellow)]">
              Jagdish Tools
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80 md:text-xl">
            Trusted tool manufacturing since {company.established}. Built in Rajkot for
            professional and industrial use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/products" size="lg">
              Explore Products
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Send Enquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
