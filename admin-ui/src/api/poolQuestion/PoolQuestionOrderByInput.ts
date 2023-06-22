import { SortOrder } from "../../util/SortOrder";

export type PoolQuestionOrderByInput = {
  answers?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  poolId?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
