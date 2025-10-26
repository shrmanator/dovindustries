export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center border-b-4 border-accent">
      <div className="w-full px-6 py-20">
        {/* Brutalist asymmetric layout */}
        <div className="mb-12">
          <div className="text-accent text-sm mb-4">[DOVINDUSTRIES]</div>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter">
            WEB3<br/>
            <span className="text-accent">VR</span>
          </h1>
        </div>

        <div className="border-4 border-white p-8 md:p-12 max-w-4xl">
          <p className="text-accent text-2xl md:text-4xl font-bold uppercase mb-4">
            &gt; FORWARD_THINKING<br/>
            &gt; BACKWARD_COMPATIBLE
          </p>
          <p className="text-xl md:text-2xl">
            Crypto platforms. VR locomotion research.
          </p>
        </div>
      </div>
    </section>
  );
}
