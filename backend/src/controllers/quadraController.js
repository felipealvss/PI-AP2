const connection = require('../database/connection');

module.exports = {
    async create (req, res) {
        const { nome, unidade, bloco } = req.body;

        await connection('quadra').insert({
            nome,
            unidade,
            bloco
        })
    
        return res.json({ nome });
    }
}