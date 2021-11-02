import React, { useState } from "react";
import { GET_USER } from "../Graphql/Query";
import { useLazyQuery } from "@apollo/client";
import { queryFields } from "../Helpers/ArgumentParser";

function buildTable(loading: any, data: any, error: any) {
  const listTable = (elem: any, idx: any) => {
    return (
      <tr key={idx}>
        <td>{elem.id}</td>
        <td>{elem.nome}</td>
        <td>{elem.email}</td>
        <td>{elem.cpf}</td>
      </tr>
    );
  };

  if (loading) return <div>Loading...</div>
  if (error) return `Error! ${error}`;

  return (
    <table className="list-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>CPF</th>
        </tr>
      </thead>
      <tbody>{data && data.getUsers && data.getUsers.map(listTable)}</tbody>
    </table>
  );
}

function ListUser() {
  const [id, setId] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [getUsers, { loading, data, error }] = useLazyQuery(GET_USER);

  const onClick = (e: any) => {
    getUsers({ variables: queryFields(id, nome, email, cpf)})
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
      <button onClick={onClick}>Listar</button>
      {data && data.getUsers && buildTable(loading, data, error)}
    </div>
  );
}

export default ListUser;
