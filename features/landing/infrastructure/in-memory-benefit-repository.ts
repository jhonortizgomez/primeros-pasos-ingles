import type { Benefit, BenefitRepository } from "../domain/benefit";

const benefits: Benefit[] = [
  {
    id: "structured-lessons",
    icon: "lessons",
    title: "Structured lessons",
    description:
      "Material aligned with Croatian school textbooks, organized for easier learning and monitoring.",
  },
  {
    id: "ai-support",
    icon: "ai",
    title: "AI support",
    description:
      "Personalized answers to questions and assistance in overcoming difficult parts of the material through AI.",
  },
  {
    id: "one-on-one-mentoring",
    icon: "mentoring",
    title: "1-on-1 mentoring",
    description:
      "Individual learning sessions with experienced teachers via video calls for help with more complex topics.",
  },
];

export class InMemoryBenefitRepository implements BenefitRepository {
  async getAll(): Promise<Benefit[]> {
    return benefits;
  }
}