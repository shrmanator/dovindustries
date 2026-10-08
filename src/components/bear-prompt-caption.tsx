import { bearSequenceFrame } from "../utils/bear-sequence";

export function BearPromptCaption({ progress }: { progress: number }) {
  const frame = bearSequenceFrame(progress);
  const composing = frame.typing || frame.sending;
  return <div className={`bear-prompt-caption${composing ? " is-composing" : " is-sent"}${progress >= 100 ? " is-complete" : ""}`}
    aria-label={progress >= 100 ? "Drawing complete" : "Animated prompt demonstration"}>
    <p className="bear-prompt-text" aria-hidden="true">
      {composing ? frame.promptText : frame.message}
      {frame.typing && <span className="bear-caret" />}
    </p>
    <span className="bear-send" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d={composing ? "M12 18V6m-5 5 5-5 5 5" : "m6 12 4 4 8-8"}
          stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>;
}
