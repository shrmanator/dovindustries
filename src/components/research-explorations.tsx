import Image from "next/image";
import { transportResearchDescription, vrResearchDescription } from "../content/research";

export function ResearchExplorations() {
  return <div className="studio-explorations" role="group" aria-label="Early explorations">
    <article id="vr" className="studio-vr" aria-labelledby="vr-title">
      <h3 id="vr-title">VR locomotion</h3>
      <figure className="studio-movement-art">
        <Image src="/images/art-vr-stepping.webp"
          alt="Painted study of a person wearing a headset and stepping in place"
          width={1200} height={800} sizes="(max-width: 700px) 90vw, (max-width: 1378px) 44vw, 596px" />
      </figure>
      <p>{vrResearchDescription}</p>
    </article>
    <article id="transport" className="studio-transport" aria-labelledby="transport-title">
      <h3 id="transport-title">Compact electric transport</h3>
      <blockquote className="studio-transport-question">
        <p>How small can an electric vehicle fold?</p>
      </blockquote>
      <p>{transportResearchDescription}</p>
    </article>
  </div>;
}
