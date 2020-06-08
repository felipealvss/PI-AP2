
exports.up = function(knex) {
    return knex.schema.createTable('agendamento', function(table) {
        table.string('nome_unidade').notNullable();
        table.string('numero_quadra').notNullable();
        table.string('professor_responsavel').notNullable();
        table.date('data_desejada', { precision: 6 }).notNullable();
        table.time('horario_desejado', { precision: 6 }).notNullable();
        table.string('operador').notNullable();

        // Definição de Relacionamento de chaves estrangeiras 
        table.foreign('nome_unidade').references('nome').inTable('unidade');
        table.foreign('numero_quadra').references('unidade').inTable('quadra');
        table.foreign('professor_responsavel').references('nome').inTable('professor');
        table.foreign('operador').references('nome').inTable('operador');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('agendamento');
};
