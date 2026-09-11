import type { Benefit } from "../domain/benefit";
import { BenefitCard } from "./BenefitCard";

type WhyEscolicaSectionProps = { benefits: Benefit[] };

export function WhyEscolicaSection({ benefits }: WhyEscolicaSectionProps) {
  return (
    <section className="section-shell why-section" id="why-eskolica" aria-labelledby="why-title">
      <div className="section-heading">
        <p className="eyebrow">A little help goes a long way</p>
        <h2 id="why-title">Why eŠkolica?</h2>
        <p>Our platform provides various tools for easier mastery of the material through modern digital solutions.</p>
      </div>
      <div className="benefits-grid">
        {benefits.map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)}
      </div>
    </section>
  );
}