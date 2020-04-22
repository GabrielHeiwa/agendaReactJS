// Neste arquivo faremos o tratamento de rotas do nosso backend especificando o que cada rota vai fazer e responder para o nosso frontend.

const express = require('express');
const EventControllers = require('./controllers/EventosControllers');

const routes = express.Router();

routes.put('/update/:id', EventControllers.update);
routes.get('/index', EventControllers.index);
routes.post('/new/event', EventControllers.create);
routes.delete('/delete/:id', EventControllers.delete);

module.exports = routes;