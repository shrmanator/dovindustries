import { mindlabCharacterDescription, mindlabResearchDescription } from "../content/research";
import { MindlabReplay } from "./mindlab-replay";

export function MindlabResearch() {
  return <article id="mindlab" className="studio-mindlab" aria-labelledby="mindlab-title">
    <div className="studio-mindlab-copy">
      <div>
        <h3 id="mindlab-title">MindLab</h3>
        <p className="studio-mindlab-purpose">Research toward a runtime for embodied SI characters in Unity.</p>
      </div>
      <p>{mindlabResearchDescription}</p>
    </div>
    <div className="studio-mindlab-setup">
      <div>
        <h4>Describe the character</h4>
        <blockquote>“{mindlabCharacterDescription}”</blockquote>
      </div>
      <div>
        <h4>Connect the game</h4>
        <p>Provide the senses and actions available in your world, rather than scripting the character’s psychology.</p>
      </div>
    </div>
    <MindlabReplay />
  </article>;
}
