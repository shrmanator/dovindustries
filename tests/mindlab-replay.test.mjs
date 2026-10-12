import assert from "node:assert/strict";
import { test } from "node:test";
import { recordedTime, replayStage, sampleRecordedPose, worldToDiagram } from "../src/utils/mindlab-replay.ts";

test("recorded clock stays bounded and holds the actual response timestamp for reading", () => {
  assert.equal(recordedTime(-100), 25.04);
  assert.equal(recordedTime(10500), 35.95);
  assert.equal(recordedTime(12500), 35.95);
  assert.equal(recordedTime(14000), 35.95);
  assert.equal(recordedTime(99999), 42.5);
  for (let elapsed = 0; elapsed < 22000; elapsed += 100) assert.ok(recordedTime(elapsed + 100) >= recordedTime(elapsed));
  assert.equal(replayStage(10499), "observe");
  assert.equal(replayStage(10500), "interpret");
  assert.equal(replayStage(14000), "act");
});

test("positions clamp to real samples and interpolate facing through the shortest turn", () => {
  const track = [[1, 2, 4, 350], [3, 6, 8, 10]];
  assert.deepEqual(sampleRecordedPose(track, 0), { x: 2, z: 4, facing: 350 });
  assert.deepEqual(sampleRecordedPose(track, 2), { x: 4, z: 6, facing: 360 });
  assert.deepEqual(sampleRecordedPose(track, 8), { x: 6, z: 8, facing: 10 });
});

test("world coordinates preserve room and doorway geometry", () => {
  assert.deepEqual(worldToDiagram(-12, 8), { x: 90, y: 64 });
  assert.deepEqual(worldToDiagram(12, -8), { x: 810, y: 544 });
  assert.deepEqual(worldToDiagram(4, 0), { x: 570, y: 304 });
});
