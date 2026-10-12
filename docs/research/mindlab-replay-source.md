# MindLab replay source

The portfolio excerpt uses run `20261012-145119` from `shrmanator/MindLab`,
revision `d989888f5e563784d29298cd37c43b4f71a53ed1` on the unmerged
`review-issue14` branch. It is a schematic replay, not gameplay footage.

Sources: `Transcripts/events-20261012-145119.jsonl` and the corresponding
`poses` file. The hidden player was staged in Bedroom at world X/Z `(8, 2)`.
That position stays fixed throughout the excerpt; all seeker samples report
no sighting. The floorplan is a simplified reference to the Unity fixture;
it is not a captured wall/collider registry.

Recorded events used:

- 25.04: Counter search reports nothing observed.
- 28.75: accepted remote response: “No cues yet, intruder could be anywhere.”
  Its order moves to Pantry.
- 30.69: Pantry arrival recorded; 32.29: Pantry search reports nothing observed.
- 35.95: accepted remote response: “Kitchen clear, need systematic sweep outward.”
  Its order moves to Couch; 36.01: motor onset recorded.
- 41.88: Couch arrival recorded. Positions independently show movement from
  Kitchen into Living, finishing at the couch's approach point.

Both displayed model responses have matching remote acceptance records and
no same-time deferral. The rejected/stale 26.06 response is not presented as
an executed decision. The displayed interpretation is not asserted as world truth.

Forty original seeker position/facing samples are curated into
`src/content/mindlab-recorded-run.ts`; position interpolation is used between
samples. Source timestamps stay visible. The playback clock includes a hold
at 35.95 seconds so the response can be read. The UI says it is paced for reading.

This excerpt demonstrates observed evidence, a model-authored interpretation,
and actual physical movement. It does not establish novel generalization,
successful learning, a complete SDK, or acceptance of the wider research branch.
