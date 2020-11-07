const Endereco = require("../models/Endereco");
const Cliente = require("../models/Cliente");

module.exports = {
    async index(req, res) {
        const { cliente_id } = req.params;

        const user = await User.findByPk(cliente_id, {
            include: { 
                association: 'clientes', 
                attributes: ['name'],
                through: { 
                    attributes: ['user_id']
                }
            }
        })

        return res.json(user.techs);
    },
    
    async store(req, res) {
        const { cliente_id } = req.params;
        const { rua, bairro, cidade, coordenadaX, coordenadaY } = req.body;

        const cliente = await User.findByPk(cliente_id);

        if(!cliente) {
            return res.status(400).json({ error: 'Cliente não encontrado' });
        }

        const [ endereco ] = await Tech.create({
            rua, bairro, cidade, coordenadaX, coordenadaY 
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