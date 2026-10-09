# Art-first refinement

The previous serif pass made the opening compete with its own artwork. A studio statement, status, oversized title, explanation and presentation each demanded separate attention. Changing the typeface did not create a distinctive identity.

The revision gives the drawing the first screen. A compact sans-serif title and research status sit above it. The explanatory sentence becomes a caption below. The approved stroke sequence, local paw edit, prompt collapse and green completion mark remain unchanged.

Palette: cool white #f8f9fa, charcoal #20242b, bear blue from the artwork, burgundy #583743, plum #342732 and lilac #c9b8dd. Project colours remain specific to their subjects. DM Sans provides the quiet supporting typography; no oversized ornamental display face.

The page reads as a selection of work: one dominant research presentation, two released products, a smaller collection of other research, then contact. Simply Sefer's features become a concise paragraph rather than a padded list. Footer and project typography no longer compete with the bear.

Review criteria: artwork visible in the first desktop screen; title/status fit 320 px; clear current-versus-released distinction; legible project facts; no invented interface or technical achievement; transitions and controls reviewed in the integrated browser before deployment.

## Iterations

- Removed the separate studio statement and oversized serif hierarchy. The title/status row now precedes the art; the explanation is the figure caption alongside Replay on desktop.
- Rejected a flat vector receipt trial after integrated-browser review. Its generic icon style did not belong beside the paintings. Replaced it with a single painted receipt study; DigiDov facts remain real HTML, outside the art.
- Rejected an asymmetric research layout that left an empty column beside the transport question. Restored an image-and-question VR entry, followed by a smaller transport entry.
- The 320 px review exposed a caption squeezed by Replay. Mobile now gives the caption the full width, with Replay beneath it. The complete prompt still collapses to a 48 px green check.
- Removed the unused Instrument Serif font. The new DigiDov artwork is a 234,644-byte WebP, 1280 x 960, served lazily through Next Image. The illustration adds no client JavaScript.
- Deployed review prompted a final mobile adjustment: DigiDov's title and purpose now introduce the artwork, followed by the facts and destination. Removed duplicate sticky-header clearance from project anchor offsets and capped desktop image-size hints to the actual layout.

## Artwork

Built-in image generation was used. Asset: `public/images/art-digidov-receipt-v3.webp`. The selected PNG was resized and compressed with the existing Sharp dependency. No original artwork was overwritten.

Exact generation prompt:

> Use case: illustration-story. Create a single fine-art editorial image for DigiDov, a real product that accepts cryptocurrency donations for nonprofits and automatically issues donor receipts. The main subject is a single long, softly curled paper donation receipt, with a subtly irregular torn lower edge, lying diagonally on a dark muted aubergine-plum artist's surface. Include one much smaller charcoal ink drawing of a heart near the top of the receipt and sparse graphite marks implying receipt lines, WITHOUT any readable text, names, amounts or numerals. Treat the paper as a compelling sculptural drawing subject with genuine crumples, overlaps and expressive cast shadows. Style: accomplished observational charcoal drawing mixed with thick, broken oil paint and visible pencil construction lines, textured plaster ground, matching the raw tactile character of the reference book painting shown in this conversation. Not smooth digital illustration, not photorealistic, not 3D render, not a flat vector icon. Paper is pale lilac-gray with restrained dusty-violet brushwork; deep plum charcoal background, no beige wash. Landscape 4:3 framing, receipt centered slightly right, large, strong asymmetry, decisive diagonal. Leave open ground to the left; just one paper object, no floating coins, crypto logos, hands, phones, graphs, UI panels, stars, glow, gradients or ornamental objects. The artwork is an illustration of automatic donor receipts, NOT a mock receipt or real transaction. No typography anywhere.

Product facts were checked again against the live public DigiDov page in the integrated browser: ETH/USDC, reusable link, automatic receipts, retain crypto or optional cash conversion. Tax treatment, launch times and settlement latency are not repeated in the portfolio.

## Verification

Local integrated-browser inspection covered the opening and completion state, Simply Sefer, DigiDov, secondary research, contact and mobile navigation at desktop, 390 and 320 CSS pixels. At 320 px, the title and research status remained on one row and document width did not exceed the viewport. Mobile menu navigation closed the menu and reached Vibe Draw.

Lint, types, production build, all 12 existing tests and the source-size check passed. No authored source file exceeds 300 lines. No fresh Lighthouse score or field-performance claim is made.

## Deployed review, October 9

Verified source commit `3ddc8d7` after Vercel reported success (deployment `5tLzq7KveducdLD1Y7PVLp7UqKW8`). The branch preview shows the new heading, figure caption, receipt artwork and revised mobile ordering. Browser error logs were empty. Document width remained within the 390 px viewport. The donation image was requested at width 384 on mobile.

The completion control was inspected at 48 px with background `rgb(21, 128, 61)`. Replay restarts the sequence; mobile Research navigation closes the menu and reaches Vibe Draw. The title and status fit on one row at 320 px, and the mobile caption uses the full available width. Those controls retain the already reviewed sequence behavior.

Proof images in `.dist/screenshots/`: `art-first-desktop.png`, `art-first-mobile.png`, `art-first-opening.png` and `art-first-digidov-mobile.png`. The complete project-panel capture confirms the name and purpose precede the artwork, with facts and destination afterward.

Design assessment: the opening no longer resembles a generic editorial hero assembled from several competing text treatments. The drawing is the defining subject. Released projects share its tactile medium and vary in colour, while category titles and supporting text stay restrained. Secondary research deliberately has less emphasis than the frontier presentation. This is a visual and implementation judgment, not a claim of measured superiority over other websites or evidence that the illustrative bear is model output.
