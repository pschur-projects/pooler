import { PoolQuestion as TPoolQuestion } from "../api/poolQuestion/PoolQuestion";

export const POOLQUESTION_TITLE_FIELD = "id";

export const PoolQuestionTitle = (record: TPoolQuestion): string => {
  return record.id || String(record.id);
};
