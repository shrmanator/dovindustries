import { mindlabRecordedRun } from "../content/mindlab-recorded-run";
import type { ReplayStage } from "../utils/mindlab-replay";

export function MindlabReplayStory({ stage, time }: { stage: ReplayStage; time: number }) {
  const secondSearch = time >= 32.29;
  const pantryPlan = time >= 28.75;
  const arrived = time >= 41.88;
  return <div className="mindlab-replay-story" aria-live="polite">
    <p className="mindlab-story-label">{stage === "observe" ? "Observed" : stage === "interpret" ? "SI interpretation" : "Movement"}</p>
    <h4>{stage === "observe" ? secondSearch ? "Two searches. No sighting." : pantryPlan ? "Next, the pantry." : "Nobody at the counter."
      : stage === "interpret" ? "Search the living room next." : arrived ? "At the couch. Hider still unseen." : "Heading to the couch."}</h4>
    {stage === "observe" ? <>
      <p>{secondSearch ? "Both the counter and pantry were empty." : pantryPlan ? "No sighting yet. It chooses another place to search." : "The seeker searches the counter and finds no one."}</p>
    </> : <>
      {stage === "interpret" && <blockquote>“{mindlabRecordedRun.belief}”</blockquote>}
      <p>{stage === "interpret" ? "It chooses the couch." : arrived ? "This excerpt ends here, before the search is resolved." : "The seeker moves from the kitchen into the living room."}</p>
    </>}
  </div>;
}
