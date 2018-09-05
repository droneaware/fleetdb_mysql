'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shipping_label: {
        type: Sequelize.BLOB
      },
      tracking_number: {
        type: Sequelize.STRING(100)
      },
      shipper: {
        type: Sequelize.ENUM('FedEx', 'UPS', 'USPS', 'DHL')
      },
      customerId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model:'Customers', key:'id' },
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
    return queryInterface.dropTable('Shipments');
  }
};
