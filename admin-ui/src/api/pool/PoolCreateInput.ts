import { PoolQuestionCreateNestedManyWithoutPoolsInput } from "./PoolQuestionCreateNestedManyWithoutPoolsInput";

export type PoolCreateInput = {
  currentQuestion?: string | null;
  name: string;
  poolQuestions?: PoolQuestionCreateNestedManyWithoutPoolsInput;
};
