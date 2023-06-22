import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoolService } from "./pool.service";
import { PoolControllerBase } from "./base/pool.controller.base";

@swagger.ApiTags("pools")
@common.Controller("pools")
export class PoolController extends PoolControllerBase {
  constructor(protected readonly service: PoolService) {
    super(service);
  }
}
