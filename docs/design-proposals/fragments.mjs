import { artwork, copy } from "./content.mjs";

export function header() {
  return `<header class="site-head"><a class="brand" href="#vibe-draw">${artwork("bear-mark-clean.webp", "")}
    <span>dovindustries</span></a><nav class="desktop-nav" aria-label="Primary"><a href="#work">Work</a>
    <a href="#research">Research</a><a href="#contact">Contact</a></nav>
    <details class="mobile-nav"><summary>Menu <span aria-hidden="true">☰</span></summary>
    <nav aria-label="Mobile"><a href="#work">Work</a><a href="#research">Research</a><a href="#contact">Contact</a></nav></details></header>`;
}

export function bear() {
  return `<figure class="bear-stage">${artwork("art-bear-paw-edit.webp", "Painted bear with its front paw lifted")}
    <div class="prompt-demo" aria-label="Example prompt"><span>Lift its front paw.</span><span class="complete" aria-label="Complete">✓</span></div>
    <span class="replay-demo">↻ <span>Replay</span></span></figure>`;
}

export function donation() {
  return `<figure class="donation-scene" aria-label="Study of DigiDov’s donation amount selector">
    <div class="donation-sheet"><div class="donation-top"><strong>digiDov</strong><span>USDC</span></div>
      <h4>Choose an amount</h4><div class="amount"><b>$20</b><span>~20.000 USDC</span></div>
      <div class="amount selected"><b>$50</b><span>~50.000 USDC</span></div>
      <div class="amount"><b>$100</b><span>~100.000 USDC</span></div><p>Or enter your own</p>
    </div></figure>`;
}

export function projectIntro(name, purpose, detail, href, destination) {
  return `<div class="project-copy"><h3>${name}</h3><p class="purpose">${purpose}</p>
    <p class="detail">${detail}</p><a class="project-link" href="${href}" target="_blank" rel="noopener noreferrer">${destination}<span aria-hidden="true">↗</span></a></div>`;
}

export function research() {
  return `<section id="research" class="more-research"><h2>More research</h2>
    <article class="vr-study">${artwork("art-vr-stepping.webp", "Painted study of a person stepping while wearing a VR headset")}
      <div><h3>VR locomotion</h3><p>${copy.vr}</p></div></article>
    <article class="transport-study"><h3>Compact electric transport</h3><p>${copy.transport}</p></article>
  </section>`;
}

export function footer() {
  return `<footer id="contact"><div class="contact-intro"><h2>Discuss the work.</h2>
    <p>For research collaboration, or questions about Simply Sefer and DigiDov.</p></div>
    <a class="contact-email" href="mailto:contact@dovindustries.com">contact@dovindustries.com</a>
    <div class="footer-base"><span>dovindustries © 2026</span><a href="https://github.com/shrmanator/dovindustries">GitHub ↗</a></div></footer>`;
}
