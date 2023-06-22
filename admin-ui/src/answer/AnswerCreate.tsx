import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PoolQuestionTitle } from "../poolQuestion/PoolQuestionTitle";

export const AnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="answer" source="answer" />
        <ReferenceInput
          source="poolQuestion.id"
          reference="PoolQuestion"
          label="pool_question"
        >
          <SelectInput optionText={PoolQuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
