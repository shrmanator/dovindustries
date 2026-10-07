"use client";

import Image from "next/image";
import { useState } from "react";
import { artDirections } from "./art-direction-options";
import { BearSequence } from "./bear-sequence";

export function ArtDirectionPicker() {
  const [selected, setSelected] = useState<string>(artDirections[0].id);
  const direction = artDirections.find(({ id }) => id === selected) ?? artDirections[0];
  const current = artDirections.filter(({ id }) => id === "bear-study" || id === "sculpture");
  const earlier = artDirections.filter(({ id }) => id !== "bear-study" && id !== "sculpture");
  const renderOption = ({ id, label }: (typeof artDirections)[number]) =>
    <label className="art-option" key={id}>
      <input type="radio" name="art-direction" value={id} checked={selected === id}
        onChange={() => setSelected(id)} />
      <span>{label}</span>
    </label>;

  return <div className="art-experiment">
    {direction.id === "bear-study" ? <BearSequence /> : <div className="hero-art">
      <Image key={direction.id} src={direction.src} alt="" placeholder="blur"
        sizes="(max-width: 700px) 100vw, 90vw" loading="eager"
        fetchPriority="high" className="hero-image" style={{ objectPosition: direction.position }} />
    </div>}
    <fieldset className="art-switcher">
      <legend>Compare artwork</legend>
      <div className="art-options">{current.map(renderOption)}</div>
      <details className="earlier-studies">
        <summary>Earlier studies</summary>
        <div className="art-options">{earlier.map(renderOption)}</div>
      </details>
    </fieldset>
    <p className="art-caption" aria-live="polite">{direction.note}</p>
    {direction.id !== "bear-study" && <p className="art-concept-note">Art direction study. These are imagined scenes and objects.</p>}
  </div>;
}
