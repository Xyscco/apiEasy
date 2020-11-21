const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            descricaoProduto: DataTypes.STRING,
            peso: DataTypes.DOUBLE
        }, {
            sequelize,
            tableName: 'produto'
        })
    }

    static associate(models) {
        // this.hasMany(models.Endereco, { foreignKey: 'cliente_id', as: 'endereco' });
        this.belongsToMany(models.Pedidos, { foreignKey: 'id_produto', through: 'pedido_produtos', as: 'pedidos' })
    }
}

module.exports = Produto;