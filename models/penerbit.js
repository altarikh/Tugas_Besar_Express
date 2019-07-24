const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Penerbit extends Sequelize.Model {}

Penerbit.init({
  nama_penerbit: Sequelize.STRING,
  alamat: Sequelize.STRING
}, { sequelize, modelName: 'penerbit' });

module.exports = Penerbit;
