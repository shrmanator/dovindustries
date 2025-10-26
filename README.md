## Dovindustries Landing Experience

This repo powers the public-facing Dovindustries HQ - a server-first Next.js 16 application that showcases active projects, operating metrics, and collaboration lanes. The UI blends Tailwind CSS v4 tokens with Tremor data visualisations for a crisp, high-signal experience.

## Stack

- Next.js 16 (App Router, React Server Components by default)
- React 19
- Tailwind CSS v4 via `@tailwindcss/postcss` (inline theming lives in `src/app/globals.css`)
- Tremor (`@tremor/react`) for KPI cards and charts
- Geist fonts with `next/font`

## Development

```bash
# install deps
pnpm install

# run locally
pnpm dev

# lint
pnpm lint

# build preview
pnpm build && pnpm start
```

Open <http://localhost:3000> to explore the site. Content lives in `src/app/page.tsx` with supporting components under `src/components/`.

## Deployment Notes

- Designed for Vercel / edge-friendly deployments.
- Tremor currently lists React 18 as its peer dependency; React 19 works in practice but keep an eye on upstream releases.
- Tailwind 4 configuration relies on the inline theme API - no `tailwind.config.ts` file is present.

## Contributions

Pull requests are welcome for content updates, new sections, and performance tweaks. Keep components server-first, isolate any `"use client"` usage, and follow the patterns documented in `CLAUDE.md`.
