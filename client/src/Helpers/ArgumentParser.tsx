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

function queryFields(id: string, nome: String, email: String, cpf: String) {
    let nid = null
    if (id !== "") {
        nid = parseInt(id)
    }
  let searchParameters: any = {
    id: nid,
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

export { removeEmptyFields, queryFields };
