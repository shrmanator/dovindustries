"use client";

import { useState } from "react";
import { MindlabRoom } from "./mindlab-room";

export function MindlabStudy() {
  const [characterView, setCharacterView] = useState(false);

  return <figure className="mindlab-study" data-perspective={characterView ? "character" : "world"}>
    <div className="mindlab-study-toolbar">
      <span>Hide-and-seek</span>
      <div className="mindlab-perspective" role="group" aria-label="Choose a perspective">
        <button type="button" aria-pressed={!characterView} onClick={() => setCharacterView(false)}>Whole scene</button>
        <button type="button" aria-pressed={characterView} onClick={() => setCharacterView(true)}>What the seeker sees</button>
      </div>
    </div>
    <MindlabRoom characterView={characterView} />
    <figcaption aria-live="polite">
      {characterView ? "The seeker can’t see the hider behind the wall." : "A person hides in the kitchen. The SI seeker is in the living room."}
    </figcaption>
  </figure>;
}
