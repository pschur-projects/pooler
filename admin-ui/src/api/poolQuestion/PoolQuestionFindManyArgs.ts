import { PoolQuestionWhereInput } from "./PoolQuestionWhereInput";
import { PoolQuestionOrderByInput } from "./PoolQuestionOrderByInput";

export type PoolQuestionFindManyArgs = {
  where?: PoolQuestionWhereInput;
  orderBy?: Array<PoolQuestionOrderByInput>;
  skip?: number;
  take?: number;
};
