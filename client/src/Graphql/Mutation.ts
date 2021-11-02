import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($payload: UserInput!) {
    createUser(payload: $payload)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: Int!, $payload: PartialUpdateUserInput!) {
    updateUser(id: $id, payload: $payload)
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: Int!) {
    deleteUser(id: $id)
  }
`;
