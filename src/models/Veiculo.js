const { Model, DataTypes } = require('sequelize');

class Veiculo extends Model {
    static init(sequelize) {
        super.init({
            descricaoVeiculo: DataTypes.STRING,
            placa: DataTypes.STRING,
            cargaMaxima: DataTypes.INTEGER,

        }, {
            sequelize,
            tableName: 'veiculo'
        })
    }

    // static associate(models) {
    // }
}

module.exports = Veiculo;