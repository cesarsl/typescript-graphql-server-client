import React, { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function CreateUser() {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const onClick = () => {
    if (!nome || !email || cpf) {
      alert("Preencha todos os campos")
    } else {
      createUser({
        variables: { payload: { nome: nome, email: email, cpf: cpf } },
      });
    }
  };
  return (
    <div className="tab-content">
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
      <button onClick={onClick}>Criar</button>
    </div>
  );
}

export default CreateUser;
