const Kategori = require('../models/kategori');

module.exports.getAllKateogri = (req, res) => {
	Kategori.findAll().then((kategori) =>{
		res.json(kategori);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postKategori =(req,res) =>{
	Kategori.create({
		nama_kategori: req.body.nama_kategori
	}).then((kategori) => {
		res.json(kategori);
	}).catch((error)=> {
		throw error;
	})
}
module.exports.putKategori = (req,res)=>{
	Kategori.update({
			nama_kategori: req.body.nama_kategori
	}, {where:{id: req.params.id
	}}).then(() => {
		res.status(200).send('update Sucess with id '+ id)
	})
}

module.exports.deleteKateogri = (req,res) =>{
	const id = req.params.id;
	Kategori.destroy({
		where:{id : req.params.id}
	}).then(() => {
		res.status(200).send('Delete Sucess with id '+ id)
	})
}