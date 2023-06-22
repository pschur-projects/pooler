import { PoolQuestionUpdateManyWithoutPoolsInput } from "./PoolQuestionUpdateManyWithoutPoolsInput";

export type PoolUpdateInput = {
  currentQuestion?: string | null;
  name?: string;
  poolQuestions?: PoolQuestionUpdateManyWithoutPoolsInput;
};
