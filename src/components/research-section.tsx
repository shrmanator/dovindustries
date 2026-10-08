import { VibeDrawProject } from "./vibe-draw-project";

export function ResearchSection({ includeVibeDraw = true }: { includeVibeDraw?: boolean }) {
  return <section id="research" className="research-section section" aria-labelledby="research-title">
    <div className="container">
      <div className="section-intro">
        <h2 id="research-title" className="section-title">{includeVibeDraw ? "Research in progress." : "More research."}</h2>
      </div>
      <div className="research-list">
        {includeVibeDraw && <VibeDrawProject />}
        <article id="vr" className="research-entry">
          <h3>VR locomotion</h3>
          <p>We’re researching how a headset can translate steps in place into virtual movement, without external trackers or a treadmill.</p>
        </article>
        <article id="transport" className="research-entry">
          <h3>Compact electric transport</h3>
          <p>An ongoing hardware project exploring folding form, battery design, and motor control.</p>
        </article>
      </div>
    </div>
  </section>;
}
