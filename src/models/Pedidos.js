const { Model, DataTypes } = require('sequelize');

class Pedidos extends Model {
    static init(sequelize) {
        super.init({
            id_cliente: DataTypes.INTEGER,
            id_endereco: DataTypes.INTEGER,
            status: DataTypes.INTEGER,
            observacao: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        // this.hasMany(models.Endereco, { foreignKey: 'cliente_id', as: 'endereco' });
        this.belongsToMany(models.Produto, { foreignKey: 'id_pedido', through: 'pedido_produtos', as: 'produtos' })
        this.hasMany(models.Entregas, { foreignKey: 'id_pedido', through: 'entrega_pedidos', as: 'entregas' })
    }
}

module.exports = Pedidos;