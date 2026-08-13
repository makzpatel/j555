import type { Metadata } from "next";
import { company } from "@/data/company";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact & Business Enquiries",
  description:
    "Contact Jagdish Tools (J555) in Rajkot for product, dealer, distributor, bulk, and export enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--brand-ink)] pb-16 pt-32 text-white">
        <div className="container-site">
          <Breadcrumbs
              light
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <p className="eyebrow text-white/70">Contact</p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5rem)]">
            Let’s talk tools
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Product enquiries, dealer interest, bulk requirements, and catalogue requests —
            reach the J555 team directly.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] p-6">
              <h2 className="font-display text-2xl">Visit / write to us</h2>
              <address className="mt-4 not-italic text-sm leading-relaxed text-[var(--brand-muted)]">
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.city} – {company.address.pincode}
                <br />
                {company.address.state}, {company.address.country}
              </address>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] p-6">
              <h2 className="font-display text-2xl">Call / email</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a className="font-medium hover:underline" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </li>
                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      className="font-medium hover:underline"
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={`https://wa.me/${company.whatsapp}`} external variant="dark">
                  WhatsApp
                </Button>
                <Button href={company.mapsUrl} external variant="ghost">
                  Open in Maps
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--brand-border)]">
              <iframe
                title="Jagdish Tools location on Google Maps"
                src={company.mapsEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-white p-6 md:p-8">
            <h2 className="font-display text-3xl">Send an enquiry</h2>
            <p className="mt-2 text-sm text-[var(--brand-muted)]">
              Choose an enquiry type so we can route your message correctly.
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
