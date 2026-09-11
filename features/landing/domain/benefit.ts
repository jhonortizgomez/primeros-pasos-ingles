export type BenefitIcon = "lessons" | "ai" | "mentoring";

export type Benefit = {
  id: string;
  icon: BenefitIcon;
  title: string;
  description: string;
};

export interface BenefitRepository {
  getAll(): Promise<Benefit[]>;
}