'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_name: {
        type: Sequelize.STRING(45)
      },
      customer_address: {
        type: Sequelize.STRING(100)
      },
      customer_city: {
        type: Sequelize.STRING(45)
      },
      customer_state: {
        type: Sequelize.STRING(45)
      },
      customer_country: {
        type: Sequelize.STRING(45)
      },
      customer_zipcode: {
        type: Sequelize.STRING(10)
      },
      primary_contact_name: {
        type: Sequelize.STRING(45)
      },
      primary_contact_phone_number: {
        type: Sequelize.STRING(15)
      },
      primary_contact_email: {
        type: Sequelize.STRING(45)
      },
      skycatch_sales_rep: {
        type: Sequelize.STRING(45)
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
    return queryInterface.dropTable('Customers');
  }
};
