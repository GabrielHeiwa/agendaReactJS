// Nesta página nos fazemos a conexão com nosso banco de dados sqlite.

const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;