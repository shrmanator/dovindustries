# Editorial depth pass

## Plan and review

Retain the approved bear demonstration and conventional scrolling. Use cool white
`#f8f9fa`, charcoal `#20242b`, burgundy `#583743`, plum `#342732` and blue-gray
`#4e5e66`. DM Sans remains the single family; larger project names and smaller
category names establish hierarchy without another display-font experiment.

Desktop: drawing → attached research destination → paired product paintings and
captions → independent research notes → contact. Mobile retains name, purpose,
artwork, detail and destination for each product.

The repeated alternating image/copy pattern is a familiar portfolio default.
Replace it with a diptych: distinct subjects share a viewing plane and precise
captions. Avoid enclosing cards, extra motion, decorative metadata and fabricated
hardware. Make VR's picture belong to VR only; transport is a separate research
question with proportionate text-only presentation.

The bear-logo checkerboard is baked into the source. Remove the backdrop while
preserving the mark. The curled receipt is too crumpled and anonymous. Test a
cleaner painted donor receipt with legible identity rather than crypto ornament.

The research destination uses the product thesis in the Vibe Draw repository's
`docs/semantic-direct-manipulation-vision.md`. Describe research aims and the
interaction being investigated, not achieved model performance. A useful next
step is more valuable than adding another promotional headline.

## Asset prompts

Built-in image generation is used for the limited logo background edit and the
receipt refinement. Final selected asset paths and browser review follow below.

Logo prompt: Remove only the pale white/gray checkerboard backdrop from the
existing black bear, make it genuinely transparent, and preserve the silhouette,
pose, edges, eye and negative-space leg shapes. No redesign, shadow or outline;
crop to the bear with a small transparent margin.

Receipt prompt: Keep the deep plum oil-painted ground and charcoal/palette-knife
style. Refine only the receipt into a clean, uncrumpled ivory sheet with one gentle
curl and no torn corners or accordion folds. Replace the heart and anonymous
scribbles with three clearly legible charcoal printed lines: "DigiDov", "Donation
receipt", "ETH / USDC". Add a few fine accounting rules; no other text, amounts,
donor identities, numbers, signatures, coins, arrows, props or mock browser UI.
Keep the paper painterly and fully visible with generous plum margins.

Selected workspace assets: `public/images/bear-mark-clean.webp` (1.5 kB) and
`public/images/art-digidov-receipt-v4.webp` (201 kB). The second replaces the 235 kB
receipt asset in this preview only. Optimization uses the repository helper and
preserves the generated logo's alpha.

## First critique and correction

The paired product paintings reduce the repeated image/copy alternation and show
the work together. Caption roles remain consistent, and phone order is unchanged.
The cleaner, named receipt is less anonymous at mobile size. The research questions
are now separate entries; transport no longer shares VR's image column. The brief
links back to the drawing and to released work, without introducing a live-model
input or an invented benchmark.

Local integrated-browser review covered the desktop composition and 390 px brief,
return path, product captions and research sequence. Build, lint, all 12 existing
tests and the source-size check passed. All authored source files remain below
300 lines. Animation timing and canvas logic are unchanged; no additional client
component, scroll effect, font or external dependency is introduced.
