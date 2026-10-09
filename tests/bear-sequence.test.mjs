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
  assert.equal(bearSequenceFrame(5).promptText, "Draw a ");
  assert.equal(bearSequenceFrame(9).promptText, "Draw a bear.");
  assert.equal(bearSequenceFrame(9).sending, true);
  assert.equal(bearSequenceFrame(5).message, "");
  assert.equal(bearSequenceFrame(10).message, "Draw a bear.");
  assert.equal(bearSequenceFrame(11).sketchProgress, 0);
  assert.equal(bearSequenceFrame(13).sketchProgress > 0, true);
  assert.equal(bearSequenceFrame(79).promptText, "Lift its fr");
  assert.equal(bearSequenceFrame(85).message, "Lift its front paw.");
  assert.equal(bearSequenceFrame(85).editOpacity, 0);
  assert.equal(bearSequenceFrame(87).editOpacity > 0, true);
});

test("playback positions are bounded and resolve to a clean final edit", () => {
  assert.deepEqual(bearSequenceFrame(-100), bearSequenceFrame(0));
  assert.deepEqual(bearSequenceFrame(1000), bearSequenceFrame(100));
  assert.deepEqual(bearSequenceFrame(NaN), bearSequenceFrame(0));
  assert.equal(bearSequenceFrame(0).paintOpacity, 0);
  assert.equal(bearSequenceFrame(100).editOpacity, 1);
  assert.equal(bearSequenceFrame(98).editOpacity, 1);
});

test("paper fades through the paint boundary and finishes before the paw edit", () => {
  assert.equal(bearSequenceFrame(42).paperOpacity, 0);
  assert.ok(bearSequenceFrame(72).paperOpacity < 1);
  assert.equal(bearSequenceFrame(86).paperOpacity, 1);
  let previous = 0;
  for (let progress = 0; progress <= 100; progress += 0.1) {
    const paper = bearSequenceFrame(progress).paperOpacity;
    assert.ok(paper >= previous && paper <= 1);
    assert.ok(paper - previous < 0.02, "paper must never pop in between frames");
    previous = paper;
  }
});

test("charcoal follows the sent prompt and completes before colour starts", () => {
  assert.equal(bearSequenceFrame(11).charcoalProgress, 0);
  assert.ok(bearSequenceFrame(25).charcoalProgress > 0);
  assert.equal(bearSequenceFrame(42).charcoalProgress, 1);
  assert.equal(bearSequenceFrame(42).paintOpacity, 0);
});

test("the edit settles smoothly rather than replacing the whole paw at the end", () => {
  assert.equal(bearSequenceFrame(96).editFinish, 0);
  assert.equal(bearSequenceFrame(97).editFinish, 0.5);
  assert.equal(bearSequenceFrame(98).editFinish, 1);
});
