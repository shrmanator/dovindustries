import assert from "node:assert/strict";
import { test } from "node:test";
import { recordedTime, replayStage, sampleRecordedPose, worldToDiagram } from "../src/utils/mindlab-replay.ts";
import { mindlabViewBox } from "../src/utils/mindlab-camera.ts";
import { mindlabSeekerTrack } from "../src/content/mindlab-discovery-run.ts";

test("recorded clock stays bounded and holds the actual response timestamp for reading", () => {
  assert.equal(recordedTime(-100), 113.87);
  assert.equal(recordedTime(2000), 113.87);
  assert.equal(recordedTime(6000), 116.9);
  assert.equal(recordedTime(8000), 116.9);
  assert.equal(recordedTime(10000), 116.9);
  assert.equal(recordedTime(99999), 118.29);
  for (let elapsed = 0; elapsed < 20000; elapsed += 100) assert.ok(recordedTime(elapsed + 100) >= recordedTime(elapsed));
  assert.equal(replayStage(1999), "subject");
  assert.equal(replayStage(2000), "observe");
  assert.equal(replayStage(6000), "interpret");
  assert.equal(replayStage(10000), "act");
  assert.equal(replayStage(16000), "result");
});

test("positions clamp to real samples and interpolate facing through the shortest turn", () => {
  const track = [[1, 2, 4, 350, false], [3, 6, 8, 10, true]];
  assert.deepEqual(sampleRecordedPose(track, 0), { x: 2, z: 4, facing: 350, visible: false });
  assert.deepEqual(sampleRecordedPose(track, 2), { x: 4, z: 6, facing: 360, visible: false });
  assert.deepEqual(sampleRecordedPose(track, 8), { x: 6, z: 8, facing: 10, visible: true });
});

test("visibility changes at recorded sightings rather than between samples", () => {
  assert.equal(sampleRecordedPose(mindlabSeekerTrack, 114.82).visible, false);
  assert.equal(sampleRecordedPose(mindlabSeekerTrack, 114.83).visible, true);
  assert.equal(sampleRecordedPose(mindlabSeekerTrack, 117.72).visible, false);
  assert.equal(sampleRecordedPose(mindlabSeekerTrack, 118.29).visible, true);
});

test("introducing the person preserves frame proportions and settles before the sighting", () => {
  const start = mindlabViewBox(0).split(" ").map(Number);
  const middle = mindlabViewBox(2375).split(" ").map(Number);
  const end = mindlabViewBox(2750).split(" ").map(Number);
  assert.equal(start[2], 400);
  assert.ok(middle[2] > start[2] && middle[2] < end[2]);
  for (const box of [start, middle, end]) assert.ok(Math.abs(box[2] / box[3] - 780 / 550) < 1e-10);
  assert.equal(mindlabViewBox(2000, true), mindlabViewBox(2750));
  assert.equal(mindlabViewBox(4000), mindlabViewBox(99999));
});

test("world coordinates preserve room and doorway geometry", () => {
  assert.deepEqual(worldToDiagram(-12, 8), { x: 90, y: 64 });
  assert.deepEqual(worldToDiagram(12, -8), { x: 810, y: 544 });
  assert.deepEqual(worldToDiagram(4, 0), { x: 570, y: 304 });
});
