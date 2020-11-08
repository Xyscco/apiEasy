'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedido_produtos', { 
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      peso_total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedidos');
  }
};
