const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  kategoriId :Sequelize.STRING,
	penerbitId: Sequelize.STRING,
 pengarangId: Sequelize.STRING
}, { sequelize, modelName: 'buku' });

module.exports = Buku;