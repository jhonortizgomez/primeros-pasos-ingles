export type LessonResource = {
  label: string;
  type: "video" | "worksheet" | "game";
  url: string;
};

export type LessonQuestion = {
  prompt: string;
  options: string[];
  answer: string;
};

export type LessonPlan = {
  id: string;
  title: string;
  subtitle: string;
  level: "A1" | "A2";
  color: "green" | "orange" | "cyan";
  icon: string;
  emoji: string;
  image: string;
  imageAlt: string;
  explanation: string;
  examples: string[];
  objectives: string[];
  resources: LessonResource[];
  questions: LessonQuestion[];
  reflection: string;
};

export interface LessonPlanRepository {
  getAll(): Promise<LessonPlan[]>;
}