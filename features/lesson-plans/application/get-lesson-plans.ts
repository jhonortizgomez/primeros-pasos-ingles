import type { LessonPlanRepository } from "../domain/lesson-plan";

export function getLessonPlans(repository: LessonPlanRepository) {
  return repository.getAll();
}