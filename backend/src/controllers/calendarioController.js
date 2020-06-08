const connection = require('../database/connection');

module.exports = {
    async create (req, res) {
        const { dia_academico, descricao_academico } = req.body;

        await connection('calendario').insert({
            dia_academico,
            descricao_academico
        })
    
        return res.json({ descricao_academico });        
    }
}