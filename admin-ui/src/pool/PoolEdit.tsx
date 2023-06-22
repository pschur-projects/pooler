import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PoolQuestionTitle } from "../poolQuestion/PoolQuestionTitle";

export const PoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
