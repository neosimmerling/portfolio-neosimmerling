import Marquee from "../components/Marquee";
import Hero from "../components/Hero";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />

      <section className="portfolio" id="portfolio">
        <div className="section-heading">
          <span>01 / SELECTED WORK</span>
          <h2>MY <span>VISUAL</span> WORLD.</h2>
        </div>

        <div className="gallery">
          <article className="gallery-item football">
            <div className="gallery-image" />
            <div className="gallery-overlay">
              <span>01 / SPORTS</span>
              <h3>IN THE GAME.</h3>
            </div>
          </article>

          <article className="gallery-item events">
            <div className="gallery-image" />
            <div className="gallery-overlay">
              <span>02 / EVENTS</span>
              <h3>REAL MOMENTS.</h3>
            </div>
          </article>

          <article className="gallery-item travel">
            <div className="gallery-image" />
            <div className="gallery-overlay">
              <span>03 / TRAVEL</span>
              <h3>NEW PERSPECTIVES.</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-image">
          <img
            src={`${import.meta.env.BASE_URL}images/about/portrait.jpg`}
            alt="Neo Simmerling ~ shoot by Matti Wirthwein"
          />
          <span>NEOSIMMERLING / PHOTOGRAPHER</span>
        </div>

        <div className="about-content">
          <span className="about-label">02 / ABOUT ME</span>

          <h2>
            BEHIND
            <br />
            THE <span>LENS.</span>
          </h2>

          <p className="about-intro">
            Ich bin Neo – Fotograf und Bildgestalter mit
            einer Leidenschaft für besondere Momente.
          </p>

          <p className="about-text">
            Ob packende Emotionen im Sport, besondere
            Augenblicke auf Events oder neue Perspektiven
            auf Reisen – ich liebe es, Geschichten durch
            meine Kamera zu erzählen.
          </p>

          <a
            href="https://www.instagram.com/neosimmerling"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            MORE ABOUT MY WORK <ArrowUpRight className="button-icon" />
          </a>
        </div>
      </section>
    </main>
  );
}