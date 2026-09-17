import Link from "next/link";
import { HeroIllustration } from "./HeroIllustration";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">
          <span /> Learning made wonderfully simple
        </p>
        <h1 id="hero-title">
          <span className="word-green">Discovering</span> <span>english</span>
          <br className="desktop-break" />{" "}
          <span className="word-cyan">Through</span> <span>Technology for</span>
          <br className="desktop-break" />{" "}
          <span className="word-orange">primary school</span>
        </h1>
        <p className="hero-description">
          Explore subjects, track your progress, and get help when you need it.
          Ready to shine? Let&apos;s go!
        </p>
        <Link className="primary-button" href="/lesson-plans">
          <p className="primary-button-text text-3xl">
            Go to study <span aria-hidden="true">→</span>
          </p>
        </Link>
      </div>
      <HeroIllustration />
    </section>
  );
}
