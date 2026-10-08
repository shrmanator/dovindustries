"use client";

import { useEffect, useRef, useState } from "react";
import { BEAR_SEQUENCE_DURATION, bearSequenceFrame } from "../utils/bear-sequence";
import { BearStrokeCanvas } from "./bear-stroke-canvas";
import { BearPromptCaption } from "./bear-prompt-caption";

export function BearSequence() {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const position = useRef(0);
  const canvas = useRef<HTMLDivElement>(null);
  const frame = bearSequenceFrame(progress);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (reducedMotion.matches) {
        position.current = 100;
        setProgress(100);
      } else setPlaying(true);
      observer.disconnect();
    }, { threshold: 0.35 });
    if (canvas.current) observer.observe(canvas.current);
    const stopMotion = () => {
      if (reducedMotion.matches) setPlaying(false);
    };
    const stopWhenHidden = () => {
      if (document.hidden) setPlaying(false);
    };
    reducedMotion.addEventListener("change", stopMotion);
    document.addEventListener("visibilitychange", stopWhenHidden);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", stopMotion);
      document.removeEventListener("visibilitychange", stopWhenHidden);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    let request: number;
    const advance = (now: number) => {
      const next = Math.min(100, position.current + (now - previous) / BEAR_SEQUENCE_DURATION * 100);
      previous = now;
      position.current = next;
      setProgress(next);
      if (next === 100) setPlaying(false);
      else request = requestAnimationFrame(advance);
    };
    request = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(request);
  }, [playing]);

  const togglePlayback = () => {
    if (progress >= 100) {
      position.current = 0;
      setProgress(0);
    }
    setPlaying(!playing);
  };

  return <figure className="bear-sequence">
    <div className="bear-conversation" aria-label="Example sent prompt">
      {frame.message && <p className="bear-message" key={frame.message} aria-live="polite">{frame.message}</p>}
    </div>
    <div className="bear-canvas" ref={canvas} role="img"
      aria-label="A bear develops from a charcoal sketch into a blue painting, then lifts its front paw.">
      <BearStrokeCanvas progress={progress} playing={playing} />
    </div>
    <div className="bear-controls">
      {progress < 100 && <BearPromptCaption progress={progress} />}
      <button type="button" className="bear-play" onClick={togglePlayback}>
        {playing ? "Pause" : progress >= 100 ? "Replay" : "Play"}
      </button>
    </div>
  </figure>;
}
