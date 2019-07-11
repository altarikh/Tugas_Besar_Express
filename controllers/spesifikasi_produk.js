const SpesifikasiProduk = require('../models/spesifikasi_produk');

module.exports.getAllSpesifikasiProduk = (req, res) => {
	SpesifikasiProduk.findAll().then((pengarang) =>{
		res.json(penerbit);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postSpesifikasiProduk =(req,res) =>{
	SpesifikasiProduk.create({
		SKU: req.body.SKU,
		ISBN : req.body.ISBN,
		berat : req.body.berat,
		halaman : req.body.halaman,
		jenis_cover : req.body.jenis_cover
	}).then((pengarang) => {
		res.json(penerbit);
	}).catch((error)=> {
		throw error;
	})
}
module.exports.putSpesifikasiProduk = (req,res)=>{
	SpesifikasiProduk.update({
		SKU: req.body.SKU,
		ISBN : req.body.ISBN,
		berat : req.body.berat,
		halaman : req.body.halaman,
		jenis_cover : req.body.jenis_cover
	}, {where:{id: req.params.id
	}}).then(() => {
		res.status(200).send('update Sucess with id '+ id)
	})
}

module.exports.deleteSpesifikasiProduk = (req,res) =>{
	const id = req.params.id;
	SpesifikasiProduk.destroy({
		where:{id : req.params.id}
	}).then(() => {
		res.status(200).send('Delete Sucess with id '+ id)
	})
}
