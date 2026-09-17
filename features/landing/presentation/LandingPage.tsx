import type { Benefit } from "../domain/benefit";
import type { Grade } from "../../class-selection/domain/grade";
import { ClassSelectionSection } from "../../class-selection/presentation/ClassSelectionSection";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { EducationOverviewSection } from "./EducationOverviewSection";
import { WhyEscolicaSection } from "./WhyEscolicaSection";

type LandingPageProps = { grades: Grade[]; benefits: Benefit[] };

export function LandingPage({ grades, benefits }: LandingPageProps) {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <EducationOverviewSection />
      </main>
      <footer className="site-footer">eŠKOLICA <span>Learning that feels like progress.</span></footer>
    </div>
  );
}