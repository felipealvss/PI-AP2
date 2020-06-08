
exports.up = function(knex) {
    return knex.schema.createTable('calendario', function(table) {
        table.time('dia_academico', { precision: 6 }).notNullable();
        table.string('descricao_academico').notNullable();
    })  
};

exports.down = function(knex) {
    return knex.schema.createTable('calendario');
};
