import { InputJsonValue } from "../../types";
import { AnswerUpdateManyWithoutPoolQuestionsInput } from "./AnswerUpdateManyWithoutPoolQuestionsInput";
import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";

export type PoolQuestionUpdateInput = {
  answers?: InputJsonValue;
  antworten?: AnswerUpdateManyWithoutPoolQuestionsInput;
  pool?: PoolWhereUniqueInput | null;
  question?: string;
};
