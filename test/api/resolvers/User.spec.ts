"use strict";

import * as fs from "fs";
import UserResolver from "../../../src/api/resolvers/User";

const EasyGraphQLTester = require("easygraphql-tester");

const userSchema = fs.readFileSync("./schema.gql", "utf8");

describe("Teste de Resolvers", () => {
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
