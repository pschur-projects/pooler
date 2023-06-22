import { PoolQuestion } from "../poolQuestion/PoolQuestion";

export type Pool = {
  createdAt: Date;
  currentQuestion: string | null;
  id: string;
  name: string;
  poolQuestions?: Array<PoolQuestion>;
  updatedAt: Date;
};
