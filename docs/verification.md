# Redesign verification

Reviewed October 7, 2026 against a local Next.js production build.

## Repository

GitHub: shrmanator/dovindustries. Base: origin/master at 64ad5ad.
The production Vercel deployment was independently matched to this base commit.
Work is on codex/portfolio-redesign; production is not changed by this branch.

## Checks

Lint, TypeScript, two isolated geometry tests, source-size check, and production build pass.
All authored source files are under 300 lines.
Browser review covered desktop 1280px, tablet 768px, mobile 390px, and narrow mobile 320px.
No horizontal overflow was observed at these widths; local images loaded successfully.
Mobile navigation opens, closes on selection, closes with Escape and restores button focus,
and closes when the viewport crosses the desktop breakpoint.
Drawing controls support Home, End, arrow keys, and Reset. Wing details remain grouped.
Reduced-motion emulation disables the entry animation and smooth scrolling.

## Lighthouse 13.5.0

| Local production build | Mobile | Desktop |
|---|---:|---:|
| Performance | 97 | 100 |
| Accessibility | 100 | 100 |
| SEO | 100 | 100 |
| Best practices | 73 | 73 |
| Largest contentful paint | 2.5s | 0.6s |
| Total blocking time | 0ms | 0ms |
| Cumulative layout shift | 0 | 0 |

Best-practices warnings come from the retained Microsoft Clarity integration:
third-party cookies, browser cookie issues, and a failed Bing tracking request.
The accessible link-name mismatch and hero fetch-priority issue found on the first run are fixed.
These are lab measurements on localhost, not deployed field performance guarantees.
Scores include the existing analytics script; it was not disabled for testing.

Screenshots and full Lighthouse reports are saved in the task's dovindustries-redesign
artifact directory. The original assessment and baseline screenshots are in dovindustries-audit.

## Delivery limits

The hero is original generated decorative artwork, not a photograph of built hardware.
The drawing interaction is explicitly labeled a concept illustration, not a live AI demo.
Unverified quantitative claims and release promises have been removed.
External project destinations were checked during the assessment; DigiDov links to sign-in.
Vercel previews have SSO protection. Production deployment and field verification remain pending review.
