// Neste arquivo faremos o tratamento de rotas do nosso backend especificando o que cada rota vai fazer e responder para o nosso frontend.

//Para o tratamento de rotas precimos novamente importar o express e agora utilizar o Router.
const express = require('express');
//Aqui importamos nosso arquivo js que cuida do que cada rota faz em nosso banco de dados.
const EventControllers = require('./controllers/EventosControllers');

//Instânciação do Router para o tratamento de rotas.
const routes = express.Router();

//Criação das rotas
//No Express existem 4 tipos de metódos quando falamos de rotas, quando um com uma função específica, essas funções podem ou não nos retornar alguma coisa, lembrando que o backend é um intermediador entre nosso frontend e nosso banco de dados.
//GET: Quando fazendo uma consulta ao backend.
//PUT: Quando queremos fazer uma atualização em nosso banco de dados.
//DELETE: Quando queremos deletar alguma informação no banco de dados.
//POST: Quando queremos inserir uma informação em nosso banco de dados.

//Na rota de /update/:id utilzamos um Route Params (:id), que fazem parte da nossa URL.
routes.put('/update/:id', EventControllers.update);
//Na rota index fazemos a listagem de todos os nossos eventos.
routes.get('/index', EventControllers.index);
//Na rota /new/event criamos um novo evento no banco de dados.
routes.post('/new/event', EventControllers.create);
//Na rota /delete/:id deletamos um dado do banco e novamente utilizamos uma Route Params.
routes.delete('/delete/:id', EventControllers.delete);

//E aqui exportamos nosso gerenciador de rotas.
module.exports = routes;