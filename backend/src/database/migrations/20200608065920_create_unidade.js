
exports.up = function(knex) {
  return knex.schema.createTable('unidade', function(table) {
    table.string('numero').primary();
    table.string('nome').notNullable();
    table.string('endereco').notNullable();
    table.string('telefone').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('unidade');
};
