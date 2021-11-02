import React, { useState } from "react";
import { DELETE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function DeleteUser() {
  const [id, setName] = useState("");

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="Id"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => { deleteUser({ variables: { id: parseInt(id) }}) }}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteUser;
