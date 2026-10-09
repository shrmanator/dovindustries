import assert from "node:assert/strict";
import { test } from "node:test";
import { brushMarks } from "../src/utils/brush-stroke.ts";

test("brush gestures cover the guide with overlapping short marks", () => {
  const marks = brushMarks([{ width: 150, points: [[0, 0], [280, 0]] }]);
  assert.equal(marks.length, 11);
  for (let index = 0; index < marks.length; index++) {
    const mark = marks[index];
    assert.equal(mark.points[1][0], index * 28);
    assert.equal(mark.points[1][1], 0);
    assert.ok(mark.width < 50, "no oversized reveal bands");
    assert.ok(mark.width > 28, "neighboring marks overlap");
    assert.ok(mark.points.flat().every(Number.isFinite));
  }
});

test("stationary guides produce finite marks", () => {
  const marks = brushMarks([{ width: 30, points: [[12, 9], [12, 9]] }]);
  assert.ok(marks.every(mark => mark.points.flat().every(Number.isFinite)));
});
