const { Model, DataTypes } = require('sequelize');

class PedidoProdutos extends Model {
    static init(sequelize) {
        super.init({
            idPedido: DataTypes.INTEGER,
            idProduto: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER,
            pesoTotal: DataTypes.DOUBLE
        }, {
            sequelize
        })
    }

    static associate(models) {
        // this.hasMany(models.Endereco, { foreignKey: 'cliente_id', as: 'endereco' });
        // this.belongsToMany(models.Endereco, { foreignKey: 'cliente_id', through: 'cliente_endereco', as: 'enderecos' })
    }
}

module.exports = PedidoProdutos;