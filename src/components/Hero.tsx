
import { useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleMouseMove}
      style={
        {
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        } as React.CSSProperties
      }
    >
      <div className="hero-color-reveal" />

      <div className="hero-content">
        <p className="hero-label">CAPTURING MOMENTS.</p>

        <h1>
          BEYOND
          <br />
          THE <span>FRAME.</span>
        </h1>

        <p className="hero-description">
          Emotionen. Perspektiven. Geschichten.
          <br />
          Ich halte Momente fest, die bleiben.
        </p>

        <a href="#portfolio" className="hero-button">
          DISCOVER MY WORK <span>↘</span>
        </a>
      </div>
    </section>
  );
}
