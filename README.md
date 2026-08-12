# J555 — Jagdish Tools

Modern Next.js website for Jagdish Tools (J555), built from the legacy `public_html_existing` content and assets.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

Connect this repository to Vercel. The Next.js app lives at the **repository root**, so no Root Directory override is required.

Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables if needed.

## Content notes

- Product catalogue data: `src/data/products.ts`, `src/data/categories.ts`
- Company details: `src/data/company.ts`
- Legacy PHP site in `public_html_existing/` is excluded from git (contains credentials)
- Enquiry form opens a mailto draft until transactional email is configured
- Certification / factory claims are placeholders until verified documents are provided
