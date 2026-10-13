export type RecordedPose = readonly [time: number, x: number, z: number, facing: number, visible: boolean];
export type ReplayPose = { x: number; z: number; facing: number; visible: boolean };
export type ReplayStage = "subject" | "observe" | "interpret" | "act" | "result";
export const MINDLAB_REPLAY_DURATION = 20000;

// Editorial pauses make observations and the model's response readable.
const clock = [[0, 113.87], [2, 113.87], [3, 114.75], [4, 114.83], [6, 116.9], [10, 116.9], [16, 118.29], [20, 118.29]] as const;

export function recordedTime(elapsedMs: number) {
  const elapsed = Math.min(MINDLAB_REPLAY_DURATION / 1000, Math.max(0, Number.isFinite(elapsedMs) ? elapsedMs / 1000 : 0));
  const end = clock.findIndex(point => point[0] >= elapsed);
  if (end <= 0) return clock[0][1];
  const [from, to] = [clock[end - 1], clock[end]];
  return from[1] + (to[1] - from[1]) * (elapsed - from[0]) / (to[0] - from[0]);
}

export function replayStage(elapsedMs: number): ReplayStage {
  return elapsedMs < 2000 ? "subject" : elapsedMs < 6000 ? "observe" : elapsedMs < 10000 ? "interpret" : elapsedMs < 16000 ? "act" : "result";
}

export const stageStart: Record<ReplayStage, number> = { subject: 0, observe: 2000, interpret: 6000, act: 10000, result: 20000 };

export function sampleRecordedPose(track: readonly RecordedPose[], time: number): ReplayPose {
  if (!track.length) return { x: 0, z: 0, facing: 0, visible: false };
  const last = track.at(-1)!;
  const index = track.findIndex(p => p[0] >= time);
  const target = index < 0 ? last : track[index];
  if (index <= 0) return { x: target[1], z: target[2], facing: target[3], visible: target[4] };
  const prior = track[index - 1];
  const blend = (time - prior[0]) / (target[0] - prior[0]);
  const turn = ((target[3] - prior[3] + 540) % 360) - 180;
  return { x: prior[1] + (target[1] - prior[1]) * blend, z: prior[2] + (target[2] - prior[2]) * blend,
    facing: prior[3] + turn * blend, visible: time >= target[0] ? target[4] : prior[4] };
}

export function worldToDiagram(x: number, z: number) {
  return { x: 450 + x * 30, y: 304 - z * 30 };
}
