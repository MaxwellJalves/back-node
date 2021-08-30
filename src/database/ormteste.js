const typeorm = require('typeorm')
const Usuario = require('../model/Usuario/model').Usuario

typeorm
  .createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'typeorm',
    synchronize: true,
    logging: false,
    entities: [require('../model/Usuario/entity/UsuarioSchema')],
  })
  .then(function (connection) {
    const usuario1 = new Usuario(0, 'Maxwell')
    const usuario2 = new Usuario(0, 'joao')

    return connection.manager.save([usuario1, usuario2])
  })
  .catch(function (error) {
    console.log(` Não foi possivel salvar os dados ,  Log Dev ::  ${error}`)
  })
