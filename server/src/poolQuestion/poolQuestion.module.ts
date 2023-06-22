import { Module } from "@nestjs/common";
import { PoolQuestionModuleBase } from "./base/poolQuestion.module.base";
import { PoolQuestionService } from "./poolQuestion.service";
import { PoolQuestionController } from "./poolQuestion.controller";
import { PoolQuestionResolver } from "./poolQuestion.resolver";

@Module({
  imports: [PoolQuestionModuleBase],
  controllers: [PoolQuestionController],
  providers: [PoolQuestionService, PoolQuestionResolver],
  exports: [PoolQuestionService],
})
export class PoolQuestionModule {}
