import { JsonFilter } from "../../util/JsonFilter";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";

export type PoolQuestionWhereInput = {
  answers?: JsonFilter;
  antworten?: AnswerListRelationFilter;
  id?: StringFilter;
  pool?: PoolWhereUniqueInput;
  question?: StringFilter;
};
