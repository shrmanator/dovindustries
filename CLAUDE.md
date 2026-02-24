# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Dovindustries landing experience - a Next.js application showcasing current projects, operating metrics, and focus areas. The build leans on modern React Server Components, Tailwind CSS v4, and Tremor for rich data visuals.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server with Turbopack
pnpm dev

# Build for production with Turbopack
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

  - **Framework**: Next.js 16.x (App Router)
  - **Core Philosophy**: **Server-First.** We leverage React Server Components (RSCs) by default. Client-side interactivity (`"use client"`) is an *opt-in* for specific, minimal components.
  - **Language**: TypeScript
  - **Styling**: Tailwind CSS (v4+). Tokens live in `globals.css` - Tailwind 4 inline theme API is used instead of a traditional `tailwind.config.ts`.
  - **Data Visualization**: Tremor (`@tremor/react`) for charts and metric boards.
  - **Build & Dev**: Turbopack (via `pnpm dev` and `pnpm build`)
  - **Package Manager**: pnpm

## Code Patterns

Embrace Modern Next.js (16+) & React (19+) Patterns.

  - **RSCs by Default:** Components are Server Components unless they require interactivity (state, effects, event handlers), at which point they must use `"use client"`.
  - **Keep Client Components Small:** Isolate interactivity. A `"use client"` directive makes the component and *all its children* client components. Push state and interactivity as deep into the component tree (to "leaf" components) as possible.
  - **Server Actions for Mutations:** Use Server Actions (`"use server"`) in `/actions` for data mutations (form submissions, database writes). They run on the server and can be called from Client Components.
  - **Fetch Data on the Server:** Prefer server-side data fetching (in Server Components, Layouts, or Pages) and passing data down as props. Avoid client-side data fetching (e.g., in a `useEffect`) unless absolutely necessary (e.g., for data that is user-specific and changes frequently on the client).
  - **Colocate Logic:** Avoid premature abstraction. Business logic should live in `/utils` and be framework-agnostic (plain TS functions).
  - **No Custom Hooks Directory:** Do not create a `/hooks` directory. If you need a custom hook, colocate it with the component using it. Reserve custom hooks *only* for logic that genuinely manages reusable, complex *React state or lifecycles* (e.g., `useLocalStorage`, `useMediaQuery`). Most "hooks" are just utilities that belong in `/utils`.
  - **Favor Simplicity:** Don't Repeat Yourself (DRY) is not an absolute rule. Duplicating code 2-3 times is often *better* than introducing a complex, premature abstraction. Favor simplicity and readability over absolute dryness.

## Repository Structure

  - `src/app/` - App Router routes, pages, layouts, and route-specific components.
  - `src/components/` - Shared, reusable UI components. Client Components live here when they need interactivity (e.g., Tremor chart boards).
  - `src/actions/` - Next.js Server Actions (`"use server"`) for mutations like form submissions and database operations.
  - `src/utils/` - Framework-agnostic utility functions (e.g., `formatDate`, `isBusinessOpen`). Pure TypeScript, no React.
  - `public/` - Static assets (images, fonts, etc.).

## Configuration Files

  - `next.config.ts` - Next.js configuration
  - `tailwind.config.ts` - _Not present_. Tailwind 4 inline theme API inside `src/app/globals.css` controls tokens.
  - `tsconfig.json` - TypeScript configuration
  - `eslint.config.mjs` - ESLint configuration
  - `postcss.config.mjs` - PostCSS configuration

## Commit & Branch Strategy

**Cadence (commit early, commit clean):**
- Commit every 30–90 minutes of active work **or** at each cohesive change that compiles and passes checks.
- Aim for small, atomic commits (typically 10–150 changed lines, 3–7 files). One idea per commit.
- Push your branch at least daily; open a Draft PR if a branch will live > 1 day.
- Avoid mixing refactors with feature code in the same commit.

**Branching:**
- Short-lived branches from `main`: `feat/<kebab-case>`, `fix/<kebab-case>`, `refactor/<kebab-case>`, `chore/<kebab-case>`.
- Keep branches focused; prefer multiple small PRs over a mega PR.
- Use **squash-and-merge**; set the PR title to a Conventional Commit so history stays clean.

**Message Convention (Conventional Commits):**
- Format: `<type>(<optional-scope>): <subject>` on one line (≤72 chars), blank line, then body (why/change/risk).
- Types: `feat`, `fix`, `refactor`, `chore`, `test`, `docs`, `ci`, `perf`.
- Scope = top-level folder or feature area (e.g., `app/actions`, `api`, `lib/bridge`, `prisma`, `utils`).
- Use `BREAKING CHANGE:` in the body if applicable.

**Pre-commit checks (run locally):**
```bash
pnpm type-check && pnpm lint && pnpm test -i
```
Recommended pre-push hook to prevent broken commits from landing.

**PR Size & Review:**
- Target ≤300 lines net diff (excluding snapshots/generated). Larger changes should be split.
- Describe intent, risks, rollout/flags. Link to any relevant contract addresses or webhook specs.

## PR Review Standards

### Blocking Reviews (Request Changes):
- Build, test, or linting failures
- Breaking changes without migration path
- Security issues (exposed API keys, vulnerable patterns)
- Smart contract interaction bugs

### Non-Blocking Feedback (Comments):
- Suggestions, questions, alternative approaches

### Communication:
Direct and technical. State: problem, location, what needs fixing. No emojis. No fluff.

### Commit Messages:
No emojis. No Claude mentions.
