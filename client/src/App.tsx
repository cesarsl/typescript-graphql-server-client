import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import "./App.css";
import CreateUser from './Components/CreateUser'
import DeleteUser from "./Components/DeleteUser";
import UpdateUser from './Components/UpdateUser'

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
    </ApolloProvider>
  );
}

export default App;
