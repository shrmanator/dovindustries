import Image from "next/image";

export function StudioResearch() {
  return <section id="research" className="studio-research section" aria-labelledby="research-title">
    <div className="container">
      <h2 id="research-title" className="section-title">More research.</h2>
      <div className="studio-research-collection">
        <article id="vr" className="studio-vr" aria-labelledby="vr-title">
          <figure className="studio-movement-art">
            <Image src="/images/art-vr-stepping.webp"
              alt="Charcoal and blue paint study of a person wearing a headset and stepping in place"
              width={1200} height={800} sizes="(max-width: 700px) 90vw, (max-width: 1378px) 48vw, 642px" />
          </figure>
          <div className="studio-research-copy">
            <h3 id="vr-title">VR locomotion</h3>
            <p>Can a headset turn steps in place into movement through a virtual world, without external trackers or a treadmill?</p>
          </div>
        </article>
        <article id="transport" className="studio-transport" aria-labelledby="transport-title">
          <h3 id="transport-title">Compact electric transport</h3>
          <p>How small can an electric vehicle fold while making room for its battery and motor?</p>
        </article>
      </div>
    </div>
  </section>;
}
