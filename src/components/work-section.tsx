import { ReleasedProjects } from "./released-projects";
export function WorkSection({ presentation = "standard" }: { presentation?: "standard" | "studio" }) {
  return <section id="work" className="section container work-section" aria-label="Released projects">
    <div className="section-intro">
      <h2 id="released-projects" className="section-title released-projects-title">Released projects.</h2>
    </div>
    <ReleasedProjects presentation={presentation} />
  </section>;
}
