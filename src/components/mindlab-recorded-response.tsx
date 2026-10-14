"use client";

import { useRef } from "react";
import { mindlabRecordedRun } from "../content/mindlab-discovery-run";

export function MindlabRecordedResponse({ onInspect }: { onInspect: () => void }) {
  const disclosure = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (!disclosure.current) return;
    disclosure.current.open = false;
    disclosure.current.querySelector("summary")?.focus();
  };
  return <details className="mindlab-recorded-response" ref={disclosure}
    onToggle={event => { if (event.currentTarget.open) onInspect(); }}
    onKeyDown={event => { if (event.key === "Escape") { close(); event.stopPropagation(); } }}>
    <summary>Recorded Unity example</summary>
    <div className="mindlab-response-content">
      <div className="mindlab-response-heading">
        <span>Recorded response</span>
        <button type="button" onClick={close} aria-label="Close recorded response">Close</button>
      </div>
      <blockquote>“{mindlabRecordedRun.belief}”</blockquote>
      <span>Response accepted at {mindlabRecordedRun.approachOrder.toFixed(2)}s.</span>
    </div>
  </details>;
}
