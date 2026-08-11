import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("section-pad", className)}>
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] steel-texture px-8 py-12 md:px-14 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-2xl">
            {eyebrow ? <p className="eyebrow mb-4 text-white/70">{eyebrow}</p> : null}
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-white">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-white/75 text-base md:text-lg">{description}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="secondary" size="lg">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
