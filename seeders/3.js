'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Packages', [
            {
                package_type: 'Explore1',
                package_status: 'Ready to Ship',
                shipmentId: 1,
                customerId: 1,
                createdAt: '1910-10-10 12:00:00',
                updatedAt: '1910-10-10 12:00:00'
            }
        ]);
    },
    down: function (queryInterface, Sequelize) {

    }
};