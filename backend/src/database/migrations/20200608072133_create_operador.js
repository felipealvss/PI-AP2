
exports.up = function(knex) {
    return knex.schema.createTable('operador', function(table) {
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
    })  
};

exports.down = function(knex) {
    return knex.schema.createTable('operador');
};
