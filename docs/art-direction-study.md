# Painterly art direction experiment

The user wants to explore SimplySefer's banner painting style as a shared
Dovindustries visual language. Compare the bear sequence and earlier paintings with the original sculpture
at /art-direction, inside the existing homepage layout.

## Visual plan

Keep the existing DM Sans interface and Instrument Serif research heading.
Use painting to carry the warmth and character, while interface spacing stays quiet.
Palette: porcelain #f8f9fa, graphite #20242b, cobalt #344cf4,
sage #849278, turquoise #3c9696, golden ochre #c6a354.
Left-aligned copy above a broad painting; a compact comparison control sits below.
The rest of the homepage stays visible so the artwork can be judged in context.

## Directions

- Working studio: drawing sheets, an articulated bird, and a small wheel mechanism
  on a modern workbench overlooking a river valley. Ground the image in making things.
- Movement: a river and slim bridge connect a human journey with a contemporary studio.
  Test the landscape's atmosphere and sense of exploration.
- Painted forms: reinterpret the original sculpture's connected forms in oil paint.
  Isolate how much the medium contributes to the identity.
- Original sculpture: retain the existing rendering as the comparison baseline.

## Review of the plan

A nostalgic cottage workshop would send the wrong signal for current software and hardware.
Use a contemporary studio, visible brushwork, and meaningful objects instead.
A landscape alone may feel like travel branding; keep that direction as a deliberate test.
Painted forms may still feel arbitrary; compare it to the more specific studio subject.
All artwork is concept art, not evidence of built hardware or product capabilities.

This is a separate study route. Choosing an option does not change the main homepage.

## Relevance filter

The user explicitly asks: is the artwork relevant, and does it reflect Dovindustries?
The first studio looks too much like a historical workshop. The landscape's connection
is weak. Painted forms change the medium but retain arbitrary subjects.
A refined studio removes the antique lathe and clutter, centers a heron drawing with
separate connected feathers, and pairs it with an articulated bird study, two books,
a laptop, and a compact hinge/wheel study. This draws from the actual portfolio themes.
Keep the earlier attempts for comparison rather than treating all of them as finalists.

## Composition rejected

The user finds the staged studio composition too generically AI-generated.
Even a contemporary version repeats a stock recipe: laptop, books, workbench,
and picturesque valley, with each object standing in for a project.
Drop that recipe rather than polishing the same scene again.
The next study uses one bear drawing with a visible revision to one paw.
It has two concrete anchors: the existing walking-bear mark and drawing-edit research.
Earlier scenes belong in a collapsed comparison group, not among current recommendations.

## Bear sequence

The study plays once over twenty seconds: type and send a drawing prompt, draw the
outline, add brush passes, type and send an edit prompt, then lift the front paw.
Replay, pause, stage buttons, and a keyboard-accessible scrubber allow closer review.
The outline uses authored SVG curves with progressive stroke lengths. Painting and
paw revision use brush paths to reveal illustrative raster texture. This is a
choreographed drawing concept, not a reconstruction of model-generated strokes.
The edit frame is clipped to the paw region, preserving the base painting elsewhere.
Reduced-motion visitors receive a still final frame; explicit playback remains available.
Leaving the browser tab pauses playback. No animation library is loaded.

These generated frames illustrate the intended drawing-and-editing experience.
They are not outputs from Vibe Draw or evidence of learned editing capability.
The study labels this limitation directly below the controls.
A plain caption marked "Animated example" types "Draw a bear." and later
"Lift its front paw." Each prompt then appears above the canvas on the right and
starts its corresponding action. There is no text field, placeholder, or Send button:
the user found those controls misleading because they invited typing into a scripted demo.
Replay and scrubbing remain interactive. The sequence does not contact a model.

Validation: production build, lint, types, seven isolated tests, and source-size checks pass.
Browser review confirms visible strokes, replay, keyboard scrubbing, stage selection,
desktop layout, and no horizontal overflow at a measured 390 CSS-pixel mobile width.
Reduced-motion emulation opens the study at its final frame with playback stopped.
