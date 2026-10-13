import { scrollToSection } from "../hooks/useLenis";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-backdrop">
        <img
          src="/screenshots/hero.png"
          alt="Hero visual"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <p className="hero-kicker">DIPANKAR // GAME DEVELOPER</p>
        <h1 className="hero-title">
          Imagination with<br /><em> logical thinking</em>
        </h1>
        <p className="hero-subtitle">
          horror with twists and singleplayer gamedeveloper.
        </p>
      </div>
      <button
        type="button"
        className="scroll-down"
        onClick={() => scrollToSection("#games")}
      >
        SCROLL ↓
      </button>
    </section>
  );
}
