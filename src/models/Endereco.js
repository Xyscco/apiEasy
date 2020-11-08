const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            rua: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            coordenada_x: DataTypes.STRING,
            coordenada_y: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'endereco'
        })
    }

    static associate(models) {
        this.belongsToMany(models.Cliente, { foreignKey: 'endereco_id', through: 'cliente_endereco', as: 'clientes' })
    }
}

module.exports = Endereco;