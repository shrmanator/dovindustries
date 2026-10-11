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
    verdict: "Recommended foundation. Each released product gets its own scene, with a clear change of pace after Vibe Draw.",
    strengths: "The bear remains the lead. Simply Sefer and DigiDov have different proportions and colors, while common typography holds the page together. Early research is quieter. Mobile preserves the same reading order.",
    weakness: "The longer page needs genuinely useful product content. The artworks and amount selector alone do not justify elaborate presentations. Keep the wording concise; avoid adding feature grids to fill space.",
  },
  b: {
    title: "B · Staggered collection",
    verdict: "A more compact alternative. It puts the art first and gives the released projects a deliberately unequal arrangement.",
    strengths: "The opening has less competing text. Projects feel collected rather than boxed into identical cards. The lower page is shorter, and mobile becomes a simple sequence.",
    weakness: "The stagger can suggest Simply Sefer is more important than DigiDov. It is less useful for explaining product workflows, and the strongest desktop composition is lost on mobile. Avoid overlap that exists only for effect.",
  },
};
