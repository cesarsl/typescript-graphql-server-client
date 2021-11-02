import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import "./App.css";
import CreateUser from './Components/CreateUser'
import DeleteUser from "./Components/DeleteUser"
import UpdateUser from './Components/UpdateUser'
import ListUser from "./Components/ListUser";
import Tabs from "./Components/Tabs";
import Tab from "./Components/Tab";

const port = process.env.REACT_APP_APOLLO_PORT || 4000

function App() {
  const client = new ApolloClient({
    uri: `http://localhost:${port}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Tabs>
        <Tab title="Criar Usuário"><CreateUser /></Tab>
        <Tab title="Listar Usuários"><ListUser /></Tab>
        <Tab title="Atualizar Usuário"><UpdateUser /></Tab>
        <Tab title="Remover Usuário"><DeleteUser /></Tab>
      </Tabs>
    </ApolloProvider>
  );
}

export default App;
