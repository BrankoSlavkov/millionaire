export type Game = {
  questions: Question[];
};

export type Question = {
  question: string;
  content: string[];
  correct: number;
};
