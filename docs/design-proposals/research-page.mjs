import { header, footer } from "./fragments.mjs";
import { researchDrawing, pawTransform } from "./research-drawing.mjs";

const root = document.querySelector("#research-composition");
root.innerHTML = `${header().replaceAll('href="#', 'href="index.html?direction=a&width=desktop#')}
  <main class="research-page">
    <a class="research-back" href="index.html?direction=a&width=desktop#vibe-draw">Back to Vibe Draw</a>
    <div class="research-intro"><h1>Inside Vibe Draw</h1>
      <p>In the bear example, lifting the paw also changes its leg.</p></div>
    <div class="research-example">
      <figure class="connected-drawing"><div class="connected-stage">${researchDrawing()}
        <div class="drawing-controls"><button type="button" id="lift-paw" aria-pressed="false">Lift the paw</button></div></div>
        <div class="stroke-legend"><span>Connected strokes</span><span>Unchanged strokes</span></div>
        <figcaption>Drawing study: the highlighted strokes move together.</figcaption></figure>
      <div class="research-explanation"><h2>Keep working on the same drawing.</h2>
        <p>We’re researching super intelligence (SI) that works with individual strokes and keeps track of the parts they belong to.</p>
        <p>Here, the blue strokes belong to one front leg. Move it and those marks stay together. The rest of the drawing stays in place.</p>
        <p>The goal is to make this kind of edit through conversation or by moving a part directly.</p>
      </div></div>
  </main>${footer({ invitation: "Discuss Vibe Draw.", description: "For questions about the research or collaboration on editable drawing systems." })}`;

const liftButton = root.querySelector("#lift-paw");
liftButton.addEventListener("click", () => {
  const lifted = liftButton.getAttribute("aria-pressed") !== "true";
  liftButton.setAttribute("aria-pressed", String(lifted));
  liftButton.textContent = lifted ? "Lower the paw" : "Lift the paw";
  root.querySelector("[data-paw-group]").setAttribute("transform", pawTransform(lifted ? -18 : 0));
  root.querySelector(".connected-stage svg").setAttribute("aria-label", `Bear drawing study with its front paw ${lifted ? "lifted" : "lowered"}; the blue strokes move together`);
});

function setWidth(width) {
  const valid = ["mobile", "narrow"].includes(width) ? width : "desktop";
  root.className = `composition research-composition width-${valid}`;
  document.querySelectorAll("[data-research-width]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.researchWidth === valid));
  });
  document.querySelectorAll('a[href*="index.html"]').forEach(link => {
    const target = new URL(link.href);
    target.searchParams.set("width", valid);
    link.href = target;
  });
  const url = new URL(location.href);
  url.searchParams.set("width", valid);
  history.replaceState(null, "", url);
}
document.querySelectorAll("[data-research-width]").forEach(button => {
  button.addEventListener("click", () => { setWidth(button.dataset.researchWidth); window.scrollTo(0, 0); });
});
setWidth(new URLSearchParams(location.search).get("width"));
