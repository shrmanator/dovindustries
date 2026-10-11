import assert from "node:assert/strict";
import { test } from "node:test";
import { wingTransform } from "../src/utils/drawing-pose.ts";

test("wing movement stays attached to its joint across the allowed range", () => {
  for (const angle of [-30, -7, 0, 18, 35]) {
    assert.equal(wingTransform(angle), "rotate(" + angle + " 267 209)");
  }
});

test("invalid or out-of-range values cannot create a broken SVG transform", () => {
  assert.equal(wingTransform(-100), "rotate(-30 267 209)");
  assert.equal(wingTransform(100), "rotate(35 267 209)");
  for (const angle of [NaN, Infinity, -Infinity]) {
    assert.equal(wingTransform(angle), "rotate(5 267 209)");
  }
});
