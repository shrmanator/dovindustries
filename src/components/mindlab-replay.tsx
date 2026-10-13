"use client";

import { useRef } from "react";
import { recordedTime, replayStage, MINDLAB_REPLAY_DURATION, type ReplayStage } from "../utils/mindlab-replay";
import { useMindlabReplay } from "./use-mindlab-replay";
import { MindlabReplayScene } from "./mindlab-replay-scene";
import { MindlabReplayStory } from "./mindlab-replay-story";

const stages: { id: ReplayStage; label: string }[] = [
  { id: "subject", label: "Person" }, { id: "interpret", label: "Decision" }, { id: "result", label: "Found" },
];

export function MindlabReplay() {
  const frame = useRef<HTMLElement>(null);
  const replay = useMindlabReplay(frame);
  const stage = replayStage(replay.elapsed);
  const time = recordedTime(replay.elapsed);
  const selected = stage === "observe" ? "subject" : stage === "act" ? "interpret" : stage;
  const playbackLabel = replay.complete ? "Replay" : replay.playing ? "Pause" : "Play";
  return <figure className="mindlab-replay" ref={frame}>
    <div className="mindlab-replay-toolbar">
      <span>Recorded experiment · Unity</span>
      <div className="mindlab-replay-playback">
        <button type="button" onClick={replay.toggle} aria-label={`${playbackLabel} MindLab replay`}>{playbackLabel}</button>
      </div>
    </div>
    <div className="mindlab-replay-body">
      <MindlabReplayScene time={time} elapsed={replay.elapsed} reducedMotion={replay.reducedMotion} />
      <MindlabReplayStory stage={stage} time={time} onInspect={replay.pause} />
    </div>
    <div className="mindlab-replay-stages" role="group" aria-label="Explore the recorded sequence">
      {stages.map(item => <button key={item.id} type="button" aria-pressed={selected === item.id}
        onClick={() => replay.select(item.id)}>{item.label}</button>)}
      <div className="mindlab-replay-progress" aria-hidden="true"><span style={{ transform: `scaleX(${replay.elapsed / MINDLAB_REPLAY_DURATION})` }} /></div>
    </div>
    <figcaption>Schematic from recorded positions and responses. Paced for reading.</figcaption>
  </figure>;
}
