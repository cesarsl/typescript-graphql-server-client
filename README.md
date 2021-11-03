# React App + Apollo Express Server (TypeScript)

## Pré requisitos

- NodeJS 12
- Docker
- Docker Compose
- yarn ou npm

## Rodar a aplicação

```shell
docker-compose up
```

A aplicação pode ser acessada em http://localhost:8000/

## Desenvolvendo

### Banco de Dados

Primeiro é necessário subir o MySQL

```shell
docker-compose up db
```

### Servidor

Entre na pasta do projeto do servidor
```shell
cd server
```

Instale as dependências Node
```shell
yarn install
```

Execute no modo desenvolvedor
```shell
yarn dev
```

Para testes unitários no servidor utilizar
```shell
yarn test
```

### Cliente

Entre na pasta do projeto do client
```shell
cd client
```

Instale as dependências Node
```shell
yarn install
```

Execute a aplicação
```shell
yarn start
```

### URIs de desenvolvimento

- MySQL => http://localhost:3036/
- GraphQL => http://localhost:4000/
- Cliente => http://localhost:3000/

## Bugs conhecidos

Ao realizar a listagem de todos os usuários, atualizar um usuário específico e retornar para a listagem fazendo uma nova solicitação sem parâmetros, o cliente não realiza uma nova requisição. Não foi possível identificar a origem do comportamento. 

Fazendo uma filtragem por qualquer campo, em um passo seguinte esvaziar os campos e clicar novamente no botão de listagem faz com que a tabela se atualize com os novos dados.

## Pontos de melhoria

- Testes para aplicação frontend
- Refactoring do código da aplicação React para melhorar legibilidade
- Tratamento de erros
- Feedback das respostas do sistema (criar, atualizar, remover)
- Proxy para múltiplas instâncias do servidor
