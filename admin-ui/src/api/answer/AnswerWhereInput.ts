import { StringFilter } from "../../util/StringFilter";
import { PoolQuestionWhereUniqueInput } from "../poolQuestion/PoolQuestionWhereUniqueInput";

export type AnswerWhereInput = {
  answer?: StringFilter;
  id?: StringFilter;
  poolQuestion?: PoolQuestionWhereUniqueInput;
};
