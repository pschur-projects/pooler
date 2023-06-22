import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PoolQuestionListRelationFilter } from "../poolQuestion/PoolQuestionListRelationFilter";

export type PoolWhereInput = {
  currentQuestion?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  poolQuestions?: PoolQuestionListRelationFilter;
};
