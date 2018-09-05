'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      package_type: {
        type: Sequelize.ENUM('HPP', 'Explore1', 'Edge1')
      },
      package_status: {
        type: Sequelize.ENUM('Ready to Ship', 'In transit', 'Deployed', 'Out of Service')
      },
      shipmentId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Shipments', key: 'id' }
      },
      customerId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Customers', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Packages');
  }
};
