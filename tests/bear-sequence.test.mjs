import assert from "node:assert/strict";
import { test } from "node:test";
import { bearSequenceFrame } from "../src/utils/bear-sequence.ts";

test("the paw edit never starts before the painting is complete", () => {
  for (let progress = 0; progress <= 100; progress++) {
    const frame = bearSequenceFrame(progress);
    if (frame.editOpacity > 0) assert.equal(frame.paintOpacity, 1);
    assert.ok(frame.editOpacity >= 0 && frame.editOpacity <= 1);
    assert.ok(frame.paintOpacity >= 0 && frame.paintOpacity <= 1);
  }
});

test("drawing and editing wait for their typed prompts to be sent", () => {
  assert.equal(bearSequenceFrame(5).composerText, "Draw a ");
  assert.equal(bearSequenceFrame(9).composerText, "Draw a bear.");
  assert.equal(bearSequenceFrame(9).sending, true);
  assert.equal(bearSequenceFrame(5).message, "");
  assert.equal(bearSequenceFrame(10).message, "Draw a bear.");
  assert.equal(bearSequenceFrame(11).sketchProgress, 0);
  assert.equal(bearSequenceFrame(13).sketchProgress > 0, true);
  assert.equal(bearSequenceFrame(79).composerText, "Lift its fr");
  assert.equal(bearSequenceFrame(85).message, "Lift its front paw.");
  assert.equal(bearSequenceFrame(85).editOpacity, 0);
  assert.equal(bearSequenceFrame(87).editOpacity > 0, true);
});

test("scrubbing is bounded and has stable beginning and ending frames", () => {
  assert.deepEqual(bearSequenceFrame(-100), bearSequenceFrame(0));
  assert.deepEqual(bearSequenceFrame(1000), bearSequenceFrame(100));
  assert.deepEqual(bearSequenceFrame(NaN), bearSequenceFrame(0));
  assert.equal(bearSequenceFrame(0).paintOpacity, 0);
  assert.equal(bearSequenceFrame(100).editOpacity, 1);
});
