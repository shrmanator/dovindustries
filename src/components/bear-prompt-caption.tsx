import { bearSequenceFrame } from "../utils/bear-sequence";

export function BearPromptCaption({ progress }: { progress: number }) {
  const frame = bearSequenceFrame(progress);
  return <div className="bear-prompt-caption" aria-label="Animated drawing example">
    <span className="bear-example-label">Animated example</span>
    <p className="bear-prompt-text" aria-hidden="true">{frame.promptText}</p>
  </div>;
}
