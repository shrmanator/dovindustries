"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { MINDLAB_REPLAY_DURATION, stageStart, type ReplayStage } from "../utils/mindlab-replay";

export function useMindlabReplay(scene: RefObject<SVGSVGElement | null>) {
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const position = useRef(0);
  const manuallyControlled = useRef(false);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const finish = () => { position.current = MINDLAB_REPLAY_DURATION; setElapsed(position.current); setPlaying(false); };
    const observer = new IntersectionObserver(([entry]) => {
      setReducedMotion(reduced.matches);
      if (manuallyControlled.current) { observer.disconnect(); return; }
      if (!entry.isIntersecting || entry.intersectionRatio < .75) return;
      if (reduced.matches) finish();
      else setPlaying(true);
      observer.disconnect();
    }, { threshold: .75 });
    if (scene.current) observer.observe(scene.current);
    const preference = () => { setReducedMotion(reduced.matches); if (reduced.matches) finish(); };
    const visibility = () => { if (document.hidden) setPlaying(false); };
    reduced.addEventListener("change", preference);
    document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); reduced.removeEventListener("change", preference); document.removeEventListener("visibilitychange", visibility); };
  }, [scene]);

  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    let request: number;
    const tick = (now: number) => {
      position.current = Math.min(MINDLAB_REPLAY_DURATION, position.current + now - previous);
      previous = now;
      setElapsed(position.current);
      if (position.current === MINDLAB_REPLAY_DURATION) setPlaying(false);
      else request = requestAnimationFrame(tick);
    };
    request = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(request);
  }, [playing]);

  const toggle = () => {
    manuallyControlled.current = true;
    if (position.current >= MINDLAB_REPLAY_DURATION) { position.current = 0; setElapsed(0); }
    setPlaying(!playing);
  };
  const select = (stage: ReplayStage) => {
    manuallyControlled.current = true;
    position.current = stageStart[stage]; setElapsed(position.current); setPlaying(false);
  };
  const pause = () => { manuallyControlled.current = true; setPlaying(false); };
  return { elapsed, playing, reducedMotion, toggle, select, pause, complete: elapsed >= MINDLAB_REPLAY_DURATION };
}
