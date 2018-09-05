'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');

const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.js')[env];

const db        = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: true,
    operatorsAliases: Sequelize.Op,
    pool: {
      max: 3,
      min: 1,
      idle: 1 // Keep this very low or it'll make all Lambda requests take longer
    },
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  }
);

fs
.readdirSync(__dirname)
.filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
