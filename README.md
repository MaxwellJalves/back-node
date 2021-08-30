# back-node

Criando api em Node

- Dependências e extensões

  - Material Icon Theme
  - Prettier - Code formatter
  - Express
    - command - yarn add express
  - Nodemon "https://www.npmjs.com/package/nodemon"

    - yarn add nodemon -D :: "devDependencies": {
      "nodemon": "^2.0.12"
      }

    - conforme a documentação do nodemon dentro do arquivo package.json
    - Criamos um novo atributo com o nome de ->
      "scripts": {
      "dev": "nodemon app.js"
      }

    - [x] execute o comando yarn dev que será executado a configuração de dev reiniciando o servidor quando houver alteração no arquivo

# Referencias

- https://expressjs.com/pt-br/guide/error-handling.html

- https://expressjs.com/pt-br/4x/api.html#express.router

- https://typeorm.io/#/
- https://yarnpkg.com/package/typeorm
