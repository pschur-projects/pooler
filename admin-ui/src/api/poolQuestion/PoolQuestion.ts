import { JsonValue } from "type-fest";
import { Answer } from "../answer/Answer";
import { Pool } from "../pool/Pool";

export type PoolQuestion = {
  answers: JsonValue;
  antworten?: Array<Answer>;
  createdAt: Date;
  id: string;
  pool?: Pool | null;
  question: string;
  updatedAt: Date;
};
