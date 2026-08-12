"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", hasMenu: true },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-[rgba(12,13,15,0.94)] backdrop-blur-xl"
          : "border-transparent bg-[rgba(12,13,15,0.72)] backdrop-blur-md",
      )}
    >
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-md" aria-label="J555 Jagdish Tools home">
          <Image
            src="/images/brand/logo.png"
            alt="J555 logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <div className="leading-tight">
            <div className="brand-wordmark font-display text-xl tracking-wide">J555</div>
            <div className="brand-sub text-[0.68rem] uppercase tracking-[0.18em]">
              Jagdish Tools
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map((link) =>
            link.hasMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="nav-link focus-ring rounded-md px-3 py-2 text-sm font-medium"
                  aria-expanded={productsOpen}
                  onFocus={() => setProductsOpen(true)}
                >
                  {link.label}
                </Link>
                <div
                  className={cn(
                    "absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 transition-all",
                    productsOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-1 pointer-events-none",
                  )}
                >
                  <div className="glass-dark rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-soft)]">
                    <div className="mb-3 flex items-end justify-between gap-4">
                      <div>
                        <p className="mega-muted text-xs uppercase tracking-[0.16em]">
                          Product families
                        </p>
                        <p className="mega-body mt-1 text-sm">
                          Browse by category across hand tools and accessories.
                        </p>
                      </div>
                      <Link
                        href="/products"
                        className="text-sm font-semibold hover:underline"
                        style={{ color: "var(--brand-yellow)" }}
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/products/${category.slug}`}
                          className="mega-card rounded-lg border border-white/10 bg-white/5 px-3 py-3 hover:bg-white/10 focus-ring"
                          onClick={() => setProductsOpen(false)}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="mega-title text-sm font-semibold">
                              {category.name}
                            </span>
                            {category.newCategory ? (
                              <span className="rounded bg-[var(--brand-yellow)] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                                New
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1 line-clamp-2 text-xs">
                            {category.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link focus-ring rounded-md px-3 py-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className="nav-link lg:hidden focus-ring rounded-md border border-white/20 px-3 py-2 text-sm"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden border-t border-white/10 bg-[rgba(12,13,15,0.97)] backdrop-blur-xl transition-[max-height,opacity]",
          open ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="nav-link block rounded-md px-2 py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.hasMenu ? (
                <div className="mb-2 ml-2 grid gap-1 border-l border-white/10 pl-3">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products/${category.slug}`}
                      className="nav-link block rounded-md px-2 py-2 text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {category.name}
                      {category.newCategory ? " · New" : ""}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="pt-2">
            <Button href="/contact" className="w-full">
              Enquire Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
