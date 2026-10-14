import { artwork, copy } from "./content.mjs";
import { header, bear, donation, projectIntro, research, footer } from "./fragments.mjs";
import { sequentialProjects } from "./sequential-projects.mjs";

const seferArt = () => artwork("art-sefer-exchange-v3.webp", "Painted study of a sefer passing between two readers");
const seferCopy = () => projectIntro("Simply Sefer", copy.sefer, copy.seferDetail, "https://simplysefer.com", "Explore the marketplace");
const digiCopy = () => projectIntro("DigiDov", copy.digi, copy.digiDetail, "https://www.digidov.com", "Explore DigiDov");

function researchLink(study = false) {
  const href = study ? "research.html" : "https://www.dovindustries.com/vibe-draw";
  return `<a class="research-link" href="${href}">About the research <span aria-hidden="true">↗</span></a>`;
}

export function sequential() {
  return `${header()}<main>
    <section id="vibe-draw" class="vibe-section">
      <div class="vibe-heading"><h1>Vibe Draw</h1><p>Current research at Dovindustries</p></div>
      ${bear()}<div class="vibe-caption"><p>${copy.vibe}</p>${researchLink(true)}</div>
    </section>
    <section id="work" class="released"><h2>Released projects</h2>
      ${sequentialProjects()}
    </section>${research()}
  </main>${footer()}`;
}

export function staggered() {
  return `${header()}<main>
    <section id="vibe-draw" class="vibe-section">
      <div class="vibe-heading"><h1>Vibe Draw</h1><p>Current research at Dovindustries</p></div>
      ${bear()}<div class="vibe-caption"><p>${copy.vibe}</p>${researchLink()}</div>
    </section>
    <section id="work" class="released"><h2>Released projects</h2><div class="project-collection">
      <article class="project sefer-project"><div class="project-image">${seferArt()}</div>${seferCopy()}</article>
      <article class="project digi-project">${donation()}${digiCopy()}</article>
    </div></section>${research()}
  </main>${footer()}`;
}
