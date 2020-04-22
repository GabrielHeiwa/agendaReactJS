//Neste arquivo fazemos a contrução da nossa tabela do banco de dados, como estou utilizando o knex.js gostaria de resaltar uma função muito interessante que é a "down" que é uma função para caso a função "up" de um erro ela execute.
exports.up = function(knex) {
  return knex.schema.createTable('eventos', (table) => {
    //Criação dos elementos do banco de dados assim como o seu tipo.
    table.increments();
    table.string('titulo').notNullable();
    table.date('data_str').notNullable();
    table.date('data_end').notNullable();
  })
};

exports.down = function(knex) {
    //Exclução da tabela caso ocorra um erro na criação.
    return knex.schema.dropTable(eventos);
};
