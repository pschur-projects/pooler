import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POOL_TITLE_FIELD } from "./PoolTitle";

export const PoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="current_question" source="currentQuestion" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PoolQuestion"
          target="PoolId"
          label="Umfrage Frage"
        >
          <Datagrid rowClick="show">
            <TextField label="answers" source="answers" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="pool" source="pool.id" reference="Pool">
              <TextField source={POOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="question" source="question" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
