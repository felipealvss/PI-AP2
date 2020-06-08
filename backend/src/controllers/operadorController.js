const connection = require('../database/connection');

module.exports = {
    async create (req, res) {
        const { nome, email, telefone } = req.body;

        await connection('operador').insert({
            nome,
            email,
            telefone
        })
    
        return res.json({ nome });
    }
}