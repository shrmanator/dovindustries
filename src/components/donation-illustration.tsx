export function DonationIllustration() {
  return <figure className="donation-art">
    <svg viewBox="0 0 600 360" role="img" aria-label="A cryptocurrency donation connected to a donor receipt">
      <defs>
        <linearGradient id="coin-face" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#617cff" /><stop offset="1" stopColor="#233bc5" /></linearGradient>
        <linearGradient id="receipt-paper" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#e2e9ee" /></linearGradient>
        <filter id="donation-shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#152861" floodOpacity=".12" /></filter>
      </defs>
      <path d="M199 190 C275 190 267 127 351 127" fill="none" stroke="#9cafc1" strokeWidth="2" strokeDasharray="3 7" />
      <path d="m340 120 12 7-12 7" fill="none" stroke="#9cafc1" strokeWidth="2" />
      <g filter="url(#donation-shadow)" transform="translate(67 75) rotate(-13 80 100)">
        <ellipse cx="92" cy="106" rx="73" ry="81" fill="#253ba9" />
        <ellipse cx="80" cy="100" rx="73" ry="81" fill="url(#coin-face)" stroke="#a0afff" strokeWidth="1.5" />
        <path d="m80 49-27 47 27 16 27-16ZM53 103l27 41 27-41-27 16Z" fill="#e3eaff" />
      </g>
      <g filter="url(#donation-shadow)" transform="translate(341 51) rotate(9 78 100)">
        <path d="M0 0h151v223l-15-10-15 10-15-10-15 10-15-10-15 10-15-10-15 10-15-10-16 10Z" fill="url(#receipt-paper)" />
        <circle cx="76" cy="51" r="17" fill="#dcece0" />
        <path d="m68 51 6 6 11-12" fill="none" stroke="#3c7050" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 96h95M28 116h95M28 136h56M28 174h72" stroke="#b7c5cf" strokeWidth="5" strokeLinecap="round" />
        <path d="M28 174h40" stroke="#6d84ac" strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="303" cy="262" r="4" fill="#7288ab" /><circle cx="283" cy="279" r="2" fill="#bac7d5" />
    </svg>
    <figcaption>Donation in. Documentation alongside it.</figcaption>
  </figure>;
}
