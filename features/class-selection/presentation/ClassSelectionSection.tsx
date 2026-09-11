import type { Grade } from "../domain/grade";
import { GradeCard } from "./GradeCard";

type ClassSelectionSectionProps = {
  grades: Grade[];
};

export function ClassSelectionSection({ grades }: ClassSelectionSectionProps) {
  return (
    <section className="section-shell class-selection" id="choose-class" aria-labelledby="class-title">
      <div className="section-heading">
        <p className="eyebrow">Your next chapter</p>
        <h2 id="class-title">Choose your Class</h2>
        <p>Choose your grade and start learning tailored to your school curriculum.</p>
      </div>
      <div className="grade-grid">
        {grades.map((grade) => <GradeCard key={grade.id} grade={grade} />)}
      </div>
    </section>
  );
}