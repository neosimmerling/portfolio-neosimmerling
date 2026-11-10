import { Asterisk } from "lucide-react";

const MarqueeContent = () => (
  <>
    <span>
      SPORTS PHOTOGRAPHY <Asterisk className="decoration-icon" />
    </span>
    <span>
      EVENTS <Asterisk className="decoration-icon" />
    </span>
    <span>
      TRAVEL <Asterisk className="decoration-icon" />
    </span>
    <span>
      VISUAL STORYTELLING <Asterisk className="decoration-icon" />
    </span>
  </>
);

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <div className="marquee-group">
          <MarqueeContent />
        </div>

        <div className="marquee-group" aria-hidden="true">
          <MarqueeContent />
        </div>

        <div className="marquee-group" aria-hidden="true">
          <MarqueeContent />
        </div>

        <div className="marquee-group" aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}