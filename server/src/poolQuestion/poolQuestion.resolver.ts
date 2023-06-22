import * as graphql from "@nestjs/graphql";
import { PoolQuestionResolverBase } from "./base/poolQuestion.resolver.base";
import { PoolQuestion } from "./base/PoolQuestion";
import { PoolQuestionService } from "./poolQuestion.service";

@graphql.Resolver(() => PoolQuestion)
export class PoolQuestionResolver extends PoolQuestionResolverBase {
  constructor(protected readonly service: PoolQuestionService) {
    super(service);
  }
}
