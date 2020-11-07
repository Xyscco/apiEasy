const Cliente = require("../models/Cliente");

module.exports = {
    async index(req, res) {
        
        const clientes = await Cliente.findAll();

        return res.json(clientes);
    },
    
    async store(req, res) {
        const { nome, tipoDocumento, documento, telefone } = req.body;

        const clientes = await Cliente.create({ nome, tipoDocumento, documento, telefone });

        return res.json(clientes);
    }
}