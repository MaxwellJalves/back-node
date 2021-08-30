import {Router,Request,Response} from 'express'

import {listarProdutos} from '../controller/ProdutosController'

const routes = Router()

routes.get('/', (request : Request, response: Response) =>{
    return response.json({message: 'conexão realizada com exito.'})
})


routes.get('/produtos',listarProdutos)
export default routes