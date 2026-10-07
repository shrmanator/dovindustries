# Dovindustries

Portfolio for Dovindustries: live software projects and research in drawing, VR, and electric transport.

**Live:** [dovindustries.com](https://dovindustries.com)

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Fonts | DM Sans and Instrument Serif (via next/font) |
| Deploy | Vercel |

## Local Development

```bash
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000)

## Project Structure

```text
src/
├── app/           # Pages, layouts, metadata
├── components/    # UI components
├── styles/        # Styles split by section
└── utils/         # Helper functions
```

## Validation

Run `pnpm lint`, `pnpm type-check`, `pnpm test`, `pnpm check:size`, and `pnpm build`.
The source-size check enforces the 300-line limit. Drawing geometry has isolated tests.
See [design direction](docs/design-direction.md) and [verification](docs/verification.md).

## License

All rights reserved. See [LICENSE](./LICENSE).
