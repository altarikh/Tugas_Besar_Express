const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  kategoriId :req.body.STRING,
	penerbitId: req.body.STRING,
 pengarangId: req.body.STRING
}, { sequelize, modelName: 'buku' });

module.exports = Buku;