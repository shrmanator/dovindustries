import { mindlabRecordedRun, mindlabSeekerTrack } from "../content/mindlab-recorded-run";
import { sampleRecordedPose, worldToDiagram } from "../utils/mindlab-replay";

export function MindlabReplayScene({ time }: { time: number }) {
  const pose = sampleRecordedPose(mindlabSeekerTrack, time);
  const seeker = worldToDiagram(pose.x, pose.z);
  const hider = worldToDiagram(...mindlabRecordedRun.hider);
  const trail = mindlabSeekerTrack.filter(p => p[0] <= time).map(p => worldToDiagram(p[1], p[2]));
  trail.push(seeker);
  return <svg className="mindlab-replay-scene" viewBox="60 30 780 550" role="img"
    aria-label="Recorded movement: the SI seeker searches the kitchen and moves into the living room. The hider stays unseen in the bedroom.">
    <rect width="900" height="600" className="mindlab-ground" />
    <g className="mindlab-floor">
      <rect x="90" y="64" width="300" height="480" />
      <rect x="390" y="64" width="210" height="240" />
      <rect x="600" y="64" width="210" height="240" />
      <rect x="390" y="304" width="420" height="240" />
    </g>
    <g className="mindlab-furniture" aria-hidden="true">
      <path d="M426 99H510V131H458V191H426Z" />
      <rect x="538" y="82" width="37" height="63" rx="3" />
      <rect x="644" y="110" width="123" height="137" rx="5" />
      <path d="M464 453H556V513H464V497H537V469H464Z" />
    </g>
    <path className="mindlab-walls" d="M90 64H810V544H90Z M390 64V268 M390 340V544 M390 304H540 M600 304H810 M600 64V169 M600 241V304" />
    <g className="mindlab-room-labels" aria-hidden="true">
      <text x="224" y="313">Entry</text><text x="495" y="275">Kitchen</text>
      <text x="706" y="278">Bedroom</text><text x="690" y="516">Living</text>
    </g>
    {time >= 35.95 && <circle className="mindlab-next-location" cx="510" cy="484" r="27" />}
    <polyline className="mindlab-recorded-trail" points={trail.map(p => `${p.x},${p.y}`).join(" ")} />
    <g className="mindlab-recorded-hider" transform={`translate(${hider.x} ${hider.y})`}>
      <circle r="16" /><text y="-32">Hider</text>
    </g>
    <g className="mindlab-recorded-seeker" transform={`translate(${seeker.x} ${seeker.y})`}>
      <circle r="20" />
      <path transform={`rotate(${pose.facing})`} d="M-6 5L0-7L6 5" />
      <text y="37">Seeker</text>
    </g>
  </svg>;
}
