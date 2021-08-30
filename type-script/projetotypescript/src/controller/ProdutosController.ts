import {createConnection} from 'typeorm'
import {Produtos} from '../entity/Produtos'
import {Request,Response}from 'express'

export const listarProdutos = async (request: Request,response:Response) =>{

    createConnection().then(async connection =>{

       const itens = await connection.manager.find(Produtos)

       return response.json(itens).status(200) 

    })
}