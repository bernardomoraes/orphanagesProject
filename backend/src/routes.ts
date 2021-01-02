import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController'


const routes = Router();
const upload = multer(uploadConfig)

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;

routes.get('/users', (request, response) => {
    // return response.json({message: "It's Working"})
    /* console.log(request.query) -> printa os Query Params */
    /* console.log(request.params) -> Printa os routes Params */
    /* console.log(request.body) -> Printa o Body*/
    return response.json({message: "It's Working"})
})

/* 
    CONCEITOS GERAIS
    Request: Tudo que vem do front pro back vem no request
    Response: Tudo que o backend vai devolver pro front vai no response

    Rota: Conjunto
    Recurso: Usuário
    Métodos HTTP: GET, POST, PUT, DELETE
        Get -> Buscando uma informação (Lista, Item)
        Post -> Criando Uma informação
        Put -> Editando uma Informação
        Delete -> Deletando uma informação

    Parâmetros
        Query Params: http://localhost:3333/users?search=diego
        Route Params: http://localhost:3333/users/1 (Identificar um Recurso)
        Body: http://localhost:3333/users -> Serve para enviar informações mais complexas que não cabem nos outros params

       
*/

/* 
    BANCO DE DADOS
    Existem 3 formas de lidar com o banco de dados no Backend
    1. Driver Nativo
        Permite executar as querys do banco de dados diretamente do Node, porém não permite que a gente utilize nenhum nível de abstração.
    2. Query Builder
        Escrevemos as querys com Js, possui um nível de abstração maior que o driver nativo, pois ele converte as linhas de código em
        Js para a linguagem do banco de dados.
        Exemplo de Query Builder: Knex.js
        Exemplo de Linha de Código: knex('users').select('*').where('name','Bernardo')
        Exemplo de código convertido: SELECT * FROM USERS where NAME is ...

    3. ORM (Object Relational Mapper)
        Possui o maior nível de abstração possível
        No ORM teremos uma classe do JS que vai simbolizar uma tabela no Banco
        ...

    Uma das vantagems de utilizar tanto o QueryBuilder como o ORM é que ao migrarmos
    de banco de dados não haverá necessidade de alterações na aplicação, caso o QueryBuilder ou ORM utilizado suporte o banco de transição.

        
*/