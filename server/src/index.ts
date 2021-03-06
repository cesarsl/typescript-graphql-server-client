import { ApolloServer,  } from "apollo-server-express";
import { ApolloServerPluginCacheControl } from "apollo-server-core";
import * as Express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import UserResolver from "./resolvers/User";

async function startApi() {
  const app = Express();

  const port = process.env.PORT || 4000

  await createConnection();

  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    plugins: [ApolloServerPluginCacheControl({ defaultMaxAge: 10 })],
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(`Servidor executando em http://localhost:${port}/graphql`)
  );
}

startApi();
