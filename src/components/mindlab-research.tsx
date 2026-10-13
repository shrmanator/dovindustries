import { mindlabCharacterDescription, mindlabResearchDescription } from "../content/research";
import { MindlabReplay } from "./mindlab-replay";

export function MindlabResearch() {
  return <article id="mindlab" className="studio-mindlab" aria-labelledby="mindlab-title">
    <div className="studio-mindlab-copy">
      <h3 id="mindlab-title">MindLab</h3>
      <p>{mindlabResearchDescription}</p>
    </div>
    <div className="studio-mindlab-setup">
      <div>
        <h4>A character description</h4>
        <blockquote>“{mindlabCharacterDescription}”</blockquote>
      </div>
      <div>
        <p>The developer supplies this description and connects the game’s capabilities. MindLab would coordinate the character’s behaviour without requiring scripted psychology.</p>
      </div>
    </div>
    <MindlabReplay />
  </article>;
}
