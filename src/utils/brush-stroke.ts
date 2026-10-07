type Point = readonly [number, number];

export function brushStrokePath(points: readonly Point[]) {
  let path = `M${points[0].join(",")}`;
  for (let index = 0; index < points.length - 1; index++) {
    const before = points[Math.max(0, index - 1)];
    const start = points[index];
    const end = points[index + 1];
    const after = points[Math.min(points.length - 1, index + 2)];
    const first = [start[0] + (end[0] - before[0]) / 6, start[1] + (end[1] - before[1]) / 6];
    const second = [end[0] - (after[0] - start[0]) / 6, end[1] - (after[1] - start[1]) / 6];
    path += ` C${first.join(",")} ${second.join(",")} ${end.join(",")}`;
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
