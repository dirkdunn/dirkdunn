require('dotenv').config({
  path: __dirname + '/../.env'
});

console.log(process.env.MYSQL_DATABASE_NAME);
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

module.exports = { Sequelize, sequelize };
