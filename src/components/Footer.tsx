
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-cta">
        <span className="footer-label">
          HAVE A PROJECT IN MIND?
        </span>

        <h2>
          LET'S MAKE
          <br />
          <span>IT VISUAL.</span>
        </h2>

        <a
          href="mailto:neosimmerling@gmail.com"
          className="footer-button"
        >
          GET IN TOUCH <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          NEOSIMMERLING.
        </div>

        <div className="footer-links">
          <a
            href="https://www.instagram.com/neosimmerling"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM ↗
          </a>

          <Link to="/impressum">IMPRESSUM</Link>
          <Link to="/datenschutz">DATENSCHUTZ</Link>
        </div>

        <span className="footer-copyright">
          © 2026 NEOSIMMERLING
        </span>
      </div>
    </footer>
  );
}