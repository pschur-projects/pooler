import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoolQuestionServiceBase } from "./base/poolQuestion.service.base";

@Injectable()
export class PoolQuestionService extends PoolQuestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
