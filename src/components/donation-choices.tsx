const AMOUNTS = [20, 50, 100];

export function DonationChoices() {
  return <g>
    {AMOUNTS.map((amount, index) => {
      const selected = amount === 50;
      return <g key={amount} transform={`translate(164 ${376 + index * 152})`}>
        <rect width="952" height="128" rx="12"
          fill={selected ? "#e5daed" : "#fdfcfe"}
          stroke={selected ? "#846195" : "#d9d3dd"} strokeWidth="2" />
        <text x="36" y="88" fill="#302538" fontSize="72" fontWeight="500">${amount}</text>
        <text x="916" y="83" textAnchor="end" fill="#6b5a77" fontSize="44">~{amount.toFixed(3)} USDC</text>
      </g>;
    })}
  </g>;
}
