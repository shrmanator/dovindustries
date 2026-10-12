import { mindlabResearchDescription } from "../content/research";
import { MindlabReplay } from "./mindlab-replay";

export function MindlabResearch() {
  return <article id="mindlab" className="studio-mindlab" aria-labelledby="mindlab-title">
    <div className="studio-mindlab-copy">
      <h3 id="mindlab-title">MindLab</h3>
      <p>{mindlabResearchDescription}</p>
    </div>
    <MindlabReplay />
  </article>;
}
