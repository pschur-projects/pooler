import { Answer as TAnswer } from "../api/answer/Answer";

export const ANSWER_TITLE_FIELD = "answer";

export const AnswerTitle = (record: TAnswer): string => {
  return record.answer || String(record.id);
};
