const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Kategori = require('../models/kategori');

module.exports.getAllKategori = (req, res) => {
	Kategori.findAll().then((kategori) =>{
		res.json(kategori);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postKategori =(req,res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles']=="admin") {
						Kategori.create({
								 nama_kategori: req.body.nama_kategori

						})
						.then(kategori => {
								res.json(kategori);
						});
				}else{
					res.sendStatus(403);
				}
			}
		})
}
module.exports.putKategori = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				Kategori.update({
				nama_kategori: req.body.nama_kategori

				}, {where:{id: req.params.id
				}}).then((kategori)=>{
					res.json(kategori);
				});
			} else {
				res.sendStatus(200).send('Update Sucess with id '+ id);
			}
		}
	})
}

module.exports.deleteKategori = (req,res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				var id = req.params.id;
				Kategori.destroy({
					where:{id: id}
				}).then((kategori)=>{
					res.json(kategori);
				});
			} else {
				res.sendStatus(200).send('Delete Sucess with id '+ id);
			}
		}
	})
}