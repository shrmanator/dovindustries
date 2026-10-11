import { sequential, staggered } from "./layouts.mjs";
import { reviews } from "./content.mjs";

const composition = document.querySelector("#composition");
const notes = document.querySelector("#review-notes");
const params = new URLSearchParams(location.search);
let direction = params.get("direction") === "b" ? "b" : "a";
let width = params.get("width") === "mobile" ? "mobile" : "desktop";
const statePicker = document.querySelector("#presentation-state");

function renderState() {
  composition.dataset.state = statePicker.value;
  composition.querySelector(".replay-demo").innerHTML = statePicker.value === "paused"
    ? "▶ <span>Play</span>" : "↻ <span>Replay</span>";
}

function render() {
  composition.className = `composition direction-${direction} width-${width}`;
  composition.innerHTML = direction === "a" ? sequential() : staggered();
  renderState();
  document.querySelectorAll("[data-direction]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.direction === direction));
  });
  document.querySelectorAll("[data-width]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.width === width));
  });
  const review = reviews[direction];
  notes.innerHTML = `<h2>${review.title}</h2><p><strong>${review.verdict}</strong></p>
    <p>${review.strengths}</p><p><strong>Tradeoff:</strong> ${review.weakness}</p>
    <p class="scope-note">Static composition study using existing artwork and verified project descriptions.
    The prompt and replay are shown in place; animation and model behavior are not simulated here.</p>`;
  const next = new URL(location.href);
  next.searchParams.set("direction", direction);
  next.searchParams.set("width", width);
  history.replaceState(null, "", next);
}

document.querySelectorAll("[data-direction]").forEach(button => {
  button.addEventListener("click", () => { direction = button.dataset.direction; render(); window.scrollTo(0, 0); });
});
document.querySelectorAll("[data-width]").forEach(button => {
  button.addEventListener("click", () => { width = button.dataset.width; render(); window.scrollTo(0, 0); });
});
document.querySelector("#notes-toggle").addEventListener("click", event => {
  notes.hidden = !notes.hidden;
  event.currentTarget.setAttribute("aria-expanded", String(!notes.hidden));
});
statePicker.addEventListener("change", renderState);
render();
