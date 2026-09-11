import type { Grade, GradeRepository } from "../domain/grade";

const grades: Grade[] = [
  {
    id: "5",
    number: 5,
    ordinal: "th",
    name: "Fifth grade",
    description: "Build strong foundations and discover new subjects.",
    theme: "green",
  },
  {
    id: "6",
    number: 6,
    ordinal: "th",
    name: "Sixth grade",
    description: "Grow your confidence with clear, guided lessons.",
    theme: "orange",
  },
  {
    id: "7",
    number: 7,
    ordinal: "th",
    name: "Seventh grade",
    description: "Tackle bigger ideas with support at every step.",
    theme: "coral",
  },
  {
    id: "8",
    number: 8,
    ordinal: "th",
    name: "Eighth grade",
    description: "Prepare for what is next with a plan that fits you.",
    theme: "cyan",
  },
];

export class InMemoryGradeRepository implements GradeRepository {
  async getAll(): Promise<Grade[]> {
    return grades;
  }

  async getById(id: string): Promise<Grade | undefined> {
    return grades.find((grade) => grade.id === id);
  }
}