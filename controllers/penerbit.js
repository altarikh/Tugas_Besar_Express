const Penerbit = require('../models/penerbit');

module.exports.getAllPenerbit = (req, res) => {
	Penerbit.findAll().then((penerbit) =>{
		res.json(penerbit);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postPenerbit =(req,res) =>{
	Penerbit.create({
		nama_penerbit: req.body.name_penerbit,
		alamat: req.body.alamat,
		no_tlp: req.body.no_tlp,
		tahun_penerbit: req.body.tahun_penerbit
	}).then((penerbit) => {
		res.json(penerbit);
	}).catch((error)=> {
		throw error;
	})
}
module.exports.putPenerbit = (req,res)=>{
	Penerbit.update({
		nama_penerbit: req.body.name_penerbit,
		alamat: req.body.alamat,
		no_tlp: req.body.no_tlp,
		tahun_penerbit: req.body.tahun_penerbit
	}, {where:{id: req.params.id
	}}).then(() => {
		res.status(200).send('update Sucess with id '+ id)
	})
}

module.exports.deletePenerbit = (req,res) =>{
	const id = req.params.id;
	Penerbit.destroy({
		where:{id : req.params.id}
	}).then(() => {
		res.status(200).send('Delete Sucess with id '+ id)
	})
}