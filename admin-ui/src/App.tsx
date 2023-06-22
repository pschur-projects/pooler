import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PoolList } from "./pool/PoolList";
import { PoolCreate } from "./pool/PoolCreate";
import { PoolEdit } from "./pool/PoolEdit";
import { PoolShow } from "./pool/PoolShow";
import { PoolQuestionList } from "./poolQuestion/PoolQuestionList";
import { PoolQuestionCreate } from "./poolQuestion/PoolQuestionCreate";
import { PoolQuestionEdit } from "./poolQuestion/PoolQuestionEdit";
import { PoolQuestionShow } from "./poolQuestion/PoolQuestionShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"pooler"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pool"
          list={PoolList}
          edit={PoolEdit}
          create={PoolCreate}
          show={PoolShow}
        />
        <Resource
          name="PoolQuestion"
          list={PoolQuestionList}
          edit={PoolQuestionEdit}
          create={PoolQuestionCreate}
          show={PoolQuestionShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
