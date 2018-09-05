'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Shipments', [
            {
                shipper: 'UPS',
                shipping_label: '',
                tracking_number: '123456789',
                customerId: 1,
                createdAt: '1910-10-10 12:00:00',
                updatedAt: '1910-10-10 12:00:00'
            }
        ]);
    },
    down: function (queryInterface, Sequelize) {

    }
};