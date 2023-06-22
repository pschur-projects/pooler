import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { POOLQUESTION_TITLE_FIELD } from "./PoolQuestionTitle";
import { POOL_TITLE_FIELD } from "../pool/PoolTitle";

export const PoolQuestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="answers" source="answers" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="pool" source="pool.id" reference="Pool">
          <TextField source={POOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="question" source="question" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Answer"
          target="PoolQuestionId"
          label="Antworten"
        >
          <Datagrid rowClick="show">
            <TextField label="answer" source="answer" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="pool_question"
              source="poolquestion.id"
              reference="PoolQuestion"
            >
              <TextField source={POOLQUESTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
