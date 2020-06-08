
exports.up = function(knex) {
    return knex.schema.createTable('quadra', function(table) {
        table.string('nome').notNullable();
        table.string('unidade').notNullable();
        table.string('bloco').notNullable();

        table.foreign('unidade').references('numero').inTable('unidade');

    })
};

exports.down = function(knex) {
    return knex.schema(dropTable('quadra'));
};
