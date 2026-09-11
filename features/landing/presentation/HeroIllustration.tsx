export function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-label="Students learning together" role="img">
      <div className="doodle doodle-star">✦</div>
      <div className="doodle doodle-spark">✧</div>
      <div className="doodle doodle-pencil">╱</div>
      <div className="book book--left"><span>ABC</span></div>
      <div className="book book--right"><span>123</span></div>
      <div className="student student--left">
        <div className="hair hair--brown" />
        <div className="head"><span className="earpiece" /></div>
        <div className="headphones headphones--left" />
        <div className="body body--green"><span className="collar" /></div>
        <div className="laptop laptop--green"><span /></div>
      </div>
      <div className="student student--right">
        <div className="hair hair--dark" />
        <div className="head"><span className="earpiece" /></div>
        <div className="headphones headphones--right" />
        <div className="body body--orange"><span className="collar" /></div>
        <div className="laptop laptop--orange"><span /></div>
      </div>
    </div>
  );
}