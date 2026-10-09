export function DonationFlow() {
  return <figure className="donation-flow" aria-label="DigiDov accepts ETH or USDC through a reusable donation link, automatically issues donor receipts, and lets nonprofits keep crypto or convert it to dollars with DigiDov Cash.">
    <div className="donation-currencies"><span>ETH</span><span className="donation-or">or</span><span>USDC</span></div>
    <svg className="donation-stem" viewBox="0 0 480 76" fill="none" aria-hidden="true">
      <path d="M150 2C152 27 158 38 238 39M332 2C330 27 322 39 238 39M238 39L240 74" />
    </svg>
    <p className="donation-link-label">One reusable donation link</p>
    <p className="donation-receipt">Automatic donor receipts</p>
    <svg className="donation-branches" viewBox="0 0 480 74" fill="none" aria-hidden="true">
      <path d="M240 1C240 31 220 34 123 35C113 35 105 49 106 72M240 1C240 31 260 34 357 35C368 35 375 49 374 72" />
    </svg>
    <div className="donation-outcomes">
      <div><p>Keep crypto</p></div>
      <div><p>Convert to dollars</p><span>With DigiDov Cash</span></div>
    </div>
  </figure>;
}
