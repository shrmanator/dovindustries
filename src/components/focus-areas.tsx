const capabilities = [
  {
    title: "WEB3_BLOCKCHAIN",
    description:
      "Smart contracts on Ethereum. DeFi protocols. NFT platforms. Tax compliance automation. On-chain everything.",
  },
  {
    title: "IMMERSIVE_VR_AR",
    description:
      "Custom locomotion systems. Sensor fusion. Motion tracking without external hardware.",
  },
];

export function FocusAreas() {
  return (
    <section
      id="capabilities"
      className="border-b-4 border-accent px-6 py-24"
    >
      <div className="mb-16">
        <h2 className="text-[8vw] md:text-[6vw] font-black uppercase leading-[0.85]">
          WHAT_WE<br/>
          <span className="text-accent">BUILD</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-0 border-4 border-white md:grid-cols-2">
        {capabilities.map((capability, index) => (
          <div
            key={capability.title}
            className={`group border-white p-8 md:p-12 hover:bg-accent hover:text-black transition-colors ${
              index === 0 ? 'border-b-4 md:border-b-0 md:border-r-4' : ''
            }`}
          >
            <div className="mb-6 text-6xl font-black text-accent group-hover:text-black">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="mb-6 text-2xl md:text-3xl font-black uppercase">
              {capability.title}
            </h3>
            <p className="text-lg leading-relaxed">
              {capability.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
