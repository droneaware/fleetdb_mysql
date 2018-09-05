'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Customers', [
            {
                customer_name: 'Test Customer',
                customer_address: '424 9th st',
                customer_city: 'San Francisco',
                customer_state: 'CA',
                customer_country: 'USA',
                customer_zipcode: 94103,
                primary_contact_name: 'Don Shields',
                primary_contact_phone_number: '1234567890',
                primary_contact_email: 'dshields@skycatch.com',
                skycatch_sales_rep: 'Ryan Soles',
                createdAt: '1910-10-10 12:00:00',
                updatedAt: '1910-10-10 12:00:00'
            }
        ]);
    },
    down: function (queryInterface, Sequelize) {

    }
};