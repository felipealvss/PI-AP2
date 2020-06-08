const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { numero, nome, endereco, telefone } = req.body;

        await connection('unidade').insert({
            numero,
            nome,
            endereco,
            telefone
        });
    
        return res.json({ nome });        
    }
}