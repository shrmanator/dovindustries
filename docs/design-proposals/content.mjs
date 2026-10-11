const imageBase = "../../public/images/";

export function artwork(name, description, className = "") {
  return `<img class="${className}" src="${imageBase}${name}" alt="${description}">`;
}

export const copy = {
  vibe: "We’re building SI that draws with individual strokes and can revise specific parts of a drawing through conversation.",
  sefer: "A marketplace for seforim and Judaica.",
  seferDetail: "Identify a sefer from a photo, find a copy, or list one from your shelf.",
  digi: "Crypto donations for nonprofits.",
  digiDetail: "Accept ETH and USDC through a donation link, with receipts sent automatically.",
  vr: "Early Unity experiments record headset acceleration to explore moving through VR by walking in place, without extra trackers.",
  transport: "An early exploration of a folding electric vehicle, starting with how its frame could accommodate the battery and motor.",
};

export const reviews = {
  a: {
    title: "A · Sequential presentations",
    verdict: "Recommended foundation, now with a real marketplace detail and a research continuation you can explore.",
    strengths: "The bear remains the lead. Simply Sefer includes a listing verified on its public site. DigiDov’s selector responds to amount choices. About the research opens a drawing study with connected strokes instead of repeating the painting. Early research is quieter.",
    weakness: "The listing gives Simply Sefer more visual density; keep it subordinate to the project introduction. DigiDov’s selector explains one interaction, not the full donation workflow. The hand-authored drawing study explains the research goal; it is not model output. This still needs a final visual identity and performance review before implementation.",
  },
  b: {
    title: "B · Staggered collection",
    verdict: "A more compact alternative. It puts the art first and gives the released projects a deliberately unequal arrangement.",
    strengths: "The opening has less competing text. Projects feel collected rather than boxed into identical cards. The lower page is shorter, and mobile becomes a simple sequence.",
    weakness: "The stagger can suggest Simply Sefer is more important than DigiDov. It is less useful for explaining product workflows, and the strongest desktop composition is lost on mobile. Avoid overlap that exists only for effect.",
  },
};
