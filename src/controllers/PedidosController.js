const Pedidos = require("../models/Pedidos");
const PedidoProdutos = require("../models/PedidoProduto");

module.exports = {
    // async index(req, res) {
    //     const { user_id } = req.params;

    //     const user = await User.findByPk(user_id, {
    //         include: { 
    //             association: 'techs', 
    //             attributes: ['name'],
    //             through: { 
    //                 attributes: ['user_id']
    //             }
    //         }
    //     })

    //     return res.json(user.techs);
    // },
    
    async gravarPedido(req, res) {
        const { id_cliente, id_endereco, observacao, lista_id_produtos } = req.body;

        const status = 1;

        const listaProduto = [];

        listaProduto = lista_id_produtos;

        const pedido = await Pedidos.create({
            id_cliente, id_endereco, status, observacao
        });

        const idPedido = pedido.id;

        for (let i = 0; i < listaProduto.length; i++) {
            var idProduto = listaProduto.id[i];
            var quantidade = listaProduto.quantidade[i];
            var peso_total = listaProduto.peso_total[i];
            await PedidoProdutos.create({
                idPedido, 
                idProduto,
                quantidade,
                peso_total
            });
        }

        // await user.addTech(tech);

        return res.json(pedido)
        
    },

    // async delete(req, res) {
    //     const { user_id } = req.params;
    //     const { name } = req.body;

    //     const user = await User.findByPk(user_id);

    //     if(!user) {
    //         return res.status(400).json({ error: 'User not found' });
    //     }

    //     const tech = await Tech.findOne({
    //         where: { name }
    //     });

    //     await user.removeTech(tech);

    //     return res.json()
        
    // }
}