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
      <figure className="studio-transport-art">
        <Image src="/images/art-transport-streamlined.webp"
          alt="Painted folded scooter concept with a slim silver body, covered wheel hubs and one red steering column nested against the platform"
          width={1536} height={1024} sizes="(max-width: 700px) 90vw, (max-width: 1378px) 44vw, 596px" />
      </figure>
      <div className="studio-exploration-copy">
        <p className="studio-transport-caption">How small can an electric vehicle fold?</p>
        <p>{transportResearchDescription}</p>
      </div>
    </article>
  </div>;
}
