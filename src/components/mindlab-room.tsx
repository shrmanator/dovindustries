type MindlabRoomProps = { characterView: boolean };

export function MindlabRoom({ characterView }: MindlabRoomProps) {
  return <svg className="mindlab-room" viewBox="60 30 780 550" role="img"
    aria-label={characterView
      ? "Marek’s limited view of the house. He can see the area ahead, while another character is out of sight behind a wall."
      : "A house with an entry, kitchen, bedroom and living room. Marek is in the living room; another character is in the kitchen."}>
    <defs>
      <pattern id="mindlab-grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M30 0H0V30" fill="none" stroke="currentColor" strokeWidth=".6" opacity=".12" />
      </pattern>
    </defs>
    <rect className="mindlab-ground" width="900" height="600" />
    <rect x="90" y="64" width="720" height="480" fill="url(#mindlab-grid)" />
    <g className="mindlab-floor">
      <rect x="90" y="64" width="300" height="480" />
      <rect x="390" y="64" width="210" height="240" />
      <rect x="600" y="64" width="210" height="240" />
      <rect x="390" y="304" width="420" height="240" />
    </g>
    <path className="mindlab-sight" d="M690 424L810 340V508Z" />
    <g className="mindlab-furniture" aria-hidden="true">
      <path d="M426 99H560V131H458V191H426Z" />
      <rect x="644" y="110" width="123" height="137" rx="5" />
      <path d="M467 417H559V482H467V466H540V433H467Z" />
      <rect x="435" y="346" width="91" height="36" rx="4" />
    </g>
    <path className="mindlab-walls" d="M90 64H810V544H90Z M390 64V268 M390 340V544 M390 304H540 M600 304H810 M600 64V169 M600 241V304" />
    <g className="mindlab-room-labels" aria-hidden="true">
      <text x="224" y="313">Entry</text>
      <text x="495" y="284">Kitchen</text>
      <text x="706" y="278">Bedroom</text>
      <text x="599" y="516">Living</text>
    </g>
    <g className="mindlab-unseen" aria-hidden={characterView}>
      <circle cx="516" cy="188" r="16" />
      <path d="M508 184L509 179L519 179L524 190" />
      <text x="516" y="231">Player</text>
    </g>
    <g className="mindlab-character">
      <circle cx="690" cy="424" r="21" />
      <path d="M688 418L699 424L688 430" />
      <text x="684" y="473">Marek</text>
    </g>
  </svg>;
}
