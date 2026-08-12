# Jagdish Tools (J555)

Website redesign project for Jagdish Tools.

## Structure

- `website/` — New Next.js site (primary deliverable)
- `public_html_existing/` — Legacy PHP site used as content/asset source only

## Quick start

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Deploy the `website` directory to Vercel.

The repo includes a root `vercel.json` that sets `rootDirectory` to `website`. If the project was created before that file existed, open **Project Settings → General → Root Directory** and set it to `website`, then redeploy.
