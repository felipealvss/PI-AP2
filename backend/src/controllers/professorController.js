const connection = require('../database/connection');

module.exports = {
    async create (req, res){
        const { nome, telefone, email, curso } = req.body;

        await connection('professor').insert({
            nome,
            telefone,
            email,
            curso
        })
    
        return res.json({ nome });
    }
}