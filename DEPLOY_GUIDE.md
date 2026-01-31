# Deploy guide (quick)

This project is **Next.js (App Router)**.

## Option A (recommended): Vercel (best for Next.js)

1) Push the project to GitHub (do NOT include `node_modules` or `.next`).
2) Import the repo in Vercel.
3) In Vercel → Project → Settings → Domains → add your domain.
4) In imena.ua DNS:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com` (or the exact value Vercel shows)

Vercel will handle HTTPS automatically.

## Option B: Static export (only if you don't use server features)

This repo can be switched to static hosting. Limitations:
- No server-side rendering (SSR), no API routes, no server actions.
- Next/Image must be unoptimized.

### How to enable static export

Edit `next.config.ts` to:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
```

Then run:

```bash
npm install
npm run build
```

Static files will appear in the `out/` folder — upload them to any static host (Netlify, Cloudflare Pages, shared hosting).

If `npm run build` fails after enabling export, you are using a server-only feature; use Option A instead.
