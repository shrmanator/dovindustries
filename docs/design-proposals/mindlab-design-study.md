# MindLab presentation study — 13 October 2026

Scope: MindLab's introduction, recorded example, mobile reading order, ending,
and transition into VR research. The approved Single scene study is now
implemented on the feature branch; the alternatives remain reviewable locally.

## Current diagnosis

The user's mobile screenshot shows the entire floorplan before the explanatory
text. The seeker stops against the bottom wall, the Couch destination is unclear,
and the narration says only that a location was reached. Watching that sequence
does not answer why the research matters.

The compact feature revision moves narration above the map and labels Couch.
Its 390px frame shrank from about 741px to 585px. However, saying that an excerpt
ends before resolution explains the cut without providing a useful ending.

The component also looks more like a debugging panel than the site's painted
product studies: anonymous furniture, heavy room outlines, a source clock, long
captions and repeated phase labels compete for attention. Extra animation will
not solve that hierarchy or the missing narrative.

## Content study: a recorded discovery

An empty search is not a satisfying ending for a seeker-and-hider presentation.
The revised study uses a different recorded episode with an actual sighting:

- 113.87: seeker positions report no visual contact with the person.
- 114.75: a previously accepted move toward Couch starts.
- 114.83: the person is observed 3.8m away in Living, after a long sight gap.
- 116.90: an accepted model response switches the move target to the person.
- 117.69: sight briefly drops; the replay retains this actual visibility change.
- 118.29: sight returns, with the person reported 1.3m away.

The recorded person stays at X/Z (2.156817, -4.741591). The seeker moves from
roughly (-1.30, -5.99) to (1.38265, -4.406288), changing from sees=false to
sees=true. Final three-dimensional positions independently give about 1.29m
separation, consistent with the 1.3m observation.

This is reacquiring a person after losing visual contact, not a recorded capture
or game victory. The person is not using the engine's explicit hidden-spot state
in this excerpt. Labels are Seeker and Person, and the ending says Found the
person. Do not represent this as clearing a hiding spot or winning hide-and-seek.

Source: shrmanator/MindLab, review-issue14, pinned revision
d989888f5e563784d29298cd37c43b4f71a53ed1, run 20261012-085228.
Events and both characters' positions were read on 13 October. Only accepted
output and recorded positions are used; no new model calls or Unity runs were
performed. The earlier Kitchen/Couch and Curtain examples were rejected because
their endings did not deliver a discovery.

## Reference study

- [Linear](https://linear.app/): its current page ties specific workflow examples
  to concise capability explanations. Apply that principle to one observed
  problem and executed response, rather than a general claim about intelligence.
- [Anthropic research](https://www.anthropic.com/research): research topics and
  project descriptions establish the question before examples and publications.
  Keep the research question outside playback and its result inside the example.
- [OpenAI research](https://openai.com/research/): focus areas give the surrounding
  research hierarchy. MindLab is additional research, not a second hero competing
  with Vibe Draw.
- [Lusion](https://lusion.co/): the earlier integrated-browser study documented
  consistent framing, compact navigation and connected scenes. Borrow continuity
  and pacing. Do not import fantasy decoration, scroll hijacking or page loaders.

Current reference-page content was rechecked through official web pages. The
earlier Lusion motion observations are in motion-study.md; its scroll effects
were not re-reviewed today. Integrated-browser capture resumed on 13 October,
allowing fresh desktop and mobile review of the implemented MindLab component.

## Two compositions

Single scene: one matte media frame, compact caption beside it on desktop and
above it on phones, quiet playback controls and an explicit observed-discovery
result. The same relationship works at every width. Recommended foundation.

Annotated canvas: the explanation occupies the unused Entry area of the room
plan on desktop. The media becomes an editorial figure rather than a separate
map and panel. On phones the annotation moves above the plan to preserve readable
type. More visually integrated, but expanded source text could cover geometry.

Both show the same recorded positions and source-derived outcome. Their
differences concern hierarchy and composition, not different performance claims.
The study offers local Play/Pause/Replay and Person/Decision/Found inspection.
Original model wording is an optional detail, not the main explanation.

## Motion and flow

Introduce the person first, with a close view of their recorded position in
Living. The seeker is deliberately subordinate during this two-second opening.
Then pull back once to the full plan and shift emphasis to the seeker. This
explains who is being sought before asking the visitor to follow the search.
The person is still outside the seeker's view at this point; the introductory
highlight belongs to the presentation, not to the character's perception.

Recorded positions stay fixed while the subject is introduced. The camera settles
into the room plan before the sighting, then remains still for the actual action.
Reduced motion snaps between camera compositions. The page never scrolls itself.
Hold the interpretation briefly, then show the recorded approach and confirmed
sighting. End on that result with Replay available; do not blank the map, invent
a success screen or add an unrelated scroll CTA. Never autoplay on variant change.

The following VR study shares the page's margins and a quiet divider. It returns
to the approved painting and a shorter research description. It needs no animated
entrance or new palette just to signal the transition.

## Decision and limits

Choose Single scene unless the annotated alternative proves equally readable on
real mobile screens. The final implementation should keep narration and action
simultaneously understandable, with large enough touch controls and no label
collisions. Functional geometry checks cannot certify visual quality.

Neither mockup is gameplay footage or proof of exceptional quality across the
whole site. The approved Single scene direction is implemented on the feature
branch, with the recorded response moved into a toolbar disclosure so shorter
stages do not reserve an empty area for it. Opening the source pauses playback;
closing it restores keyboard focus. Production remains unchanged.

Hosted review on 13 October covered desktop, 390px and 320px phones. The final
390px frame is about 538px high, with narration above the map and identical
heights for Person, Decision and Found. The 320px frame is about 488px high;
neither phone layout overflows horizontally. Playback reaches Found naturally,
Replay returns to the person-first opening, and Space toggles playback. Opening
the source pauses the sequence; Close and Escape dismiss it and return focus.
Fresh screenshots are saved under `.dist/mindlab-discovery-review/`.

## Product framing revision

The user clarified the potential product: an ongoing runtime connecting a
character's intelligence, body, senses, memories and available Unity actions.
Developers describe a character and connect game capabilities, rather than
script its psychology. The introduction now identifies this research direction
and shows a nervous maintenance worker as an example description, without the
internal character name.

The recorded seeker example supports only perception, a model response and
executed movement. Its narrative now names those steps, displays the accepted
model's original belief during the response stage, and describes the game
carrying out its order. The example does not claim to demonstrate the worker's
personality, memory-driven behaviour or a complete character runtime.

Hosted review covered the runtime introduction and visible model response on
1280px desktop, 390px and 320px phones. The replay remains about 538px high at
390px and 488px at 320px. The character description precedes the recording;
the accepted model belief is visible within the sequence rather than requiring
source inspection. The Unity action caption is kept short for narrow screens.
Production build, lint, all seventeen tests and the 300-line check passed.
