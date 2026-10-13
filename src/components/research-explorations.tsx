import Image from "next/image";
import { transportResearchDescription, vrResearchDescription } from "../content/research";

export function ResearchExplorations() {
  return <div className="studio-explorations" role="group" aria-label="Early explorations">
    <article id="vr" className="studio-vr" aria-labelledby="vr-title">
      <div>
        <h3 id="vr-title">VR locomotion</h3>
        <p>{vrResearchDescription}</p>
      </div>
      <figure className="studio-movement-art">
        <Image src="/images/art-vr-stepping.webp"
          alt="Painted study of a person wearing a headset and stepping in place"
          width={1200} height={800} sizes="(max-width: 700px) 92px, 136px" />
      </figure>
    </article>
    <article id="transport" className="studio-transport" aria-labelledby="transport-title">
      <h3 id="transport-title">Compact electric transport</h3>
      <p>{transportResearchDescription}</p>
    </article>
  </div>;
}
