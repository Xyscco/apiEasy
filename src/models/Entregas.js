const { Model, DataTypes } = require('sequelize');

class Entregas extends Model {
    static init(sequelize) {
        super.init({
            data_entrega: DataTypes.DATE,
            id_veiculo: DataTypes.INTEGER,
            status_entrega: DataTypes.STRING,

        }, {
            sequelize,
            tableName: 'entregas'
        })
    }

    static associate(models) {
        this.hasMany(models.Pedidos, { foreignKey: 'id_entrega', through: 'entrega_pedidos', as: 'pedido' })
    }
}

module.exports = Entregas;