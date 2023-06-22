import { InputJsonValue } from "../../types";
import { AnswerCreateNestedManyWithoutPoolQuestionsInput } from "./AnswerCreateNestedManyWithoutPoolQuestionsInput";
import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";

export type PoolQuestionCreateInput = {
  answers?: InputJsonValue;
  antworten?: AnswerCreateNestedManyWithoutPoolQuestionsInput;
  pool?: PoolWhereUniqueInput | null;
  question: string;
};
