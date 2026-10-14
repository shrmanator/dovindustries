# Flowing motion study

Local review: <http://localhost:3052/docs/design-proposals/motion.html>

This is a review artifact, separate from application routes and production.
The study uses the approved bear's completed frame to judge the surrounding
composition and scroll choreography. It does not replace or replay the existing
stroke presentation. The donation selector is an interactive product study,
without payment, wallet connection, or a simulated receipt.

## Reference observations

Lusion is the lead reference, following the user's preference on 11 October.
Its opening, large introductory heading, reel, and project grid were inspected
in the integrated browser. Rounded media frames, persistent compact navigation,
animated text, and a consistent surrounding composition connect distinct scenes.
The study borrows the framing and pacing principles, using Dovindustries' art.
It does not import Lusion's assets, copy, or unrelated 3D objects.

Linear's Customer Requests feature was also opened. It expands into a focused
detail panel over the still-visible product workflow. The lesson is to show a
specific product behavior and keep supporting explanation subordinate. A detail
drawer is not implemented here; the existing research destination is retained.

## Choreography

- The bear frame contracts gently as the visitor moves beyond the opening.
- The released-work title enters with the following section; it remains quieter
  than the project names. The first trial's screen-sized heading was rejected.
- Simply Sefer opens through a widening image mask with a shallow internal zoom.
  Its image and following description share the same horizontal edges.
- DigiDov's selector enters as a single scene, with a small progression through
  the amount choices. Selecting a preset updates one selected state.
- VR has restrained movement inside its image frame. Transport remains a plain
  early-research entry; it has no fabricated prototype illustration.
- The contact section closes the sequence with a dark field.

Scrolling remains native. Visual values settle with a short exponential response
and reverse with the scroll position. Only nearby scenes update, geometry is
cached outside the animation loop, and animation frames stop when settled or
the page is hidden. Reduced motion and the study's Motion off button restore
the static composition. Content remains visible without motion.

The local server includes the complete content in the initial HTML response.
JavaScript only enhances it. There is no loading interstitial, and the bear image
has fetch priority while later painted scenes load lazily. This follows the
user's rejection of repeated page-loading waits in Lusion.

## Review and practical limits

The opening, released-work handoff, DigiDov interaction, research, and contact
were reviewed in the integrated browser. Actual CSS viewport widths of 390 and
320 were checked; the browser's existing zoom required smaller physical viewport
overrides. No horizontal overflow was observed. The phone bear crop was corrected
to preserve the full composition. All artwork loaded. Keyboard selection and
one-selected-amount behavior were checked. Reduced-motion emulation disabled
the animation and was reset after verification.

This demonstrates a motion direction, not a measured production performance
result. Smoothness across real mobile devices and integration with the running
bear presentation still need review before this becomes the application design.
