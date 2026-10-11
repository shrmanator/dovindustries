# Whole-page composition review

Two static compositions for the existing Dovindustries content. These are design
artifacts; they do not replace application routes or ship the proposed layouts.

Run from the repository root:

```powershell
node docs/design-proposals/serve.mjs
```

Open <http://localhost:3052/docs/design-proposals/index.html>.
The review controls switch between A and B, desktop and mobile, and prompt,
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
On mobile, the order is artwork, project explanation, destination.

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
- The research destination still needs a genuinely new visual explanation of
  editable strokes and connected parts. Repeating the painted bear is not enough.
- A future product demonstration should use verified real product states.
  The amount selector here is a study of the existing illustration, not checkout.
- Neither composition alone establishes exceptional performance or a finished
  brand identity. Those require the chosen implementation and measured review.

Choose the composition before implementing the page redesign. Then refine its
typographic character and project stories within that shared structure.
