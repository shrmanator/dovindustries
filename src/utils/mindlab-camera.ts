const overview = [60, 30, 780, 550] as const;
const subjectView = [315, 305, 400, 400 * overview[3] / overview[2]] as const;

export function mindlabViewBox(elapsedMs: number, reducedMotion = false) {
  const elapsed = Math.max(0, Number.isFinite(elapsedMs) ? elapsedMs : 0);
  const focus = elapsed < 2000 ? 1 : reducedMotion ? 0 : Math.max(0, 1 - (elapsed - 2000) / 750);
  return overview.map((value, index) => value + (subjectView[index] - value) * focus).join(" ");
}
