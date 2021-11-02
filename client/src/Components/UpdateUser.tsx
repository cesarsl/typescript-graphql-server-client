import React, { useState } from "react";
import { UPDATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function removeEmptyFields(nome: String, email: String, cpf: String) {
    let searchParameters: any = {
        nome: nome,
        email: email,
        cpf: cpf,
      };
      let query: any = {};
      Object.keys(searchParameters).forEach((key) => {
        if (searchParameters[key]) {
          query[key] = searchParameters[key];
        }
      });
    return query;
}

function UpdateUser() {
  const [id, setId] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="Id"
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Nome"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="CPF"
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      />
      <button
        onClick={() => {
          updateUser({
            variables: { id: parseInt(id), payload: removeEmptyFields(nome, email, cpf) },
          });
        }}
      >
        Update
      </button>
    </div>
  );
}

export default UpdateUser;
