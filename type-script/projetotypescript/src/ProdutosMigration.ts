import { createConnection } from 'typeorm'
import { Produtos } from './entity/Produtos';
import "reflect-metadata";

createConnection().then(async connection =>{

 
    const item = new Produtos()
    item.descricao = 'Cafe Pilão'
    item.quantidade = 2
    item.preco = "5.50"

    await connection.manager.save(item);
    //Retornando o ID salvo ao cadastrar o produto
    console.log(`Produto salvo ${item.id}`)

    //retornando registro adicionado
    const itens = await connection.manager.find(Produtos);
    console.log("LOG: ", itens);

}).catch( (error) => console.log(error))