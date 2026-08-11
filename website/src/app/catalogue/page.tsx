import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Request the J555 Jagdish Tools product catalogue for hammers, chisels, blades, screwdrivers, and power tool accessories.",
};

export default function CataloguePage() {
  return (
    <>
      <section className="bg-[var(--brand-ink)] pb-16 pt-32 text-white">
        <div className="container-site">
          <Breadcrumbs
              light
            items={[
              { label: "Home", href: "/" },
              { label: "Catalogue" },
            ]}
          />
          <p className="eyebrow text-white/70">Catalogue</p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5rem)]">
            Request the J555 catalogue
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            A downloadable PDF brochure is not currently published on the existing website.
            Use this form to request catalogue information for the product families below.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl">Included product families</h2>
            <ul className="mt-6 space-y-3">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="rounded-[var(--radius)] border border-[var(--brand-border)] px-4 py-3 text-sm"
                >
                  <span className="font-semibold">{category.name}</span>
                  <span className="mt-1 block text-[var(--brand-muted)]">
                    {category.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-white p-6 md:p-8">
            <h2 className="font-display text-3xl">Catalogue request</h2>
            <p className="mt-2 text-sm text-[var(--brand-muted)]">
              Tell us who you are and which categories matter most. We will respond with the
              latest available product information.
            </p>
            <div className="mt-6">
              <EnquiryForm defaultEnquiryType="catalogue" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
