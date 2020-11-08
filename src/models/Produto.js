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
        // this.belongsToMany(models.Endereco, { foreignKey: 'cliente_id', through: 'cliente_endereco', as: 'enderecos' })
    }
}

module.exports = Produto;