import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoolQuestionService } from "./poolQuestion.service";
import { PoolQuestionControllerBase } from "./base/poolQuestion.controller.base";

@swagger.ApiTags("poolQuestions")
@common.Controller("poolQuestions")
export class PoolQuestionController extends PoolQuestionControllerBase {
  constructor(protected readonly service: PoolQuestionService) {
    super(service);
  }
}
