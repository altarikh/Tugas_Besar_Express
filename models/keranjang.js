const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Keranjang extends Sequelize.Model {}

Keranjang.init({
 jumlah: Sequelize.STRING,

}, { sequelize, modelName: 'keranjang' });

module.exports = Keranjang;



 