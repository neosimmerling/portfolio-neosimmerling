import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const scrollToContact = () => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToContact, 150);
    } else {
      scrollToContact();
    }
  };

  return (
    <footer className="footer">
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
          href="#contact"
          className="footer-button"
          onClick={handleContactClick}
        >
          GET IN TOUCH <ArrowUpRight className="button-icon" />
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
            INSTAGRAM <ArrowUpRight className="button-icon" />
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