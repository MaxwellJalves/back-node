import express from "express";
import rotas from "./rotas";
import Usuario from "./model/Usuario/model/Usuario";
const typeorm = require("typeorm");
const servidor = express();
const porta = process.env.PORT || 3000;

typeorm
  .connect("postgresql://postgres:123456@localhost:5432/typeorm")

  .catch(function (error) {
    console.log(` Não foi possivel salvar os dados ,  Log Dev ::  ${error}`);
  });

servidor.use(express.json());
servidor.use(rotas);

servidor.listen(porta, () => console.log(`Servidor online ${porta}`));
