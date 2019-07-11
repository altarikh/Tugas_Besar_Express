const Pengarang = require('../models/pengarang');

module.exports.getAllPengarang = (req, res) => {
	Pengarang.findAll().then((pengarang) =>{
		res.json(penerbit);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postPengarang =(req,res) =>{
	Pengarang.create({
		name_pengarang: req.body.name_pengarang,
		alamat: req.body.alamat,
		no_tlp: req.body.no_tlp
	}).then((pengarang) => {
		res.json(penerbit);
	}).catch((error)=> {
		throw error;
	})
}
module.exports.putPengarang = (req,res)=>{
	Pengarang.update({
		name_pengarang: req.body.name_pengarang,
		alamat: req.body.alamat,
		no_tlp: req.body.no_tlp
	}, {where:{id: req.params.id
	}}).then(() => {
		res.status(200).send('update Sucess with id '+ id)
	})
}

module.exports.deletePengarang = (req,res) =>{
	const id = req.params.id;
	Pengarang.destroy({
		where:{id : req.params.id}
	}).then(() => {
		res.status(200).send('Delete Sucess with id '+ id)
	})
}