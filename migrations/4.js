'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serial_number: {
        type: Sequelize.STRING(45)
      },
      resin_uuid: {
        type: Sequelize.STRING(64)
      },
      qr_code: {
        type: Sequelize.BLOB
      },
      notes: {
        type: Sequelize.STRING(2048)
      },
      mac_address: {
        type: Sequelize.STRING(12)
      },
      imei_number: {
        type: Sequelize.STRING(16)
      },
      sim_serial_number: {
        type: Sequelize.STRING(45)
      },
      device_type: {
        type: Sequelize.ENUM('Explore1', 'Edge1', 'iPad')
      },
      device_status: {
        type: Sequelize.ENUM('Build In Progress', 'Inventory', 'QA', 'Paired', 'RMA', 'Out of Service')
      },
      packageId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Packages', key: 'id' },
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
    return queryInterface.dropTable('Devices');
  }
};
