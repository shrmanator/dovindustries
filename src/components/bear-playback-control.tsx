type BearPlaybackControlProps = {
  playing: boolean;
  complete: boolean;
  onToggle: () => void;
};

export function BearPlaybackControl({ playing, complete, onToggle }: BearPlaybackControlProps) {
  const action = playing ? "Pause" : complete ? "Replay" : "Play";
  const state = playing ? "playing" : complete ? "ended" : "paused";

  return <button type="button" className={`bear-playback is-${state}`}
    aria-label={action} title={playing ? "Click to pause" : `${action} drawing`} onClick={onToggle}>
    <span className="bear-playback-control" aria-hidden="true">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {playing ? <path d="M9 5v14M15 5v14" /> : complete
          ? <><path d="M4 5v5h5M4.5 10a8 8 0 1 1 0 5" /></>
          : <path d="m9 5 10 7-10 7Z" fill="currentColor" stroke="none" />}
      </svg>
      {!playing && <span>{action}</span>}
    </span>
  </button>;
}
