import { useId } from "react";
import paint from "../../public/images/art-bear-study.webp";
import pawEdit from "../../public/images/art-bear-paw-edit.webp";
import { bearSequenceFrame } from "../utils/bear-sequence";
import { brushStrokePath, brushStrokePosition } from "../utils/brush-stroke";
import { paintStrokes, pawStrokes, sketchStrokes, type BrushStroke } from "./bear-brush-strokes";

function Strokes({ strokes, progress, sketch = false }: { strokes: BrushStroke[]; progress: number; sketch?: boolean }) {
  return strokes.map(({ points, width }, index) => {
    const amount = Math.min(1, Math.max(0, progress * strokes.length - index));
    return <path key={index} d={brushStrokePath(points)}
      fill="none" stroke={sketch ? "#353b40" : "white"}
      strokeWidth={sketch ? index < 6 ? 4 : width : width}
      opacity={sketch && index >= 6 ? 0.65 : 1} strokeLinecap="round" strokeLinejoin="round"
      pathLength="1" strokeDasharray="1 1" strokeDashoffset={1 - amount}
      visibility={amount === 0 ? "hidden" : "visible"} />;
  });
}

export function BearStrokeCanvas({ progress, playing }: { progress: number; playing: boolean }) {
  const id = useId().replaceAll(":", "");
  const frame = bearSequenceFrame(progress);
  const painting = progress >= 42;
  const editing = progress >= 86;
  const strokes = editing ? pawStrokes : painting ? paintStrokes : sketchStrokes;
  const amount = editing ? frame.editOpacity : painting ? frame.paintOpacity : frame.sketchProgress;
  const active = Math.min(strokes.length - 1, Math.floor(amount * strokes.length));
  const tip = brushStrokePosition(strokes[active].points, amount * strokes.length - active);
  return <svg viewBox="0 0 1774 887" className="bear-stroke-canvas" aria-hidden="true">
    <defs>
      <mask id={`${id}-paint`} maskUnits="userSpaceOnUse" x="0" y="0" width="1774" height="887">
        <Strokes strokes={paintStrokes} progress={frame.paintOpacity} />
        {frame.paintOpacity === 1 && <rect width="1774" height="887" fill="white" />}
      </mask>
      <clipPath id={`${id}-paw`}><polygon points="1064,408 1242,435 1455,621 1455,790 1082,790 1029,621 1046,479" /></clipPath>
      <mask id={`${id}-edit`} maskUnits="userSpaceOnUse" x="0" y="0" width="1774" height="887">
        <Strokes strokes={pawStrokes} progress={frame.editOpacity} />
        {frame.editOpacity === 1 && <rect width="1774" height="887" fill="white" />}
      </mask>
    </defs>
    <g opacity={1 - frame.paintOpacity}><Strokes strokes={sketchStrokes} progress={frame.sketchProgress} sketch /></g>
    <image href={paint.src} width="1774" height="887" mask={`url(#${id}-paint)`} />
    <image href={pawEdit.src} width="1774" height="887" mask={`url(#${id}-edit)`}
      clipPath={`url(#${id}-paw)`} />
    {playing && progress >= 12 && (progress < 72 || editing) && progress < 100 && <g transform={`translate(${tip.x} ${tip.y})`}>
      <circle r={painting ? 15 : 7} fill={painting ? "#34485a" : "#353b40"} opacity="0.75" />
      <path d="M0 0L48 -72" stroke="#353b40" strokeWidth="5" strokeLinecap="round" />
    </g>}
  </svg>;
}
