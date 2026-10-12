"use client";

import { useRef } from "react";
import { recordedTime, replayStage, MINDLAB_REPLAY_DURATION, type ReplayStage } from "../utils/mindlab-replay";
import { useMindlabReplay } from "./use-mindlab-replay";
import { MindlabReplayScene } from "./mindlab-replay-scene";
import { MindlabReplayStory } from "./mindlab-replay-story";

const stages: { id: ReplayStage; label: string }[] = [
  { id: "observe", label: "Observe" }, { id: "interpret", label: "Interpret" }, { id: "act", label: "Act" },
];

export function MindlabReplay() {
  const frame = useRef<HTMLElement>(null);
  const replay = useMindlabReplay(frame);
  const stage = replayStage(replay.elapsed);
  const time = recordedTime(replay.elapsed);
  const playbackLabel = replay.complete ? "Replay" : replay.playing ? "Pause" : "Play";
  return <figure className="mindlab-replay" ref={frame}>
    <div className="mindlab-replay-toolbar">
      <span>Recorded prototype run</span>
      <div className="mindlab-replay-playback">
        <span className="mindlab-recorded-time" aria-hidden="true">{time.toFixed(2)}s</span>
        <button type="button" onClick={replay.toggle} aria-label={`${playbackLabel} MindLab replay`}>{playbackLabel}</button>
      </div>
    </div>
    <div className="mindlab-replay-body">
      <MindlabReplayScene time={time} />
      <MindlabReplayStory stage={stage} time={time} />
    </div>
    <div className="mindlab-replay-stages" role="group" aria-label="Explore the recorded sequence">
      {stages.map((item, index) => <button key={item.id} type="button" aria-pressed={stage === item.id}
        onClick={() => replay.select(item.id)}><span>{index + 1}</span>{item.label}</button>)}
      <div className="mindlab-replay-progress" aria-hidden="true"><span style={{ transform: `scaleX(${replay.elapsed / MINDLAB_REPLAY_DURATION})` }} /></div>
    </div>
    <figcaption>Recorded positions and model responses, paced for reading.</figcaption>
  </figure>;
}
