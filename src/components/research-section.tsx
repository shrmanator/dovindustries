import { DrawingStudy } from "./drawing-study";
export function ResearchSection() {
  return <section id="research" className="research-section section" aria-labelledby="research-title">
    <div className="container">
      <div className="section-intro">
        <h2 id="research-title" className="section-title">Research in progress.</h2>
        <p>Research in drawing, movement, and physical form.</p>
      </div>
      <article id="vibe-draw" className="research-feature">
        <div className="research-copy">
          <span className="status">Vibe Draw · Research</span>
          <h3>What if AI could work<br />with the parts of a drawing?</h3>
          <p>We’re exploring how AI can edit an individual element and keep the rest of a scene consistent—from connected joints to overlapping details.</p>
          <p className="research-note">Current work: testing where models succeed, where they break, and how to verify an edit.</p>
        </div>
        <DrawingStudy />
      </article>
      <div className="research-list">
        <article id="vr" className="research-entry">
          <div className="research-symbol vr-symbol" aria-hidden="true">
            <svg viewBox="0 0 100 100"><path d="M24 30c8-9 44-9 52 0l5 23c1 8-7 16-15 13l-16-7-16 7c-8 3-16-5-15-13Z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M28 82c13-6 31-6 44 0M33 91c10-4 24-4 34 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="34" cy="46" r="6" fill="currentColor" opacity=".2" /><circle cx="66" cy="46" r="6" fill="currentColor" opacity=".2" /></svg>
          </div>
          <div><h3>Walk in place. Move in VR.</h3><p>Headset-based movement detection, without external trackers or a treadmill. We’re researching how to translate physical steps into virtual movement.</p><span className="status">VR locomotion · Research</span></div>
        </article>
        <article id="transport" className="research-entry">
          <div className="research-symbol transport-symbol" aria-hidden="true">
            <svg viewBox="0 0 100 100"><path d="M25 71 47 24l29 47H25Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="m37 51 23 0M47 24v47M19 81h64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="30" cy="81" r="5" fill="var(--paper)" stroke="currentColor" strokeWidth="2" /><circle cx="72" cy="81" r="5" fill="var(--paper)" stroke="currentColor" strokeWidth="2" /></svg>
          </div>
          <div><h3>Less space. More movement.</h3><p>Compact electric transport, with a focus on folding form, battery design, and motor control. An ongoing hardware project.</p><span className="status">Electric transport · Research</span></div>
        </article>
      </div>
    </div>
  </section>;
}
