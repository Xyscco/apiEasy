const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            tipoDocumento: DataTypes.INTEGER,
            documento: DataTypes.STRING,
            telefone: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'cliente'
        })
    }

    static associate(models) {
        // this.hasMany(models.Endereco, { foreignKey: 'cliente_id', as: 'endereco' });
        this.belongsToMany(models.Endereco, { foreignKey: 'cliente_id', through: 'cliente_endereco', as: 'enderecos' })
    }
}

module.exports = Cliente;