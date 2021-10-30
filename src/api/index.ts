import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import UserResolver from "./resolvers/User";

async function startApi() {
  const app = Express();

  await createConnection();

  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log("Servidor executando em http://localhost:4000/graphql")
  );
}

startApi();
