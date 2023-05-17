# Description

API de CRUD de usuário.

# EndPoints

## /users/

### GET
Retorna todos os usuários

### POST
Cria um usuário

Body requerido:
```
{
  "username": "username@email.com",
  "password": 123456,
  "nome" : "John"
}
```

## /users/:id

### GET
Retorna um usário pelo id

### PUT
Atualiza um usuário pelo id

Body requerido (Você pode passar 1 chave caso queira atualizar somente ele, mas é obrigatório passar pelo menos 1 chave):

```
{
  "username": "username@email.com",
  "password": 123456,
  "nome" : "John"
}
```

### DELETE
Delete um usuário pelo id


# Installation

```bash
$ npm install
```

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
