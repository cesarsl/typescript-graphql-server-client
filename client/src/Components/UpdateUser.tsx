import React, { useState } from "react";
import { UPDATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";
import { removeEmptyFields } from "../Helpers/ArgumentParser";


function UpdateUser() {
  const [id, setId] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [updateUser] = useMutation(UPDATE_USER);

  const onClick = () => {
    if (!id) {
      alert("É necessário informar um ID")
    } else {
      updateUser({
        variables: {
          id: parseInt(id),
          payload: removeEmptyFields(nome, email, cpf),
        },
      });
    }
  };

  return (
    <div className="tab-content">
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
      <button onClick={onClick}>Atualizar</button>
    </div>
  );
}

export default UpdateUser;
