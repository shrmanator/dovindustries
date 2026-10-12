"use client";

import { useState } from "react";
import { MindlabRoom } from "./mindlab-room";

export function MindlabStudy() {
  const [characterView, setCharacterView] = useState(false);

  return <figure className="mindlab-study" data-perspective={characterView ? "character" : "world"}>
    <div className="mindlab-study-toolbar">
      <span>Perception study</span>
      <div className="mindlab-perspective" role="group" aria-label="Choose a perspective">
        <button type="button" aria-pressed={!characterView} onClick={() => setCharacterView(false)}>Scene</button>
        <button type="button" aria-pressed={characterView} onClick={() => setCharacterView(true)}>Marek’s view</button>
      </div>
    </div>
    <MindlabRoom characterView={characterView} />
    <figcaption aria-live="polite">
      {characterView ? "The character in the kitchen is out of Marek’s sight." : "Marek is in the living room. Another character is in the kitchen."}
    </figcaption>
  </figure>;
}
