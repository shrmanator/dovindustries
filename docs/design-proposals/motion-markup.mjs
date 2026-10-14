import { artwork, copy } from "./content.mjs";
import { header, footer } from "./fragments.mjs";
import { amountStudy } from "./product-studies.mjs";

const sceneImage = (name, description, priority = false) => artwork(name, description)
  .replace('<img ', `<img decoding="async" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} `);

export function motionMarkup() { return `${header()}<main>
  <section class="motion-hero" id="vibe-draw" data-scene="hero">
    <div class="opening-title"><h1>Vibe Draw</h1><p>Current research</p></div>
    <figure class="paint-window bear-window" data-window>
      ${sceneImage("art-bear-paw-edit.webp", "Painted bear with its front paw lifted", true)}
      <span class="bear-complete" aria-label="Drawing edit complete">✓</span>
    </figure>
    <div class="opening-caption"><p>${copy.vibe}</p>
      <a href="research.html">About the research <span aria-hidden="true">↗</span></a></div>
  </section>
  <section class="released-motion" id="work">
    <div class="chapter-title" data-scene="title"><h2>Released projects</h2></div>
    <article class="sefer-motion" data-scene="sefer">
      <div class="project-heading"><h3>Simply Sefer</h3><p>${copy.sefer}</p></div>
      <figure class="paint-window sefer-window" data-window>
        ${sceneImage("art-sefer-exchange-v3.webp", "Painted study of a sefer passing between two readers")}
      </figure>
      <div class="project-follow"><p>${copy.seferDetail}</p>
        <a href="https://simplysefer.com" target="_blank" rel="noopener noreferrer">Explore the marketplace <span aria-hidden="true">↗</span></a></div>
    </article>
    <article class="digi-motion" data-scene="digi">
      <div class="digi-copy"><h3>DigiDov</h3><p class="purpose">${copy.digi}</p>
        <p>${copy.digiDetail}</p><a href="https://www.digidov.com" target="_blank" rel="noopener noreferrer">Explore DigiDov <span aria-hidden="true">↗</span></a></div>
      <div class="digi-window" data-window>${amountStudy()}</div>
    </article>
  </section>
  <section class="investigations" id="research" data-scene="research">
    <h2>More research</h2>
    <article class="vr-motion"><figure class="paint-window" data-window>
      ${sceneImage("art-vr-stepping.webp", "Painted study of a person stepping while wearing a VR headset")}</figure>
      <div><h3>VR locomotion</h3><p>${copy.vr}</p></div></article>
    <article class="transport-motion"><h3>Compact electric transport</h3><p>${copy.transport}</p></article>
  </section>
</main>${footer().replace('id="contact"', 'id="contact" data-scene="contact"')}`;
}
