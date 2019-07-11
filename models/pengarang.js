const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Pengarang extends Sequelize.Model {}

Pengarang.init({
  name_pengarang: Sequelize.STRING,
  alamat: Sequelize.STRING,
  no_tlp: Sequelize.INTEGER
}, { sequelize, modelName: 'pengarang' });

module.exports = Pengarang;
