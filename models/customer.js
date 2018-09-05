'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customer_name: DataTypes.STRING(45),
    customer_address: DataTypes.STRING(100),
    customer_city: DataTypes.STRING(45),
    customer_state: DataTypes.STRING(45),
    customer_country: DataTypes.STRING(45),
    customer_zipcode: DataTypes.STRING(10),
    primary_contact_name: DataTypes.STRING(45),
    primary_contact_phone_number: DataTypes.STRING(15),
    primary_contact_email: DataTypes.STRING(45),
    skycatch_sales_rep: DataTypes.STRING(45)
  }, { charset: 'utf8', 'collate': 'utf8_general_ci' });
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.hasMany(models.Device, { foreignKey: 'CustomerId', onDelete: 'CASCADE' });
    Customer.hasMany(models.Shipment, { foreignKey: 'CustomerId', onDelete: 'CASCADE' });
    Customer.hasMany(models.Package, { foreignKey: 'CustomerId', onDelete: 'CASCADE' });
  };

  return Customer;
};
