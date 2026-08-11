# J555 — Jagdish Tools Website

Modern Next.js website for Jagdish Tools (J555), built from the existing `public_html_existing` content and assets.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Deploy target: Vercel

## Develop

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Content notes

- Product catalogue data lives in `src/data/products.ts` and `src/data/categories.ts`.
- Company details live in `src/data/company.ts`.
- Product images are copied from `../public_html_existing` into `public/images`.
- Enquiry form currently opens a mailto draft to `info@j555tools.com` until transactional email is configured.
- Certification / factory capacity claims are intentionally omitted or marked as placeholders when unverified.

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://j555tools.com
```
