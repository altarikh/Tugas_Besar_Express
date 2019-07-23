const Buku = require('../models/buku');

module.exports.getIndexProduct = (req, res) => {

	Buku.findAll().then((buku) =>{
		res.json(buku);
	}).catch((error) => {
		throw error;
	})

}
