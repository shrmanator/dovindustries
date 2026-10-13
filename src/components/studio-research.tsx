import { MindlabResearch } from "./mindlab-research";
import { ResearchExplorations } from "./research-explorations";

export function StudioResearch() {
  return <section id="research" className="studio-research section" aria-labelledby="research-title">
    <div className="container">
      <h2 id="research-title" className="section-title">More research</h2>
      <div className="studio-research-collection">
        <MindlabResearch />
        <ResearchExplorations />
      </div>
    </div>
  </section>;
}
