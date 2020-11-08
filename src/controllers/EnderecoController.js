const Endereco = require("../models/Endereco");
const Cliente = require("../models/Cliente");

module.exports = {
    async index(req, res) {
        
        const { cliente_id } = req.params;

        const cliente = await Cliente.findByPk(cliente_id, {
            include: { 
                association: 'clientes', 
                through: { 
                    attributes: ['cliente_id']
                }
            }
        })

        return res.json(cliente.enderecos);
    },
    
    async store(req, res) {
        const { cliente_id } = req.params;
        const { rua, bairro, cidade, coordenada_x, coordenada_y } = req.body;

        const cliente = await Cliente.findByPk(cliente_id);

        if(!cliente) {
            return res.status(400).json({ error: 'Cliente não encontrado' });
        }

        const endereco = await Endereco.create({
            rua, bairro, cidade, coordenada_x, coordenada_y  
        });

        await cliente.addEndereco(endereco);

        return res.json(endereco)
        
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