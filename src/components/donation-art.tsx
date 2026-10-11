import { DonationChoices } from "./donation-choices";

export function DonationArt() {
  return <figure className="donation-art">
    <svg viewBox="0 0 1280 960" role="img"
      aria-label="Illustration of DigiDov’s donation amount selector, with a 50-dollar USDC gift selected">
      <rect width="1280" height="960" fill="#ddd6e6" />
      <rect x="100" y="72" width="1080" height="848" rx="20" fill="#fdfcfe" />
      <text x="164" y="190" fill="#302538" fontSize="54" fontWeight="500">digiDov</text>
      <g transform="translate(929 134)" fill="#302538">
        <circle cx="29" cy="29" r="27" fill="#735587" />
        <path d="M20 13C6 18 6 40 20 45M38 13C52 18 52 40 38 45M29 13V45M36 21C26 13 14 25 28 29C43 33 34 45 22 37"
          fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <text x="72" y="44" fontSize="42">USDC</text>
      </g>
      <text x="164" y="310" fill="#302538" fontSize="66" fontWeight="500">Choose an amount</text>
      <DonationChoices />
      <text x="164" y="864" fill="#6b5a77" fontSize="44">Or enter your own</text>
    </svg>
  </figure>;
}
