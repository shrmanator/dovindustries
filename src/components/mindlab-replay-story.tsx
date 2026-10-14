import { mindlabRecordedRun } from "../content/mindlab-discovery-run";
import type { ReplayStage } from "../utils/mindlab-replay";

export function MindlabReplayStory({ stage, time }: { stage: ReplayStage; time: number }) {
  const seen = time >= mindlabRecordedRun.firstSighting;
  return <div className="mindlab-replay-story" aria-live="polite">
    <p className="mindlab-story-label">{stage === "subject" ? "Recorded example" : stage === "observe" ? "Perception" : stage === "interpret" ? "Model response" : stage === "act" ? "Unity action" : "Result"}</p>
    <h4>{stage === "subject" ? "The person to find." : stage === "observe" ? seen ? "A sighting in Living." : "Now follow the seeker."
      : stage === "interpret" ? "Approach and watch the person." : stage === "act" ? "Unity executes the order." : "Found the person."}</h4>
    <p>{stage === "subject" ? "They’re in Living, out of the seeker’s view." : stage === "observe" ? seen ? "Turning brings the person into view." : "The seeker turns and continues looking."
      : stage === "interpret" ? `“${mindlabRecordedRun.belief}”` : stage === "act" ? "The character moves toward the person." : "Sighting confirmed. The seeker closes to about 1.3 metres."}</p>
  </div>;
}
