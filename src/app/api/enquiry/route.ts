import { NextResponse } from "next/server";
import { company } from "@/data/company";

type EnquiryBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  category?: string;
  product?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const subject = encodeURIComponent(
    `[J555 Enquiry] ${body.enquiryType || "general"} — ${name}`,
  );

  const lines = [
    `Name: ${name}`,
    `Company: ${body.company || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Enquiry type: ${body.enquiryType || "—"}`,
    `Category: ${body.category || "—"}`,
    `Product: ${body.product || "—"}`,
    "",
    "Message:",
    message,
  ];

  const mailto = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;

  return NextResponse.json({
    ok: true,
    mailto,
    note: "Enquiry captured. A mailto draft is returned until transactional email is configured.",
  });
}
