import refinedStudio from "../../public/images/art-studio-v2.webp";
import firstStudio from "../../public/images/art-studio.webp";
import movement from "../../public/images/art-movement.webp";
import paintedForms from "../../public/images/art-painted-forms.webp";
import sculpture from "../../public/images/studio-sculpture.webp";
import bearStudy from "../../public/images/art-bear-study.webp";

export const artDirections = [
  {
    id: "bear-study",
    label: "Bear study",
    src: bearStudy,
    note: "Your bear mark, developed as a drawing with one part being revised.",
    position: "50% 50%",
  },
  {
    id: "drawing-and-making",
    label: "Drawing and making",
    src: refinedStudio,
    note: "Drawing, editable parts, books, software, and compact mechanisms.",
    position: "72% 60%",
  },
  {
    id: "studio",
    label: "First studio",
    src: firstStudio,
    note: "An early studio study. Relevant to making, but too nostalgic.",
    position: "50% 55%",
  },
  {
    id: "movement",
    label: "Movement",
    src: movement,
    note: "Movement and exploration. Strong atmosphere, a weaker connection to the projects.",
    position: "50% 55%",
  },
  {
    id: "painted-forms",
    label: "Painted forms",
    src: paintedForms,
    note: "Mechanical forms in oil paint. The objects remain abstract.",
    position: "50% 55%",
  },
  {
    id: "sculpture",
    label: "Original sculpture",
    src: sculpture,
    note: "The original artwork, kept here for comparison.",
    position: "50% 55%",
  },
] as const;
