import type { Grade, GradeRepository } from "../domain/grade";

export async function getGrades(repository: GradeRepository): Promise<Grade[]> {
  return repository.getAll();
}

export async function getGradeById(
  repository: GradeRepository,
  id: string,
): Promise<Grade | undefined> {
  return repository.getById(id);
}