'use strict';

module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    serial_number: DataTypes.STRING(45),
    resin_uuid: DataTypes.STRING(64),
    qr_code: DataTypes.BLOB,
    notes: DataTypes.STRING(2048),
    mac_address: DataTypes.STRING(12),
    imei_number: DataTypes.STRING(16),
    sim_serial_number: DataTypes.STRING(45),
    device_type: DataTypes.ENUM('Explore1', 'Edge1', 'iPad'),
    device_status: DataTypes.ENUM('Build In Progress', 'Inventory', 'QA', 'Paired', 'RMA', 'Out of Service')
  }, { charset: 'utf8', 'collate': 'utf8_general_ci' });
  Device.associate = function (models) {
    // associations can be defined here
    Device.belongsTo(models.Package, { foreignKey: 'PackageId', onDelete: 'CASCADE' });
  };

  return Device;
};
