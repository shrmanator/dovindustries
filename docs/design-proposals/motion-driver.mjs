import { sceneValues } from "./motion-values.mjs";

export function bindMotion(root, toggle) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const scenes = [...root.querySelectorAll("[data-scene]")];
  const active = new Set();
  const bounds = new Map();
  const displayed = new Map();
  let enabled = !reduced.matches;
  let scheduled = false;
  let previousTime = 0;

  function draw(time) {
    scheduled = false;
    if (!enabled || document.hidden) return;
    const blend = 1 - Math.exp(-Math.min(50, time - previousTime || 16) / 90);
    previousTime = time;
    let unsettled = false;
    for (const scene of active) {
      const { top, height } = bounds.get(scene);
      const values = sceneValues(top, height, scrollY, innerHeight);
      const current = displayed.get(scene) || values;
      for (const key of ["enter", "travel", "exit"]) {
        const distance = values[key] - current[key];
        current[key] = Math.abs(distance) < .0005 ? values[key] : current[key] + distance * blend;
        if (Math.abs(distance) >= .0005) unsettled = true;
        scene.style.setProperty(`--${key}`, current[key].toFixed(4));
      }
      displayed.set(scene, current);
    }
    if (unsettled) schedule();
  }

  function schedule() {
    if (!scheduled && enabled && !document.hidden) { scheduled = true; requestAnimationFrame(draw); }
  }

  function measure() {
    for (const scene of scenes) {
      const rect = scene.getBoundingClientRect();
      bounds.set(scene, { top: rect.top + scrollY, height: rect.height });
    }
    schedule();
  }

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) active.add(entry.target);
      else active.delete(entry.target);
    }
    schedule();
  }, { rootMargin: "180px" });
  scenes.forEach(scene => observer.observe(scene));

  function setEnabled(value) {
    enabled = value && !reduced.matches;
    root.classList.toggle("motion-enabled", enabled);
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.textContent = reduced.matches ? "Reduced motion" : enabled ? "Motion on" : "Motion off";
    toggle.disabled = reduced.matches;
    measure();
  }

  toggle.addEventListener("click", () => setEnabled(!enabled));
  reduced.addEventListener("change", () => setEnabled(!reduced.matches));
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", measure);
  document.addEventListener("visibilitychange", schedule);
  new ResizeObserver(measure).observe(root);
  document.fonts.ready.then(measure);
  setEnabled(enabled);
}
