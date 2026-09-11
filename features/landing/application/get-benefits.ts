import type { Benefit, BenefitRepository } from "../domain/benefit";

export async function getBenefits(repository: BenefitRepository): Promise<Benefit[]> {
  return repository.getAll();
}