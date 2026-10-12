import assert from "node:assert/strict";
import { test } from "node:test";
import { sceneProgress, settleProgress } from "../src/utils/scroll-progress.ts";

test("scene progress is bounded and reverses at the same scroll position", () => {
  const before = sceneProgress(1000, 500, 400, 800);
  const after = sceneProgress(1000, 500, 1000, 800);
  assert.ok(after.enter > before.enter);
  assert.ok(after.travel > before.travel);
  const positions = [-2000, 0, 400, 1000, 3000, 1000, 400];
  const frames = positions.map(scroll => sceneProgress(1000, 500, scroll, 800));
  assert.deepEqual(frames[2], frames[6]);
  assert.deepEqual(frames[3], frames[5]);
  for (const frame of frames) for (const value of Object.values(frame)) assert.ok(value >= 0 && value <= 1);
});

test("invalid geometry keeps content in its static, visible state", () => {
  for (const inputs of [[0, 0, 0, 800], [0, 100, 0, 0], [NaN, 100, 0, 800], [0, 100, Infinity, 800]]) {
    assert.deepEqual(sceneProgress(...inputs), { enter: 1, travel: 0.5, exit: 0 });
  }
});

test("smoothing converges without overshoot and can reverse before completion", () => {
  const start = { enter: 0, travel: 0, exit: 0 };
  const target = { enter: 1, travel: 0.8, exit: 0.4 };
  let frame = { value: start, settled: false };
  for (let index = 0; index < 120 && !frame.settled; index++) {
    frame = settleProgress(frame.value, target, 16);
    for (const key of Object.keys(target)) assert.ok(frame.value[key] >= 0 && frame.value[key] <= target[key]);
  }
  assert.equal(frame.settled, true);
  assert.deepEqual(frame.value, target);
  const forward = settleProgress(start, target, 16).value;
  const reverse = settleProgress(forward, start, 16).value;
  assert.ok(reverse.enter < forward.enter);
  assert.ok(reverse.enter >= 0);
});
