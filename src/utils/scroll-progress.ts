export type SceneProgress = { enter: number; travel: number; exit: number };
const still: SceneProgress = { enter: 1, travel: 0.5, exit: 0 };
const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };

export function sceneProgress(top: number, height: number, scroll: number, viewport: number): SceneProgress {
  if (![top, height, scroll, viewport].every(Number.isFinite) || height <= 0 || viewport <= 0) return { ...still };
  return {
    enter: ease((scroll + viewport - top) / (viewport * 0.65)),
    travel: clamp((scroll + viewport - top) / (height + viewport)),
    exit: ease((scroll - top) / height),
  };
}

export function settleProgress(current: SceneProgress, target: SceneProgress, elapsed: number) {
  const delta = Number.isFinite(elapsed) && elapsed > 0 ? Math.min(50, elapsed) : 16;
  const blend = 1 - Math.exp(-delta / 90);
  const value = { ...current };
  let settled = true;
  for (const key of ["enter", "travel", "exit"] as const) {
    const distance = target[key] - current[key];
    if (Math.abs(distance) < 0.0005) value[key] = target[key];
    else { value[key] += distance * blend; settled = false; }
  }
  return { value, settled };
}
