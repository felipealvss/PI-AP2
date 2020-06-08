const connection = require('../database/connection');

module.exports = {
    
    // Listagem de agendamento
    async index (req, res) {
        // Controle de paginação
        const { page = 1 } = req.query;

        // Contagem de agendamentos
        const [count] = await connection('agendamento').count()

        const agendamentos = await connection('agendamento')
        .limit(4)
        .offset( (page - 1) * 4 )
        .select('*');
    
        // Informação de contagem no header 
        res.header('x-Total-Count', count['count(*)'])

        return res.json(agendamentos);    
    },

    // cadastro de Agendamento
    async create (req, res) {
        const { nome_unidade, numero_quadra, professor_responsavel, data_desejada, horario_desejado, operador } = req.body;

        await connection('agendamento').insert({
            nome_unidade,
            numero_quadra,
            professor_responsavel,
            data_desejada,
            horario_desejado,
            operador
        })
    
        return res.json({ operador });        
    }
}