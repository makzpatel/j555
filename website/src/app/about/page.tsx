import type { Metadata } from "next";
import { company, companyStory } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Jagdish Tools",
  description:
    "Learn about Jagdish Tools (J555) — a Rajkot hand tools manufacturer established in 1972 by Lt. Jagdishbhai Ashodia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--brand-ink)] pb-16 pt-32 text-white">
        <div className="container-site">
          <Breadcrumbs
              light
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <p className="eyebrow text-white/70">About us</p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5rem)]">
            Five decades of tool making
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            {company.brand} is the market name of {company.name} — a manufacturing
            business founded in {company.established} and still focused on consistent,
            dependable tools.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-base leading-relaxed text-[var(--brand-muted)] md:text-lg">
            <p>{companyStory.intro}</p>
            <p>{companyStory.reputation}</p>
            <p>{companyStory.manufacturing}</p>
            <p>{companyStory.materials}</p>
            <p>{companyStory.vision}</p>
          </div>

          <aside className="h-fit rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
            <h2 className="font-display text-2xl">At a glance</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-[var(--brand-muted)]">Brand</dt>
                <dd className="font-semibold">{company.brand}</dd>
              </div>
              <div>
                <dt className="text-[var(--brand-muted)]">Company</dt>
                <dd className="font-semibold">{company.name}</dd>
              </div>
              <div>
                <dt className="text-[var(--brand-muted)]">Established</dt>
                <dd className="font-semibold">{company.established}</dd>
              </div>
              <div>
                <dt className="text-[var(--brand-muted)]">Founder</dt>
                <dd className="font-semibold">{company.founder}</dd>
              </div>
              <div>
                <dt className="text-[var(--brand-muted)]">Location</dt>
                <dd className="font-semibold">
                  {company.address.city}, {company.address.state}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-[var(--brand-surface)] industrial-grid">
        <div className="container-site">
          <SectionHeader
            eyebrow="Timeline"
            title="From 1972 to today"
            description="A simple view of the company’s journey based on verified information."
          />
          <ol className="mt-10 space-y-4">
            {[
              {
                year: "1972",
                title: "Foundation",
                text: `Jagdish Tools established by ${company.founder}.`,
              },
              {
                year: "Heritage",
                title: "Manufacturing reputation",
                text: "Built a reputation for precision products within an economical range.",
              },
              {
                year: "Capability",
                title: "In-house process",
                text: "Raw materials to packaging handled with in-house machines and workforce.",
              },
              {
                year: "India",
                title: "Domestic presence",
                text: "Presence across various states in India.",
              },
              {
                year: "Next",
                title: "Global outlook & new products",
                text: "Looking forward to working globally while expanding the product range.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="grid gap-3 rounded-[var(--radius)] border border-[var(--brand-border)] bg-white/90 p-5 md:grid-cols-[8rem_1fr]"
              >
                <span className="font-display text-2xl text-[var(--brand-yellow-deep)]">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--brand-muted)]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Speak with the J555 team"
        description="Whether you are a dealer, distributor, or industrial buyer, we welcome serious product and business enquiries."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/products"
        secondaryLabel="View products"
      />
    </>
  );
}
