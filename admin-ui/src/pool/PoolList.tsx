import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Umfrage"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="current_question" source="currentQuestion" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
