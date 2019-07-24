const Sequelize = require('sequelize');

const sequelize = new Sequelize('kelompok3', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;