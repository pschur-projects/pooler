import * as graphql from "@nestjs/graphql";
import { PoolResolverBase } from "./base/pool.resolver.base";
import { Pool } from "./base/Pool";
import { PoolService } from "./pool.service";

@graphql.Resolver(() => Pool)
export class PoolResolver extends PoolResolverBase {
  constructor(protected readonly service: PoolService) {
    super(service);
  }
}
