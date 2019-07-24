const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Penerbit extends Sequelize.Model {}

Penerbit.init({
  nama_penerbit: Sequelize.STRING,
  alamat: Sequelize.STRING,
  no_tlp: Sequelize.STRING,
  tahun_penerbit: Sequelize.DATEONLY
}, { sequelize, modelName: 'penerbit' });

module.exports = Penerbit;
