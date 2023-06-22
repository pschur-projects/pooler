import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PoolQuestionTitle } from "../poolQuestion/PoolQuestionTitle";

export const AnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
