import React, { useState } from "react";
import { DELETE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function DeleteUser() {
  const [id, setName] = useState("");

  const [deleteUser] = useMutation(DELETE_USER, { onCompleted: (data) => { return {data}}});

  const onClick = () => {
    if (!id) {
      alert("Preencha com um ID")
    } else {
      deleteUser({ variables: { id: parseInt(id) } });
    }
  };
  return (
    <div className="tab-content">
      <input
        type="text"
        placeholder="Id"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={onClick}>Remover</button>
    </div>
  );
}

export default DeleteUser;
