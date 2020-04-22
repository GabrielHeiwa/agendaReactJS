// Nesse arquivo nos faremos a criação do nosso banco de dados, defineremos sua porta, e especificações como aceitar url JSON, e quais páginas o podem acessar, assim como também quais rotas ele usará.

//Importações dos modúlos que utilizaremos ao longo do backend.

//Express para a inicialização do nosso servidor e gerenciamento de rotas.
const express = require('express');
//Morgan para termos um visão de quanto tempo em ms cada consulta ao nosso backend demora, e se deu certo ou não.
const morgan = require('morgan');
//Aqui fazemos a importação do nosso arquivo js que gerencia as nossas rotas.
const routes = require('./routes');
//BodyParser permite que a URL do nosso servidor aceite uma requisição JSON.
const bodyParser = require('body-parser');
//Cors faz o gerenciamento de acesso do nosso backend.
const cors = require('cors');

//Instânciando nosso servidor.
const server = express();
//Definindo o que nosso servidor utilizará.
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(routes);

//Aqui levantamos nosso servidor e damos a ele uma porta.
server.listen(3333, () => {
    console.log("> Server open in http://localhost:3333");
})