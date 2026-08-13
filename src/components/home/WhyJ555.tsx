import { company } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";

const points = [
  {
    title: `${new Date().getFullYear() - company.established}+ years`,
    text: "Generational manufacturing experience since 1972.",
  },
  {
    title: "In-house production",
    text: "Process from raw materials to final packaging conducted in-house.",
  },
  {
    title: "Broad product range",
    text: "Hammers, chisels, blades, screwdrivers, marking, tiling, specialty tools, and accessories.",
  },
  {
    title: "Quality focus",
    text: "Materials selected for durability, reliability, and safety.",
  },
  {
    title: "India presence",
    text: "Market footprint across various states, with global ambitions ahead.",
  },
  {
    title: "B2B ready",
    text: "Catalogue requests, dealer enquiries, and bulk purchase conversations welcome.",
  },
];

export function WhyJ555() {
  return (
    <section className="section-pad bg-[var(--brand-ink)] text-white">
      <div className="container-site">
        <SectionHeader
          eyebrow="Why J555"
          title="Manufacturing credibility, not marketplace noise"
          description="Jagdish Tools is a manufacturer first — a serious industrial supplier with heritage, in-house capability, and a growing product portfolio."
          light
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <article
              key={point.title}
              className="rounded-[var(--radius)] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl text-[var(--brand-yellow)]">{point.title}</h3>
              <p className="mt-2 text-sm text-white/70">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
