# MindLab discovery replay source

The discovery excerpt is curated from run `20261012-085228` in
`shrmanator/MindLab`, revision `d989888f5e563784d29298cd37c43b4f71a53ed1`
on the unmerged `review-issue14` branch. It is a schematic reconstruction,
not gameplay footage. Sources were checked on 13 October 2026.

Sources: `Transcripts/events-20261012-085228.jsonl` and the corresponding
`poses` file. The person stays at world X/Z `(2.156817, -4.741591)` in Living
throughout the excerpt. They are not using the engine's explicit hidden-spot
state. The seeker starts without visual contact, turns, sees them and approaches.
The room plan is simplified reference geometry, not a captured collider registry.

Recorded events:

- 113.87: seeker positions report `sees=false`.
- 114.68: accepted remote response orders a move to Couch; 114.75: motor onset.
- 114.83: figure observed 3.8m away in Living after a long sight gap.
- 116.90: accepted remote response: “Intruder visible in Living 3.8m away.”
  Its order changes the movement target to `player`, with matching acceptance
  and no same-time deferral. Movement is already underway at acceptance.
- 117.69: sight briefly drops. The replay preserves this recorded change.
- 118.29: figure observed 1.3m away; final positions independently give about
  1.29m three-dimensional separation and `sees=true`.

Thirty-six original position, facing and visibility samples are curated into
`src/content/mindlab-discovery-run.ts`. Position and facing interpolate between
samples; visibility changes only at the actual recorded sample. The presentation
holds the initial position to introduce the person, then holds the accepted model
response for reading. Its camera framing is editorial; the positions are recorded.

The beginning highlights the person for the visitor before shifting attention
to the seeker. That introductory emphasis is not the seeker's perception.
The model quote reflects the earlier sighting supplied in its input, rather than
a new range measurement at the instant the response was accepted.

The ending means visual contact restored and approach executed. It is not a
recorded capture, hiding-place clearance, game victory, successful learning,
finished SDK or proof of the project's broader generalization hypothesis.
No new model calls, Unity runs or MindLab repository changes were performed.
