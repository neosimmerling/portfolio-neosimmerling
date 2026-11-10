import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    setMenuOpen(false);

    const scrollToSection = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToSection, 150);
    } else {
      scrollToSection();
    }
  };

  const moveIndicator = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const nav = navRef.current;
    if (!nav) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = event.currentTarget.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      visible: true,
    });
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <Link
        to="/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        NEOSIMMERLING.
      </Link>

      <div
        className="nav-links"
        ref={navRef}
        onMouseLeave={() =>
          setIndicator((current) => ({
            ...current,
            visible: false,
          }))
        }
      >
        <span
          className="nav-indicator"
          style={{
            width: `${indicator.width}px`,
            transform: `translateX(${indicator.left}px)`,
            opacity: indicator.visible ? 1 : 0,
          }}
        />

        <a
          href="#home"
          onClick={(e) => handleSectionClick(e, "home")}
          onMouseEnter={moveIndicator}
        >
          Home
        </a>

        <a
          href="#portfolio"
          onClick={(e) => handleSectionClick(e, "portfolio")}
          onMouseEnter={moveIndicator}
        >
          Portfolio
        </a>
        
        <a
          href="#about"
          onClick={(e) => handleSectionClick(e, "about")}
          onMouseEnter={moveIndicator}
        >
          Über mich
        </a>

        <a
          href="#contact"
          onClick={(e) => handleSectionClick(e, "contact")}
          onMouseEnter={moveIndicator}
        >
          Kontakt
        </a>
      </div>

      <a
        href="#contact"
        className="nav-contact"
        onClick={(e) => handleSectionClick(e, "contact")}
      >
        Let's talk <ArrowUpRight className="button-icon" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
