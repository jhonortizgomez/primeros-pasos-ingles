export type GradeTheme = "green" | "orange" | "coral" | "cyan";

export type Grade = {
  id: string;
  number: 5 | 6 | 7 | 8;
  ordinal: string;
  name: string;
  description: string;
  theme: GradeTheme;
};

export interface GradeRepository {
  getAll(): Promise<Grade[]>;
  getById(id: string): Promise<Grade | undefined>;
}