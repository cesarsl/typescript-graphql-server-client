import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUsers($id: Int, $nome: String, $email: String, $cpf: String) {
    getUsers(id: $id, nome: $nome, email: $email, cpf: $cpf) {
      id
      nome
      email
      cpf
    }
  }
`;