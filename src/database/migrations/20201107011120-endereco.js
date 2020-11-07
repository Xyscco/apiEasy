'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('endereco', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        coordenadaX: {
          type: Sequelize.STRING,
          allowNull: false,
        }, 
        coordenadaY: {
          type: Sequelize.STRING,
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
     await queryInterface.dropTable('endereco');
  }
};
