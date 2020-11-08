const Produto = require("../models/Produto");

module.exports = {
    async index(req, res) {
        
        const { produto_id } = req.params;

        const produto = await Produto.findByPk(produto_id, {
            // include: { association: 'addresses' }
        }); 

        return res.json(produto);
    },
    
    async store(req, res) {
        
        const { descricaoProduto, peso } = req.body;

        var produtoFind = await Produto.findOne({ where: { descricaoProduto: descricaoProduto } });

        if(produtoFind)
            return res.status(400).json({ error: `Já existe um produto com o nome: ${descricaoProduto}`});

        const produtoCriado = await Produto.create({ 
            descricaoProduto, peso 
        });

        return res.json(produtoCriado);
    }
}