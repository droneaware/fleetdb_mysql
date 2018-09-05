'use strict';

module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define('Package', {
    package_type: DataTypes.ENUM('HPP', 'Explore1', 'Edge1'),
    package_status: DataTypes.ENUM('Ready to Ship', 'In Transit', 'Deployed', 'Out of Service')
  }, { charset: 'utf8', 'collate': 'utf8_general_ci' });
  Package.associate = function (models) {
    // associations can be defined here
    Package.hasMany(models.Device, { foreignKey: 'PackageId', onDelete: 'CASCADE' });
    Package.belongsTo(models.Shipment, { foreignKey: 'ShipmentId', onDelete: 'CASCADE' });
    Package.belongsTo(models.Customer, { foreignKey: 'CustomerId', onDelete: 'CASCADE' });
  };

  return Package;
};
