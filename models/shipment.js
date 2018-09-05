'use strict';

module.exports = (sequelize, DataTypes) => {
  const Shipment = sequelize.define('Shipment', {
    shipping_label: DataTypes.BLOB,
    tracking_number: DataTypes.STRING(100),
    shipper: DataTypes.ENUM('FedEx', 'UPS', 'USPS', 'DHL')
  }, { charset: 'utf8', 'collate': 'utf8_general_ci' });
  Shipment.associate = function (models) {
    // associations can be defined here
    Shipment.belongsTo(models.Customer, { foreignKey: 'CustomerId', onDelete: 'CASCADE' });
    Shipment.hasMany(models.Package, { foreignKey: 'ShipmentId', onDelete: 'CASCADE' });
  };

  return Shipment;
};
