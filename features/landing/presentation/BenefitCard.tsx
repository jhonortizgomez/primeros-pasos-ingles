import type { Benefit } from "../domain/benefit";

type BenefitCardProps = { benefit: Benefit };

function BenefitIcon({ type }: { type: Benefit["icon"] }) {
  if (type === "lessons") return <span className="benefit-icon benefit-icon--lessons" aria-hidden="true">▤</span>;
  if (type === "ai") return <span className="benefit-icon benefit-icon--ai" aria-hidden="true">✦</span>;
  return <span className="benefit-icon benefit-icon--mentoring" aria-hidden="true">◉</span>;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="benefit-card">
      <BenefitIcon type={benefit.icon} />
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </article>
  );
}