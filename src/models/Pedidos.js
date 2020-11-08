const { Model, DataTypes } = require('sequelize');

class Pedidos extends Model {
    static init(sequelize) {
        super.init({
            idCliente: DataTypes.INTEGER,
            idEndereco: DataTypes.INTEGER,
            status: DataTypes.INTEGER,
            observacao: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        // this.hasMany(models.Endereco, { foreignKey: 'cliente_id', as: 'endereco' });
        // this.belongsToMany(models.Endereco, { foreignKey: 'cliente_id', through: 'cliente_endereco', as: 'enderecos' })
    }
}

module.exports = Pedidos;