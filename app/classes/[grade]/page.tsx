import Link from "next/link";
import { notFound } from "next/navigation";
import { getGradeById } from "../../../features/class-selection/application/get-grades";
import { InMemoryGradeRepository } from "../../../features/class-selection/infrastructure/in-memory-grade-repository";

type GradePageProps = { params: Promise<{ grade: string }> };

export default async function GradePage({ params }: GradePageProps) {
  const { grade: gradeId } = await params;
  const grade = await getGradeById(new InMemoryGradeRepository(), gradeId);

  if (!grade) notFound();

  return (
    <main className={`class-page class-page--${grade.theme}`}>
      <Link className="class-page__back" href="/">← Back to eŠkolica</Link>
      <div className="class-page__content">
        <p className="eyebrow">Your learning space</p>
        <div className="class-page__number"><span>{grade.number}</span><sup>{grade.ordinal}</sup></div>
        <h1>{grade.name}</h1>
        <p>{grade.description}</p>
        <div className="coming-soon">Lessons and activities are getting ready for you.</div>
        <Link className="primary-button" href="/#choose-class">Explore another class <span aria-hidden="true">→</span></Link>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return ["5", "6", "7", "8"].map((grade) => ({ grade }));
}