type Point = readonly [number, number];

export function brushStrokePath(points: readonly Point[]) {
  const pair = (point: readonly number[]) => point.map(value => Number(value.toFixed(3))).join(",");
  let path = `M${pair(points[0])}`;
  for (let index = 0; index < points.length - 1; index++) {
    const before = points[Math.max(0, index - 1)];
    const start = points[index];
    const end = points[index + 1];
    const after = points[Math.min(points.length - 1, index + 2)];
    const first = [start[0] + (end[0] - before[0]) / 6, start[1] + (end[1] - before[1]) / 6];
    const second = [end[0] - (after[0] - start[0]) / 6, end[1] - (after[1] - start[1]) / 6];
    path += ` C${pair(first)} ${pair(second)} ${pair(end)}`;
  }
  return path;
}

export function brushStrokePosition(points: readonly Point[], progress: number) {
  const segments = points.slice(1).map((point, index) => Math.hypot(
    point[0] - points[index][0], point[1] - points[index][1]));
  const length = segments.reduce((sum, segment) => sum + segment, 0);
  let remaining = Math.min(1, Math.max(0, progress)) * length;
  for (let index = 0; index < segments.length; index++) {
    if (remaining <= segments[index]) {
      const ratio = segments[index] ? remaining / segments[index] : 0;
      return { x: points[index][0] + (points[index + 1][0] - points[index][0]) * ratio,
        y: points[index][1] + (points[index + 1][1] - points[index][1]) * ratio };
    }
    remaining -= segments[index];
  }
  const last = points[points.length - 1];
  return { x: last[0], y: last[1] };
}



type Stroke = { width: number; points: readonly Point[] };

// Short, overlapping gestures across an anatomical guide, rather than a wide wipe.
export function brushMarks(guides: readonly Stroke[], spacing = 28): Stroke[] {
  return guides.flatMap(({ points, width }, guideIndex) => {
    const length = points.slice(1).reduce((total, point, index) =>
      total + Math.hypot(point[0] - points[index][0], point[1] - points[index][1]), 0);
    const count = Math.max(2, Math.ceil(length / spacing));
    return Array.from({ length: count + 1 }, (_, index) => {
      const amount = index / count;
      const center = brushStrokePosition(points, amount);
      const before = brushStrokePosition(points, Math.max(0, amount - 0.01));
      const after = brushStrokePosition(points, Math.min(1, amount + 0.01));
      const angle = Math.atan2(after.y - before.y, after.x - before.x) + Math.PI / 3;
      const reach = width * 0.62;
      const dx = Math.cos(angle) * reach;
      const dy = Math.sin(angle) * reach;
      const reverse = (index + guideIndex) % 2 ? -1 : 1;
      return {
        width: spacing * 1.65,
        points: [
          [center.x - dx * reverse, center.y - dy * reverse],
          [center.x, center.y],
          [center.x + dx * reverse, center.y + dy * reverse],
        ] as const,
      };
    });
  });
}
