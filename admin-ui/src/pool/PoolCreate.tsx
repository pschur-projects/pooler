import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PoolQuestionTitle } from "../poolQuestion/PoolQuestionTitle";

export const PoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="current_question" source="currentQuestion" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="poolQuestions"
          reference="PoolQuestion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PoolQuestionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
