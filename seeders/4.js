'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Devices', [
            {
                serial_number: '123456',
                resin_uuid: 'ascb123',
                qr_code: '',
                notes: 'NOTES',
                mac_address: 'a:b:c:d',
                imei_number: '543543543543',
                sim_serial_number: '432432432432432',
                device_type: 'Explore1',
                device_status: 'QA',
                packageId: 1,
                createdAt: '1910-10-10 12:00:00',
                updatedAt: '1910-10-10 12:00:00'
            }
        ]);
    },
    down: function (queryInterface, Sequelize) {

    }
};