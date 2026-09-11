import Link from "next/link";
import type { Grade } from "../domain/grade";

type GradeCardProps = {
  grade: Grade;
};

export function GradeCard({ grade }: GradeCardProps) {
  return (
    <article className={`grade-card grade-card--${grade.theme}`}>
      <div className="grade-card__number" aria-label={`${grade.number}${grade.ordinal} grade`}>
        <span>{grade.number}</span>
        <sup>{grade.ordinal}</sup>
      </div>
      <div>
        <h3>{grade.name}</h3>
        <p>{grade.description}</p>
      </div>
      <Link className="grade-card__link" href={`/classes/${grade.id}`}>
        Choose <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}