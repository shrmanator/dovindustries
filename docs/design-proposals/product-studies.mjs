export function seferListing() {
  return `<a class="listing-study" href="https://simplysefer.com/listings/244" target="_blank" rel="noopener noreferrer"
    aria-label="View the Chumash Torah Temimah listing on Simply Sefer">
    <img src="assets/torah-temimah.webp" alt="Four burgundy volumes of Chumash Torah Temimah" width="80" height="104">
    <div><p class="listing-study-title">Chumash Torah Temimah</p>
      <p class="listing-study-detail">4 volumes. Vayikra missing.</p><span class="listing-study-price">$20</span></div>
    <span class="listing-study-open" aria-hidden="true">↗</span></a>`;
}

export function amountStudy() {
  return `<figure class="donation-scene amount-study" aria-label="Interactive study of DigiDov’s USDC amount selector">
    <div class="donation-sheet"><div class="donation-top"><strong>digiDov</strong><span>USDC</span></div>
      <h4>Choose an amount</h4><div class="amount-choices" role="group" aria-label="Example donation amount">
      ${[20, 50, 100].map(amount => `<button type="button" class="amount ${amount === 50 ? "selected" : ""}"
        data-amount="${amount}" aria-pressed="${amount === 50}"><b>$${amount}</b><span>~${amount.toFixed(3)} USDC</span></button>`).join("")}
      </div>
    </div><output class="amount-study-result" aria-live="polite" data-amount-result>50.000 USDC selected</output></figure>`;
}

export function bindProductStudies(root) {
  root.addEventListener("click", event => {
    const button = event.target.closest("button[data-amount]");
    if (!button || !root.contains(button)) return;
    const amount = Number(button.dataset.amount);
    if (![20, 50, 100].includes(amount)) return;
    const study = button.closest(".amount-study");
    study.querySelectorAll("button[data-amount]").forEach(choice => {
      const selected = Number(choice.dataset.amount) === amount;
      choice.classList.toggle("selected", selected);
      choice.setAttribute("aria-pressed", String(selected));
    });
    study.querySelector("[data-amount-result]").textContent = `${amount.toFixed(3)} USDC selected`;
  });
}
