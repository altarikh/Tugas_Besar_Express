const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class SpesifikasiProduk extends Sequelize.Model {}

SpesifikasiProduk.init({
  SKU: Sequelize.STRING,
  ISBN: Sequelize.INTEGER,
  berat: Sequelize.INTEGER,
  halaman: Sequelize.INTEGER,
  jenis_cover: Sequelize.STRING
}, { sequelize, modelName: 'spesifikasi_produk' });

module.exports = SpesifikasiProduk;
