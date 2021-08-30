const EntitySchema = require('typeorm').EntitySchema
const Usuario = require('../model/Usuario/model').Usuario

module.exports = new EntitySchema({
  name: 'Usuario',
  target: Usuario,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
  },
})
