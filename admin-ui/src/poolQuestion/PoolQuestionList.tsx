import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POOL_TITLE_FIELD } from "../pool/PoolTitle";

export const PoolQuestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Umfrage Frage"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
