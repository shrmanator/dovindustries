import { bindProductStudies } from "./product-studies.mjs";
import { bindMotion } from "./motion-driver.mjs";

const root = document.querySelector("#motion-study");
bindProductStudies(root);
root.addEventListener("click", event => {
  if (event.target.closest(".mobile-nav a")) root.querySelector(".mobile-nav").open = false;
});
bindMotion(root, document.querySelector("[data-motion-toggle]"));
