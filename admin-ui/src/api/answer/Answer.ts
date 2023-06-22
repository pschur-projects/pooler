import { PoolQuestion } from "../poolQuestion/PoolQuestion";

export type Answer = {
  answer: string;
  createdAt: Date;
  id: string;
  poolQuestion?: PoolQuestion;
  updatedAt: Date;
};
