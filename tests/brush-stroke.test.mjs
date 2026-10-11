import assert from "node:assert/strict";
import { test } from "node:test";
import { brushStrokePath, brushStrokePosition } from "../src/utils/brush-stroke.ts";

test("the brush follows unequal stroke segments at a constant distance", () => {
  const stroke = [[0, 0], [30, 0], [30, 10]];
  assert.deepEqual(brushStrokePosition(stroke, 0.5), { x: 20, y: 0 });
  assert.deepEqual(brushStrokePosition(stroke, 0.875), { x: 30, y: 5 });
  assert.deepEqual(brushStrokePosition(stroke, 1), { x: 30, y: 10 });
  assert.ok(brushStrokePath(stroke).startsWith("M0,0 C"));
});

test("stationary and out-of-range stroke positions stay finite", () => {
  const stroke = [[4, 8], [4, 8]];
  assert.deepEqual(brushStrokePosition(stroke, 0.5), { x: 4, y: 8 });
  assert.deepEqual(brushStrokePosition([[0, 0], [10, 10]], -1), { x: 0, y: 0 });
  assert.deepEqual(brushStrokePosition([[0, 0], [10, 10]], 2), { x: 10, y: 10 });
});
