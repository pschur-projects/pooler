import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AnswerTitle } from "../answer/AnswerTitle";
import { PoolTitle } from "../pool/PoolTitle";

export const PoolQuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput
          source="antworten"
          reference="Answer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="pool.id" reference="Pool" label="pool">
          <SelectInput optionText={PoolTitle} />
        </ReferenceInput>
        <TextInput label="question" multiline source="question" />
      </SimpleForm>
    </Create>
  );
};
