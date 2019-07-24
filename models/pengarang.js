const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Pengarang extends Sequelize.Model {}

Pengarang.init({
  nama_pengarang: Sequelize.STRING,
  alamat: Sequelize.STRING
}, { sequelize, modelName: 'pengarang' });

module.exports = Pengarang;
