export const clamp = value => Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
export const ease = value => { const t = clamp(value); return t * t * (3 - 2 * t); };

export function sceneValues(top, height, scroll, viewport) {
  if (!(height > 0 && viewport > 0)) return { enter: 1, travel: 0, exit: 0 };
  return {
    enter: ease((scroll + viewport - top) / (viewport * 0.65)),
    travel: clamp((scroll + viewport - top) / (height + viewport)),
    exit: ease((scroll - top) / height),
  };
}
