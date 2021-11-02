"use strict";

import * as fs from "fs";
import UserResolver from "../../../src/resolvers/User";

const EasyGraphQLTester = require("easygraphql-tester");

const userSchema = fs.readFileSync("./schema.gql", "utf8");

describe("Teste de resolvers de queries", () => {
  let tester: any;

  before(() => {
    tester = new EasyGraphQLTester(userSchema, UserResolver);
  });

  it("Lista todos usuários", () => {
    const query = `
            query {
                getUsers {
                    id
                    nome
                    email
                    cpf
                }
            }
        `;
    tester.test(true, query);
  });

  it("Filtra por ID com query válida [number]", () => {
    const query = `
            query {
                getUsers(id: 1) {
                    id
                    nome
                    email
                    cpf
                }
            }
        `;
    tester.test(true, query);
  });

  it("Filtra por ID com query inválida [string]", () => {
    const query = `
            query {
                getUsers(id: a) {
                    id
                    nome
                    email
                    cpf
                }
            }
        `;
    tester.test(false, query);
  });

  it("Filtra por CPF com query válida [string]", () => {
    const query = `
            query {
                getUsers(cpf: "123456789") {
                    id
                    nome
                    email
                    cpf
                }
            }
        `;
    tester.test(true, query);
  });

  it("Filtra por CPF com query inválida [number]", () => {
    const query = `
            query {
                getUsers(cpf: 123456789) {
                    id
                    nome
                    email
                    cpf
                }
            }
        `;
    tester.test(false, query);
  });

  it("Filtra por por múltiplos campos", () => {
    const query = `
            query {
                getUsers(id: 1, cpf: "123456789") {
                    id
                    nome
                    email
                    cpf
                }
            }
        `;
    tester.test(true, query);
  });
});

describe("Teste de resolvers de mutations", () => {
  let tester: any;

  before(() => {
    tester = new EasyGraphQLTester(userSchema, UserResolver);
  });

  it("Cadastrar novo usuário", () => {
    const mutation = `
            mutation CreateUser($payload: UserInput!) {
                createUser(payload: $payload)
            }
        `;
    tester.test(true, mutation, {
      payload: {
        nome: "João Paulo V",
        cpf: "567891234",
        email: "joao.paulo.v@email.com",
      },
    });
  });

  it("Cadastrar com campo faltando", () => {
    const mutation = `
            mutation CreateUser($payload: UserInput!) {
                createUser(payload: $payload)
            }
        `;
    tester.test(false, mutation, {
      payload: {
        nome: "João Paulo V",
        cpf: "567891234",
      },
    });
  });

  it("Atualizar sem payload", () => {
    const mutation = `
            mutation UpdateUser($id: Int!, $payload: PartialUpdateUserInput!) {
                updateUser(id: $id, payload: $payload)
            }
        `;
    tester.test(false, mutation, {
      id: 1
    });
  });

  it("Atualizar com payload vazio", () => {
    const mutation = `
            mutation UpdateUser($id: Int!, $payload: PartialUpdateUserInput!) {
                updateUser(id: $id, payload: $payload)
            }
        `;
    tester.test(true, mutation, {
      id: 1,
      payload: {}
    });
  });

  it("Atualizar um campo", () => {
    const mutation = `
            mutation UpdateUser($id: Int!, $payload: PartialUpdateUserInput!) {
                updateUser(id: $id, payload: $payload)
            }
        `;
    tester.test(true, mutation, {
      id: 1,
      payload: {
        nome: "Papa João Paulo V"
      },
    });
  });

  it("Atualizar todos os campos", () => {
    const mutation = `
            mutation UpdateUser($id: Int!, $payload: PartialUpdateUserInput!) {
                updateUser(id: $id, payload: $payload)
            }
        `;
    tester.test(true, mutation, {
      id: 1,
      payload: {
        nome: "Papa João Paulo V",
        email: "papa.joao.paulo.v@email.com",
        cpf: "567891234"
      },
    });
  });

  it("Atualizar campo com valor não permitido", () => {
    const mutation = `
            mutation UpdateUser($id: Int!, $payload: PartialUpdateUserInput!) {
                updateUser(id: $id, payload: $payload)
            }
        `;
    tester.test(false, mutation, {
      id: 1,
      payload: {
        email: 1,
      },
    });
  });

});
