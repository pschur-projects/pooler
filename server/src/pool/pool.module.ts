import { Module } from "@nestjs/common";
import { PoolModuleBase } from "./base/pool.module.base";
import { PoolService } from "./pool.service";
import { PoolController } from "./pool.controller";
import { PoolResolver } from "./pool.resolver";

@Module({
  imports: [PoolModuleBase],
  controllers: [PoolController],
  providers: [PoolService, PoolResolver],
  exports: [PoolService],
})
export class PoolModule {}
