import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  answer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  poolQuestionId?: SortOrder;
  updatedAt?: SortOrder;
};
