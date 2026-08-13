import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Heritage } from "@/components/home/Heritage";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyJ555 } from "@/components/home/WhyJ555";
import { CTASection } from "@/components/ui/CTASection";
import { company, companyStory } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Trusted Tool Manufacturing Since 1972",
  description:
    "Jagdish Tools (J555) manufactures professional hand tools in Rajkot, India — hammers, chisels, blades, screwdrivers, marking gauges, tile cutters, and new power tool accessories.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Heritage />
      <CategoryShowcase />
      <FeaturedProducts />
      <WhyJ555 />

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Manufacturing"
            title="Built with experience. Made with care."
            description={companyStory.manufacturing}
          />
          <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-8">
            <ul className="space-y-4 text-sm text-[var(--brand-muted)]">
              <li>
                <strong className="block text-[var(--brand-ink)]">Materials to packaging</strong>
                In-house process from raw materials through final packaging.
              </li>
              <li>
                <strong className="block text-[var(--brand-ink)]">Material selection</strong>
                {companyStory.materials}
              </li>
              <li>
                <strong className="block text-[var(--brand-ink)]">Market ambition</strong>
                {companyStory.vision}
              </li>
            </ul>
            <div className="mt-6">
              <Button href="/manufacturing" variant="dark">
                See manufacturing approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="B2B enquiries"
        title="Looking for the right tools for your business?"
        description={`Dealers, distributors, and industrial buyers — request the ${company.brand} catalogue or send a product enquiry.`}
        primaryHref="/catalogue"
        primaryLabel="Request Catalogue"
        secondaryHref="/contact"
        secondaryLabel="Send Product Enquiry"
      />
    </>
  );
}
