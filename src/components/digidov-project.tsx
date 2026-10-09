import { ExternalLink } from "./external-link";

export function DigiDovProject() {
  return <article id="digidov" className="digidov-project" aria-labelledby="digidov-title">
    <div className="digidov-intro">
      <h3 id="digidov-title">DigiDov</h3>
      <p>Crypto donations for nonprofits.</p>
    </div>
    <p className="digidov-statement">Accept crypto.<br />Put it to work.</p>
    <div className="digidov-capabilities">
      <div><h4>One donation link.</h4><p>Accept ETH and USDC through a link you can share anywhere.</p></div>
      <div><h4>Receipts, handled.</h4><p>Donor receipts are issued automatically.</p></div>
      <div><h4>Dollars in your bank.</h4><p>Choose to convert donations with DigiDov Cash, or keep them in crypto.</p></div>
    </div>
    <div className="digidov-links">
      <ExternalLink href="https://www.digidov.com/">Explore DigiDov</ExternalLink>
      <aside id="supermint" aria-label="DigiDov origins">
        <ExternalLink href="https://supermint.ca">Previously SuperMint</ExternalLink>
      </aside>
    </div>
  </article>;
}
