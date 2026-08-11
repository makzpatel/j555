import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { categories } from "@/data/categories";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--brand-border)] bg-[var(--brand-ink)] text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 focus-ring rounded-md">
            <Image
              src="/images/brand/logo.png"
              alt="J555 logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <div className="font-display text-xl">J555</div>
              <div className="text-xs uppercase tracking-[0.16em] text-white/55">
                Jagdish Tools
              </div>
            </div>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/65">
            Hand tools manufacturer in Rajkot since {company.established}. Built for
            professional and industrial use.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wide">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              ["About", "/about"],
              ["Products", "/products"],
              ["Manufacturing", "/manufacturing"],
              ["Catalogue", "/catalogue"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white focus-ring rounded-sm">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wide">Products</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {categories.slice(0, 6).map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products/${category.slug}`}
                  className="hover:text-white focus-ring rounded-sm"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wide">Contact</h3>
          <address className="mt-4 not-italic text-sm text-white/70 space-y-2">
            <p>
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.city} – {company.address.pincode}
            </p>
            <p>
              <a className="hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            {company.phones.map((phone) => (
              <p key={phone}>
                <a className="hover:text-white" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                  {phone}
                </a>
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>
            Brand {company.brand} · Established {company.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
