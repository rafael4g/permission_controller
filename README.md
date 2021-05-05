# CONTROLE DE PERMISSÃO DE USUÁRIOS

### Controle de usuarios foi desenvolvido durante video aula :.Daniele Leão Evangelista.:
>[Video](https://youtu.be/TGCwB9oMR0o)
## Sobre o controle de permissão de usuários
Aplicação back-end para controle de permissão de usuarios com utilização de middleware,
jsonwebtoken.

---


## Rotas criadas
* [`x`] Cadastro de Users
* [`x`] Autenticação de Users
* [`x`] Cadastro de Permissões
* [`x`] Cadastro de Roles
* [`x`] Cadastro de Produtos
* [`x`] Conexão de Users_Roles
* [`x`] Conexão de Permissiom_Roles
---
## 🚀 Tecnologias
- 🔗 [NodeJS](https://nodejs.org/)
- 🔗 [Typescript](https://typescriptlang.org/) 
- 🔗 [Postgre](https://postgresql.org/) 

--- 


## Step-by-Step
```bash
# criando migration CreateUsers
yarn typeorm migration:create -n CreateUsers

# devido utilização de uuid_generate_v4(), gerar query no banco
create extension if not exists "uuid-ossp";

# após configurar a migration
yarn typeorm migration:run

# alterar tsconfig.json
"target": "es2017"
"strictPropertyInitialization": false
"experimentalDecorators": true
"emitDecoratorMetadata": true

# criando migration CreatePermissions
yarn typeorm migration:create -n CreatePermissions

# após configurar a migration
yarn typeorm migration:run

# criando migration CreatePermissions
yarn typeorm migration:create -n CreateRoles

# após configurar a migration
yarn typeorm migration:run

# criando migration CreatePermissions
yarn typeorm migration:create -n CreatePermissionsRoles

# após configurar a migration
yarn typeorm migration:run

# criando migration CreatePermissions
yarn typeorm migration:create -n CreateUsersRoles

# após configurar a migration
yarn typeorm migration:run

# criando migration CreatePermissions
yarn typeorm migration:create -n CreateProducts

# após configurar a migration
yarn typeorm migration:run
```


### Autor
Feito com ❤️ por Rafael D Silva