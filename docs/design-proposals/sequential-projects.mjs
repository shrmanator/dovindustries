import { artwork, copy } from "./content.mjs";
import { seferListing, amountStudy } from "./product-studies.mjs";

function project({ name, className, purpose, detail, art, study = "", href, destination }) {
  return `<article class="project ${className}">
    <header class="project-intro"><h3>${name}</h3><p class="purpose">${purpose}</p></header>
    <div class="project-art">${art}</div>
    <div class="project-detail"><p class="detail">${detail}</p>${study}
      <a class="project-link" href="${href}" target="_blank" rel="noopener noreferrer">${destination}<span aria-hidden="true">↗</span></a>
    </div></article>`;
}

export function sequentialProjects() {
  return project({
    name: "Simply Sefer", className: "sefer-project", purpose: copy.sefer, detail: copy.seferDetail,
    art: artwork("art-sefer-exchange-v3.webp", "Painted study of a sefer passing between two readers"),
    study: seferListing(), href: "https://simplysefer.com", destination: "Explore the marketplace",
  }) + project({
    name: "DigiDov", className: "digi-project", purpose: copy.digi, detail: copy.digiDetail,
    art: amountStudy(), href: "https://www.digidov.com", destination: "Explore DigiDov",
  });
}
