/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PoolQuestionWhereInput } from "./PoolQuestionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PoolQuestionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PoolQuestionWhereInput,
  })
  @ValidateNested()
  @Type(() => PoolQuestionWhereInput)
  @IsOptional()
  @Field(() => PoolQuestionWhereInput, {
    nullable: true,
  })
  every?: PoolQuestionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoolQuestionWhereInput,
  })
  @ValidateNested()
  @Type(() => PoolQuestionWhereInput)
  @IsOptional()
  @Field(() => PoolQuestionWhereInput, {
    nullable: true,
  })
  some?: PoolQuestionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoolQuestionWhereInput,
  })
  @ValidateNested()
  @Type(() => PoolQuestionWhereInput)
  @IsOptional()
  @Field(() => PoolQuestionWhereInput, {
    nullable: true,
  })
  none?: PoolQuestionWhereInput;
}
export { PoolQuestionListRelationFilter as PoolQuestionListRelationFilter };
