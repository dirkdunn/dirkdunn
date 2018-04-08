require('dotenv').config({
  path: __dirname + '/../.env'
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE_NAME,
  process.env.MYSQL_DATABASE_USERNAME,
  process.env.MYSQL_ROOT_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: process.env.MYSQL_DATABASE_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

require('./models/User')(Sequelize,sequelize);
require('./models/Post')(Sequelize,sequelize);
require('./models/Comment')(Sequelize,sequelize);

module.exports = { Sequelize, sequelize };
