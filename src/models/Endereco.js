const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            rua: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            coordenadaX: DataTypes.STRING,
            coordenadaY: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Cliente, { foreignKey: 'endereco_id', through: 'cliente_endereco', as: 'clientes' })
    }
}

module.exports = Endereco;