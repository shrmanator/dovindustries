export type RecordedPose = readonly [time: number, x: number, z: number, facing: number];
export type ReplayPose = { x: number; z: number; facing: number };
export type ReplayStage = "observe" | "interpret" | "act";
export const MINDLAB_REPLAY_DURATION = 22000;

// Editorial pauses make observations and the model's response readable.
const clock = [[0, 25.04], [4, 28.75], [7.5, 32.29], [10.5, 35.95], [14, 35.95], [20, 41.88], [22, 42.5]] as const;

export function recordedTime(elapsedMs: number) {
  const elapsed = Math.min(22, Math.max(0, Number.isFinite(elapsedMs) ? elapsedMs / 1000 : 0));
  const end = clock.findIndex(point => point[0] >= elapsed);
  if (end <= 0) return clock[0][1];
  const [from, to] = [clock[end - 1], clock[end]];
  return from[1] + (to[1] - from[1]) * (elapsed - from[0]) / (to[0] - from[0]);
}

export function replayStage(elapsedMs: number): ReplayStage {
  return elapsedMs < 10500 ? "observe" : elapsedMs < 14000 ? "interpret" : "act";
}

export const stageStart: Record<ReplayStage, number> = { observe: 0, interpret: 10500, act: 14000 };

export function sampleRecordedPose(track: readonly RecordedPose[], time: number): ReplayPose {
  if (!track.length) return { x: 0, z: 0, facing: 0 };
  const last = track.at(-1)!;
  const index = track.findIndex(p => p[0] >= time);
  const target = index < 0 ? last : track[index];
  if (index <= 0) return { x: target[1], z: target[2], facing: target[3] };
  const prior = track[index - 1];
  const blend = (time - prior[0]) / (target[0] - prior[0]);
  const turn = ((target[3] - prior[3] + 540) % 360) - 180;
  return { x: prior[1] + (target[1] - prior[1]) * blend, z: prior[2] + (target[2] - prior[2]) * blend, facing: prior[3] + turn * blend };
}

export function worldToDiagram(x: number, z: number) {
  return { x: 450 + x * 30, y: 304 - z * 30 };
}
