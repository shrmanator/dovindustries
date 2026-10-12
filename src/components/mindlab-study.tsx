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
        <button type="button" aria-pressed={characterView} onClick={() => setCharacterView(true)}>Character’s view</button>
      </div>
    </div>
    <MindlabRoom characterView={characterView} />
    <figcaption aria-live="polite">
      {characterView ? "The player is hidden from the character by a wall." : "The character is in the living room. The player is in the kitchen."}
    </figcaption>
  </figure>;
}
