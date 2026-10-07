import { bearSequenceFrame } from "../utils/bear-sequence";

export function BearPromptComposer({ progress, playing, onSend }: {
  progress: number; playing: boolean; onSend: () => void;
}) {
  const frame = bearSequenceFrame(progress);
  return <form className="bear-composer" aria-label="Example prompt composer"
    data-sending={frame.sending} onSubmit={event => { event.preventDefault(); onSend(); }}>
    <div className="bear-composer-text">
      <input type="text" readOnly value={frame.composerText} aria-label="Example drawing prompt"
        placeholder={progress < 74 ? "Describe what to draw" : "Describe an edit"} />
    </div>
    <button type="submit" aria-label="Send example prompt" disabled={!frame.typing || !playing}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    </form>;
}
