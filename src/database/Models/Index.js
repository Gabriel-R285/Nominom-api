

'use strict';

require('dotenv').config()

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let sequelize

if (process.env.NODE_ENV === 'development') {
  sequelize = new Sequelize(process.env.DEV_DATABASE_URL)
} else if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize(process.env.TEST_DATABASE_URL)
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL)
}
db.models = require('./users') (sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
