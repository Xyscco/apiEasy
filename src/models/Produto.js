const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
            peso: DataTypes.DOUBLE
        }, {
            sequelize
        })
    }

    static associate(models) {
        // this.hasMany(models.Endereco, { foreignKey: 'cliente_id', as: 'endereco' });
        // this.belongsToMany(models.Endereco, { foreignKey: 'cliente_id', through: 'cliente_endereco', as: 'enderecos' })
    }
}

module.exports = Produto;