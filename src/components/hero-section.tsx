import Image from "next/image";
export function HeroSection() {
  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-intro">
      <h1 id="hero-title">Software, hardware,<br className="desktop-break" /> and room to explore.</h1>
      <div className="hero-description">
        <p>We build marketplaces and payment tools, and research AI drawing, movement in VR, and compact electric transport.</p>
        <a className="pill-link" href="#work">Explore the work</a>
      </div>
    </div>
    <div className="hero-art">
      <Image src="/images/studio-sculpture.webp" alt="" width={1774} height={887}
        sizes="(max-width: 700px) 100vw, 90vw" preload fetchPriority="high" className="hero-image" />
    </div>
  </section>;
}
