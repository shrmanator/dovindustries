import { mindlabRecordedRun } from "../content/mindlab-recorded-run";
import type { ReplayStage } from "../utils/mindlab-replay";

export function MindlabReplayStory({ stage, time }: { stage: ReplayStage; time: number }) {
  const secondSearch = time >= 32.29;
  const pantryPlan = time >= 28.75;
  const arrived = time >= 41.88;
  return <div className="mindlab-replay-story" aria-live="polite">
    <p className="mindlab-story-label">{stage === "observe" ? "Observed" : stage === "interpret" ? "SI interpretation" : "Executed action"}</p>
    <h4>{stage === "observe" ? secondSearch ? "Two searches. No sighting." : pantryPlan ? "Check the next spot." : "Nobody at the counter."
      : stage === "interpret" ? "An interpretation forms." : arrived ? "The next location reached." : "The decision becomes movement."}</h4>
    {stage === "observe" ? <>
      <p>{secondSearch ? "The counter and pantry were searched. Neither revealed the hider." : pantryPlan ? "With no sighting to go on, the seeker chooses the pantry." : "The seeker has searched the counter. Nothing was observed."}</p>
      {pantryPlan && !secondSearch && <blockquote>“{mindlabRecordedRun.initialBelief}”</blockquote>}
    </> : <>
      <blockquote>“{mindlabRecordedRun.belief}”</blockquote>
      <p>{stage === "interpret" ? "The model chooses the couch as its next location." : arrived ? "The movement record reaches the couch’s approach point. The hider is still unseen." : "The recorded positions trace the seeker leaving the kitchen for the couch in Living."}</p>
    </>}
  </div>;
}
