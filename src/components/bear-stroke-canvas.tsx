import { memo, useId } from "react";
import paint from "../../public/images/art-bear-study.webp";
import pawEdit from "../../public/images/art-bear-paw-edit.webp";
import charcoal from "../../public/images/art-bear-sketch.webp";
import { bearSequenceFrame } from "../utils/bear-sequence";
import { brushStrokePath, brushStrokePosition } from "../utils/brush-stroke";
import { brushMarks } from "../utils/brush-stroke";
import { paintStrokes, pawStrokes, type BrushStroke } from "./bear-brush-strokes";

type RenderStroke = BrushStroke & { path: string };
const prepare = (strokes: BrushStroke[]): RenderStroke[] => strokes.map(stroke =>
  ({ ...stroke, path: brushStrokePath(stroke.points) }));
const paintedMarks = prepare(brushMarks(paintStrokes));
const editedMarks = prepare(brushMarks(pawStrokes, 20));

const Strokes = memo(function Strokes({ strokes, progress }: { strokes: RenderStroke[]; progress: number }) {
  return strokes.map(({ path, width }, index) => {
    const amount = Math.min(1, Math.max(0, progress * strokes.length - index));
    return <path key={index} d={path}
      fill="none" stroke="white" strokeWidth={width}
      strokeLinecap="round" strokeLinejoin="round"
      pathLength="1" strokeDasharray="1 1" strokeDashoffset={1 - amount}
      visibility={amount === 0 ? "hidden" : "visible"} />;
  });
});

export function BearStrokeCanvas({ progress, playing }: { progress: number; playing: boolean }) {
  const id = useId().replaceAll(":", "");
  const frame = bearSequenceFrame(progress);
  const painting = progress >= 42;
  const editing = progress >= 86;
  const strokes = editing ? editedMarks : paintedMarks;
  const amount = editing ? frame.editOpacity : painting ? frame.paintOpacity
    : frame.charcoalProgress;
  const active = Math.min(strokes.length - 1, Math.floor(amount * strokes.length));
  const tip = brushStrokePosition(strokes[active].points, amount * strokes.length - active);
  return <svg viewBox="0 0 1774 887" className="bear-stroke-canvas" aria-hidden="true">
    <defs>
      <filter id={`${id}-ink`} colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 2.3" />
      </filter>
      <mask id={`${id}-paint`} maskUnits="userSpaceOnUse" x="0" y="0" width="1774" height="887">
        <Strokes strokes={paintedMarks} progress={frame.paintOpacity} />
      </mask>
      <mask id={`${id}-charcoal`} maskUnits="userSpaceOnUse" x="0" y="0" width="1774" height="887">
        <Strokes strokes={paintedMarks} progress={frame.charcoalProgress} />
      </mask>
      <clipPath id={`${id}-paw`}><polygon points="1064,408 1242,435 1455,621 1455,790 1082,790 1029,621 1046,479" /></clipPath>
      <mask id={`${id}-edit`} maskUnits="userSpaceOnUse" x="0" y="0" width="1774" height="887">
        <Strokes strokes={editedMarks} progress={frame.editOpacity} />
        <rect width="1774" height="887" fill="white" opacity={frame.editFinish} />
      </mask>
    </defs>
    <image href={paint.src} width="1774" height="887" opacity={frame.paperOpacity} />
    <image href={charcoal.src} width="1774" height="887" mask={`url(#${id}-charcoal)`}
      filter={`url(#${id}-ink)`} opacity={1 - frame.paintOpacity} />
    <image href={paint.src} width="1774" height="887" mask={`url(#${id}-paint)`} filter={`url(#${id}-ink)`} />
    <image href={pawEdit.src} width="1774" height="887" mask={`url(#${id}-edit)`}
      clipPath={`url(#${id}-paw)`} />
    {playing && progress >= 12 && (progress < 72 || editing) && progress < 100 && <g transform={`translate(${tip.x} ${tip.y})`}>
      <circle r="4" fill="#353b40" opacity="0.45" />
    </g>}
  </svg>;
}
