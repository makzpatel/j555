"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { enquiryTypes } from "@/data/company";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type EnquiryFormProps = {
  defaultEnquiryType?: string;
  defaultCategory?: string;
  defaultProduct?: string;
  compact?: boolean;
};

export function EnquiryForm({
  defaultEnquiryType = "product",
  defaultCategory = "",
  defaultProduct = "",
  compact,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [enquiryType, setEnquiryType] = useState(defaultEnquiryType);
  const [category, setCategory] = useState(defaultCategory);

  const filteredProducts = useMemo(
    () =>
      category
        ? products.filter((p) => p.categorySlug === category)
        : products,
    [category],
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string; mailto?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to submit enquiry");
      }

      setStatus("success");
      setMessage(
        "Thank you. Your enquiry has been prepared. If your email client opened, please send the message. Our team will respond shortly.",
      );
      form.reset();
      setEnquiryType(defaultEnquiryType);
      setCategory(defaultCategory);

      if (data.mailto) {
        window.location.href = data.mailto;
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email info@j555tools.com directly.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", compact && "space-y-3")}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company / organisation" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-[var(--brand-ink)]">Enquiry type</span>
          <select
            name="enquiryType"
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value)}
            className="field"
            required
          >
            {enquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-[var(--brand-ink)]">Product category</span>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="field"
          >
            <option value="">Select category (optional)</option>
            {categories.map((item) => (
              <option key={item.id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-[var(--brand-ink)]">Product</span>
        <select name="product" defaultValue={defaultProduct} className="field">
          <option value="">Select product (optional)</option>
          {filteredProducts.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-[var(--brand-ink)]">Message</span>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          className="field resize-y"
          placeholder="Tell us about volumes, sizes, destination market, or distribution interest."
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button type="submit" size="lg" className={status === "loading" ? "opacity-70" : undefined}>
          {status === "loading" ? "Sending…" : "Send enquiry"}
        </Button>
        {message ? (
          <p
            className={cn(
              "text-sm",
              status === "success" && "text-emerald-700",
              status === "error" && "text-red-700",
            )}
            role="status"
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-[var(--brand-ink)]">{label}</span>
      <input name={name} type={type} required={required} className="field" />
    </label>
  );
}
