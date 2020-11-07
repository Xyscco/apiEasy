'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     return queryInterface.createTable('cliente_endereco', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        cliente_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'cliente', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        endereco_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'endereco', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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

  down:  (queryInterface, Sequelize) => {
      queryInterface.dropTable('addresses');
  }
};
