import type { Metadata } from "next";
import { companyStory } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Manufacturing & Quality",
  description:
    "Discover how Jagdish Tools (J555) manufactures hand tools in-house in Rajkot — from raw materials through final packaging.",
};

export default function ManufacturingPage() {
  return (
    <>
      <section className="bg-[var(--brand-ink)] pb-16 pt-32 text-white">
        <div className="container-site">
          <Breadcrumbs
              light
            items={[
              { label: "Home", href: "/" },
              { label: "Manufacturing" },
            ]}
          />
          <p className="eyebrow text-white/70">Manufacturing</p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5rem)]">
            Built with experience.
            <span className="block text-[var(--brand-yellow)]">Made with precision.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            {companyStory.manufacturing}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Raw materials",
              text: "Materials are selected for durability and the reliability expected from professional tools.",
            },
            {
              title: "In-house production",
              text: "Manufacturing is conducted in-house with machines and a quality-focused workforce.",
            },
            {
              title: "Final packaging",
              text: "The process continues through to final packaging — keeping production under one roof.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] p-6"
            >
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm text-[var(--brand-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--brand-surface)]">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Quality approach"
            title="Quality you can trust"
            description={companyStory.materials}
          />
          <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-white p-6">
            <h3 className="font-display text-2xl">Certifications & standards</h3>
            <p className="mt-3 text-sm text-[var(--brand-muted)]">
              Formal certification documents (such as ISO or BIS) are not published on the
              current website assets. This section is ready to host verified certificates,
              test standards, and compliance documents once provided by the company.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["ISO / QMS certificates", "BIS / product marks", "Test reports", "Material standards"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-[var(--radius)] border border-dashed border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-5 text-sm text-[var(--brand-muted)]"
                  >
                    {label}
                    <span className="mt-1 block text-xs uppercase tracking-wide">
                      Placeholder — awaiting documents
                    </span>
                  </div>
                ),
              )}
            </div>
            <div className="mt-6">
              <Button href="/contact" variant="ghost">
                Share certificates with us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader
            eyebrow="Infrastructure notes"
            title="Factory imagery & capability details"
            description="Detailed factory floor photography, machinery lists, capacity figures, and process diagrams can be added here without redesigning the page."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Factory photography", "Process steps", "Packaging & dispatch"].map((label) => (
              <div
                key={label}
                className="flex min-h-44 items-end rounded-[var(--radius-lg)] border border-dashed border-[var(--brand-border)] bg-[var(--brand-surface)] p-5 text-sm text-[var(--brand-muted)]"
              >
                {label} — awaiting assets
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Partner with a manufacturer"
        title="Request products from the source"
        description="Send a dealer, distributor, or bulk purchase enquiry and our team will respond with the relevant range details."
        primaryHref="/contact"
        primaryLabel="Send business enquiry"
        secondaryHref="/catalogue"
        secondaryLabel="Request catalogue"
      />
    </>
  );
}
