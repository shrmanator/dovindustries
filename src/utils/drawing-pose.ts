export const WING_LIMITS = { min: -30, max: 35, initial: 5 } as const;
export function wingTransform(angle: number): string {
  const finiteAngle = Number.isFinite(angle) ? angle : WING_LIMITS.initial;
  const clamped = Math.min(WING_LIMITS.max, Math.max(WING_LIMITS.min, finiteAngle));
  return "rotate(" + clamped + " 267 209)";
}
