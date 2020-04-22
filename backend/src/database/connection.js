// Nesta página nos fazemos a conexão com nosso banco de dados sqlite.

//Importação do Knex para a conexão com o banco de dados sqlite.
const knex = require('knex');
//Importação da configuração do nosso arquivo knex.js.
const configuration = require('../../knexfile');

//Conexão com o banco de dados de desenvolvimento.
const connection = knex(configuration.development);

//Exportação dessa conexão para ser usado em outros arquivos com o EventControllers.
module.exports = connection;