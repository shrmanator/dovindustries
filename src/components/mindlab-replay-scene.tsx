import { mindlabRecordedRun, mindlabSeekerTrack } from "../content/mindlab-discovery-run";
import { sampleRecordedPose, worldToDiagram } from "../utils/mindlab-replay";
import { mindlabViewBox } from "../utils/mindlab-camera";

type SceneProps = { time: number; elapsed: number; reducedMotion: boolean; sceneRef: RefObject<SVGSVGElement | null> };

export function MindlabReplayScene({ time, elapsed, reducedMotion, sceneRef }: SceneProps) {
  const pose = sampleRecordedPose(mindlabSeekerTrack, time);
  const seeker = worldToDiagram(pose.x, pose.z);
  const person = worldToDiagram(...mindlabRecordedRun.person);
  const subject = elapsed < 2000;
  const trail = mindlabSeekerTrack.filter(p => p[0] <= time).map(p => worldToDiagram(p[1], p[2]));
  trail.push(seeker);
  return <svg ref={sceneRef} className="mindlab-replay-scene" viewBox={mindlabViewBox(elapsed, reducedMotion)} role="img"
    aria-label={subject ? "The person to find is in Living, outside the seeker's current view." : pose.visible ? "The seeker has visual contact with the person in Living and approaches them." : "The seeker turns, looking for the person it has lost sight of."}>
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
      <rect x="466" y="458" width="88" height="45" rx="6" />
      <rect x="473" y="449" width="74" height="17" rx="4" />
      <rect x="462" y="460" width="15" height="47" rx="4" />
      <rect x="543" y="460" width="15" height="47" rx="4" />
    </g>
    <path className="mindlab-walls" d="M90 64H810V544H90Z M390 64V268 M390 340V544 M390 304H540 M600 304H810 M600 64V169 M600 241V304" />
    <g className="mindlab-room-labels" aria-hidden="true">
      <text x="224" y="313">Entry</text><text x="495" y="275">Kitchen</text>
      <text x="706" y="293">Bedroom</text><text x="648" y="383">Living</text>
    </g>
    <circle className={`mindlab-person-focus${subject ? " is-subject" : ""}`} cx={person.x} cy={person.y}
      r={subject ? 38 : 26} opacity={subject ? .22 : pose.visible ? .6 : 0} />
    <polyline className="mindlab-recorded-trail" points={trail.map(p => `${p.x},${p.y}`).join(" ")} />
    {pose.visible && <line className="mindlab-recorded-sight" x1={seeker.x} y1={seeker.y} x2={person.x} y2={person.y} />}
    <g className={`mindlab-recorded-person${pose.visible ? " is-seen" : ""}`} transform={`translate(${person.x} ${person.y})`}>
      <circle r={subject ? 18 : 11} /><text x="35" y="17">Person</text>
    </g>
    <g className="mindlab-recorded-seeker" transform={`translate(${seeker.x} ${seeker.y})`} opacity={subject ? .2 : 1}>
      <circle r="14" />
      <path transform={`rotate(${pose.facing})`} d="M-5 5L0-6L5 5Z" />
      <text x="-35" y="-10" opacity={subject ? 0 : 1}>Seeker</text>
    </g>
  </svg>;
}
import type { RefObject } from "react";
