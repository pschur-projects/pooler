import { PoolQuestionWhereUniqueInput } from "../poolQuestion/PoolQuestionWhereUniqueInput";

export type AnswerCreateInput = {
  answer: string;
  poolQuestion: PoolQuestionWhereUniqueInput;
};
