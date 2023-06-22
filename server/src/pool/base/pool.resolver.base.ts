/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { CreatePoolArgs } from "./CreatePoolArgs";
import { UpdatePoolArgs } from "./UpdatePoolArgs";
import { DeletePoolArgs } from "./DeletePoolArgs";
import { PoolCountArgs } from "./PoolCountArgs";
import { PoolFindManyArgs } from "./PoolFindManyArgs";
import { PoolFindUniqueArgs } from "./PoolFindUniqueArgs";
import { Pool } from "./Pool";
import { PoolQuestionFindManyArgs } from "../../poolQuestion/base/PoolQuestionFindManyArgs";
import { PoolQuestion } from "../../poolQuestion/base/PoolQuestion";
import { PoolService } from "../pool.service";
@graphql.Resolver(() => Pool)
export class PoolResolverBase {
  constructor(protected readonly service: PoolService) {}

  async _poolsMeta(
    @graphql.Args() args: PoolCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Pool])
  async pools(@graphql.Args() args: PoolFindManyArgs): Promise<Pool[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Pool, { nullable: true })
  async pool(@graphql.Args() args: PoolFindUniqueArgs): Promise<Pool | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Pool)
  async createPool(@graphql.Args() args: CreatePoolArgs): Promise<Pool> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Pool)
  async updatePool(@graphql.Args() args: UpdatePoolArgs): Promise<Pool | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Pool)
  async deletePool(@graphql.Args() args: DeletePoolArgs): Promise<Pool | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [PoolQuestion], { name: "poolQuestions" })
  async resolveFieldPoolQuestions(
    @graphql.Parent() parent: Pool,
    @graphql.Args() args: PoolQuestionFindManyArgs
  ): Promise<PoolQuestion[]> {
    const results = await this.service.findPoolQuestions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
