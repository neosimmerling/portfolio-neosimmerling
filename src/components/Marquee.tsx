const MarqueeContent = () => (
  <>
    <span>SPORTS PHOTOGRAPHY <b>✳</b></span>
    <span>EVENTS <b>✳</b></span>
    <span>TRAVEL <b>✳</b></span>
    <span>VISUAL STORYTELLING <b>✳</b></span>
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