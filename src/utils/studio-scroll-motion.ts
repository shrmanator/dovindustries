import { sceneProgress, settleProgress, type SceneProgress } from "./scroll-progress";

export function attachStudioMotion(root: HTMLElement) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const scenes = [...root.querySelectorAll<HTMLElement>("[data-flow-scene]")];
  const active = new Set<HTMLElement>();
  const bounds = new Map<HTMLElement, { top: number; height: number }>();
  const displayed = new Map<HTMLElement, SceneProgress>();
  let request: number | undefined;
  let previousTime = 0;
  let disposed = false;

  function schedule() {
    if (!disposed && !reduced.matches && !document.hidden && request === undefined) request = requestAnimationFrame(draw);
  }

  function draw(time: number) {
    request = undefined;
    if (disposed || reduced.matches || document.hidden) return;
    let unsettled = false;
    for (const scene of active) {
      const geometry = bounds.get(scene);
      if (!geometry) continue;
      const target = sceneProgress(geometry.top, geometry.height, scrollY, innerHeight);
      const next = settleProgress(displayed.get(scene) || target, target, time - previousTime);
      displayed.set(scene, next.value);
      for (const key of ["enter", "travel", "exit"] as const) scene.style.setProperty(`--flow-${key}`, next.value[key].toFixed(4));
      unsettled ||= !next.settled;
    }
    previousTime = time;
    if (unsettled) schedule();
  }

  function measure() {
    if (disposed) return;
    for (const scene of scenes) {
      const rect = scene.getBoundingClientRect();
      bounds.set(scene, { top: rect.top + scrollY, height: rect.height });
    }
    schedule();
  }

  function cancel() {
    if (request !== undefined) cancelAnimationFrame(request);
    request = undefined;
  }

  function preferenceChanged() {
    root.classList.toggle("flow-enabled", !reduced.matches);
    if (reduced.matches) cancel();
    else measure();
  }

  function visibilityChanged() {
    if (document.hidden) cancel();
    else { previousTime = 0; schedule(); }
  }

  const intersection = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const scene = entry.target as HTMLElement;
      if (entry.isIntersecting) active.add(scene);
      else active.delete(scene);
    }
    schedule();
  }, { rootMargin: "180px" });
  scenes.forEach(scene => intersection.observe(scene));
  const resize = new ResizeObserver(measure);
  resize.observe(root);
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", measure);
  document.addEventListener("visibilitychange", visibilityChanged);
  reduced.addEventListener("change", preferenceChanged);
  document.fonts.ready.then(measure);
  preferenceChanged();

  return () => {
    disposed = true;
    cancel();
    intersection.disconnect();
    resize.disconnect();
    removeEventListener("scroll", schedule);
    removeEventListener("resize", measure);
    document.removeEventListener("visibilitychange", visibilityChanged);
    reduced.removeEventListener("change", preferenceChanged);
    root.classList.remove("flow-enabled");
    for (const scene of scenes) for (const key of ["enter", "travel", "exit"]) scene.style.removeProperty(`--flow-${key}`);
  };
}
