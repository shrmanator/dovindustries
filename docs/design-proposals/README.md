# Whole-page composition review

Two compositions for the existing Dovindustries content. These are design
artifacts; they do not replace application routes or ship the proposed layouts.

Run from the repository root:

```powershell
node docs/design-proposals/serve.mjs
```

Open <http://localhost:3052/docs/design-proposals/index.html>.
The review controls switch between A and B, desktop, mobile, 320px, and prompt,
paused, and completed presentation frames. These controls belong to the review
tool, not the proposed website. The bear animation is represented by a still.
DM Sans is served from the existing Next.js build for consistent local review.

## Direction A: Sequential presentations

The bear occupies a screen-height-aware gallery. Released projects follow as
separate scenes: Simply Sefer combines its approved painting and a warm neutral
text panel; DigiDov reverses the reading balance with its donation selector.
VR and transport close as smaller investigations before direct contact.

This is the recommended foundation. The larger project scenes need useful
product demonstrations to earn their space. Do not fill them with feature grids.
On mobile, the order is project name and purpose, artwork, detail, destination.

The latest A revision adds a compact real listing to Simply Sefer and makes the
DigiDov amount illustration respond to preset choices. Neither example collects
data or starts a transaction. The listing is a captured example, not a promise
of current availability. B remains the original comparison layout.

## Direction B: Staggered collection

The opening uses a wide backdrop for the bear. Released projects sit together
with unequal widths and a modest vertical stagger. Secondary research occupies
less space. This reduces desktop page length, but makes DigiDov look secondary.
Mobile loses the stagger and becomes a conventional stacked collection.

## Critique and next decisions

- Both keep Vibe Draw first, with SI terminology and the approved art.
- A gives the projects clearer pacing; B is more compact.
- The early research needs less emphasis than released products and Vibe Draw.
- Play and Replay share a centered position in the proposed presentation states.
- About the research in A opens `research.html`: a hand-authored drawing study.
  The front leg's strokes are grouped separately and move around a fixed joint.
  The other strokes stay unchanged. This demonstrates the research idea; it is
  not output from the SI model or a claim about its current capabilities.
- A future product demonstration should use verified real product states.
  The amount selector here is a study of the existing illustration, not checkout.
- Neither composition alone establishes exceptional performance or a finished
  brand identity. Those require the chosen implementation and measured review.

Choose the composition before implementing the page redesign. Then refine its
typographic character and project stories within that shared structure.

## Product sources checked on 11 October 2026

- <https://simplysefer.com/listings/244>: J. Biegeleisen Chumash Torah Temimah,
  four volumes with Vayikra missing, asking $20. The thumbnail was downloaded
  from the public listing's displayed storage URL for this local review.
- <https://www.digidov.com/>: ETH and USDC, reusable donation links, and automatic
  receipts. No payment was made and no receipt was invented for the study.
- `docs/digidov-product-study.md`: the existing selector illustration is based on
  the product's $20/$50/$100 presets and its 1:1 USDC display rate.
- Read-only Simply Sefer source: `components/listing-form/step-basics.tsx`
  confirms the photo-first selling flow and review of identified listing fields.
