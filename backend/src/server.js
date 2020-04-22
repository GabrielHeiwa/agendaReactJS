// Nesse arquivo nos faremos a criação do nosso banco de dados, defineremos sua porta, e especificações como aceitar url JSON, e quais páginas o podem acessar, assim como também quais rotas ele usará.

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(routes);

server.listen(3333, () => {
    console.log("> Server open in http://localhost:3333");
})