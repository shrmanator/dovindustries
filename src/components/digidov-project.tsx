import { ExternalLink } from "./external-link";
import { DonationArt } from "./donation-art";

export function DigiDovProject({ presentation = "standard" }: { presentation?: "standard" | "studio" }) {
  return <article id="digidov" className="digidov-project" aria-labelledby="digidov-title">
    <div className="digidov-intro">
      <h3 id="digidov-title">DigiDov</h3>
      <p>Crypto donations for nonprofits.</p>
      {presentation === "studio" && <dl className="studio-digidov-facts">
        <div><dt>Accept</dt><dd>ETH and USDC through a reusable donation link.</dd></div>
        <div><dt>Receipts</dt><dd>Issued automatically to donors.</dd></div>
        <div><dt>Funds</dt><dd>Keep crypto, or receive dollars through DigiDov Cash.</dd></div>
      </dl>}
      <div className="digidov-links">
        <ExternalLink href="https://www.digidov.com/">Explore DigiDov</ExternalLink>
      </div>
    </div>
    {presentation === "studio" ? <DonationArt /> : <dl className="digidov-capabilities">
      <div><dt>Donations</dt><dd>ETH and USDC, through one reusable donation link.</dd></div>
      <div><dt>Donor receipts</dt><dd>Issued automatically.</dd></div>
      <div><dt>Your funds</dt><dd>Keep crypto, or convert it to dollars in your bank account with DigiDov Cash.</dd></div>
    </dl>}
  </article>;
}
