import { getLessonPlans } from "../../features/lesson-plans/application/get-lesson-plans";
import { InMemoryLessonPlanRepository } from "../../features/lesson-plans/infrastructure/in-memory-lesson-plan-repository";
import { LessonPlansPage } from "../../features/lesson-plans/presentation/LessonPlansPage";

export default async function Page() {
  const lessonPlans = await getLessonPlans(new InMemoryLessonPlanRepository());

  return <LessonPlansPage lessonPlans={lessonPlans} />;
}