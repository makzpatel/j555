import { company, companyStory } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";

const milestones = [
  {
    year: String(company.established),
    title: "Founded",
    text: `Established by ${company.founder} as a tool manufacturing business.`,
  },
  {
    year: "Growth",
    title: "In-house capability",
    text: "Manufacturing from raw materials through final packaging conducted in-house.",
  },
  {
    year: "India",
    title: "Market presence",
    text: "Presence established across various states in India.",
  },
  {
    year: "Today",
    title: "Modernising range",
    text: "Expanding the catalogue with new lines such as drill bits and wooden-handle hammers.",
  },
];

export function Heritage() {
  return (
    <section className="section-pad industrial-grid">
      <div className="container-site">
        <SectionHeader
          eyebrow="Heritage"
          title={`Since ${company.established}`}
          description={companyStory.intro}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {milestones.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius)] border border-[var(--brand-border)] bg-white/80 p-5 backdrop-blur-sm"
            >
              <p className="font-display text-3xl text-[var(--brand-yellow-deep)]">{item.year}</p>
              <h3 className="mt-3 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--brand-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
