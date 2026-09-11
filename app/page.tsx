import { getGrades } from "../features/class-selection/application/get-grades";
import { InMemoryGradeRepository } from "../features/class-selection/infrastructure/in-memory-grade-repository";
import { getBenefits } from "../features/landing/application/get-benefits";
import { InMemoryBenefitRepository } from "../features/landing/infrastructure/in-memory-benefit-repository";
import { LandingPage } from "../features/landing/presentation/LandingPage";

export default async function Home() {
  const [grades, benefits] = await Promise.all([
    getGrades(new InMemoryGradeRepository()),
    getBenefits(new InMemoryBenefitRepository()),
  ]);

  return <LandingPage grades={grades} benefits={benefits} />;
}
