
exports.up = function(knex) {
    return knex.schema.createTable('professor', function(table) {
        table.string('nome').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
        table.string('curso').notNullable();
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('professor');
};
