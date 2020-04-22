
exports.up = function(knex) {
  return knex.schema.createTable('eventos', (table) => {
    table.increments();
    table.string('titulo').notNullable();
    table.date('data_str').notNullable();
    table.date('data_end').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable(eventos);
};
