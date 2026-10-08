export function DonationIllustration() {
  return <figure className="donation-art">
    <svg viewBox="0 0 640 400" role="img" aria-label="Illustration of a crypto donation connected to a donor receipt">
      <rect x="48" y="130" width="186" height="140" rx="4" fill="#344cf4" />
      <text x="72" y="181" fill="#fff" fontSize="23">Crypto</text>
      <text x="72" y="211" fill="#fff" fontSize="23">donation</text>
      <path d="M234 200h132m-12-10 12 10-12 10" fill="none" stroke="#344cf4" strokeWidth="2" />
      <path d="M382 60h156l38 38v244H382Z" fill="#fff" stroke="#c8d0da" strokeWidth="1.5" />
      <path d="M538 60v38h38" fill="none" stroke="#c8d0da" strokeWidth="1.5" />
      <text x="406" y="144" fill="#20242b" fontSize="20">Donor receipt</text>
      <path d="M406 183h146M406 206h146M406 229h99" stroke="#d7dce3" strokeWidth="3" />
      <circle cx="424" cy="288" r="18" fill="#e8edf9" />
      <path d="m416 288 6 6 11-12" fill="none" stroke="#344cf4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M456 288h80" stroke="#d7dce3" strokeWidth="3" />
    </svg>
  </figure>;
}
