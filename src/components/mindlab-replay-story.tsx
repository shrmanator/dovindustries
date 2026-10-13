import { mindlabRecordedRun } from "../content/mindlab-discovery-run";
import type { ReplayStage } from "../utils/mindlab-replay";

export function MindlabReplayStory({ stage, time, onInspect }: { stage: ReplayStage; time: number; onInspect: () => void }) {
  const seen = time >= mindlabRecordedRun.firstSighting;
  return <div className="mindlab-replay-story" aria-live="polite">
    <p className="mindlab-story-label">{stage === "subject" ? "The subject" : stage === "observe" ? "Observation" : stage === "interpret" ? "SI decision" : stage === "act" ? "Movement" : "Found"}</p>
    <h4>{stage === "subject" ? "The person to find." : stage === "observe" ? seen ? "A sighting in Living." : "Now follow the seeker."
      : stage === "interpret" ? "Move closer to the person." : stage === "act" ? "Approaching the person." : "Found the person."}</h4>
    <p>{stage === "subject" ? "They’re in Living, out of the seeker’s view." : stage === "observe" ? seen ? "Turning brings the person into view." : "The seeker turns and continues looking."
      : stage === "interpret" ? "After the sighting, it changes its target to the person." : stage === "act" ? "Its new orders target the person directly." : "Sighting confirmed. The seeker closes to about 1.3 metres."}</p>
    {stage === "interpret" && <details className="mindlab-recorded-response" onToggle={event => { if (event.currentTarget.open) onInspect(); }}>
      <summary>Recorded response</summary>
      <blockquote>“{mindlabRecordedRun.belief}”</blockquote>
      <span>Response accepted at {mindlabRecordedRun.approachOrder.toFixed(2)}s.</span>
    </details>}
  </div>;
}
