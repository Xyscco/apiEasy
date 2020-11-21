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
        const { id_cliente, id_endereco, observacao, listaProdutos } = req.body;

        console.log(req.body);

        const status = 1;

        var listaProduto = [];

        listaProduto = listaProdutos;

        const pedido = await Pedidos.create({
            id_cliente, id_endereco, status, observacao
        });

        const idPedido = pedido.id;

        for (let i = 0; i < listaProdutos.length; i++) {
            // console.log(listaProdutos.length)
            var idProduto = listaProdutos[i].id;
            var quantidade = listaProdutos[i].quantidade;
            var peso_total = listaProdutos[i].peso_total;
            // console.log(idProduto, quantidade, peso_total)
            
            /*const produto =*/ await PedidoProdutos.create ({
                idPedido, 
                idProduto,
                quantidade,
                peso_total
            })

            // await pedido. (produto);
        }

        // await user.addTech(tech);

        return res.json({msg: 'Produto Gravado com sucesso'})
        // return res.json(pedido)
        
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