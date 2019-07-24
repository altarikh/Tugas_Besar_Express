const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Pengarang = require('../models/pengarang');

module.exports.getAllPengarang = (req, res) => {
	Pengarang.findAll().then((pengarang) =>{
		res.json(pengarang);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postPengarang =(req,res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles']=="admin") {
						Pengarang.create({
								nama_pengarang: req.body.nama_pengarang,
								alamat: req.body.alamat

						})
						.then(pengarang => {
								res.json(pengarang);
						});
				}else{
					res.sendStatus(403);
				}
			}
		})
}
module.exports.putPengarang = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				Pengarang.update({
				nama_pengarang: req.body.nama_pengarang,
				alamat: req.body.alamat
				}, {where:{id: req.params.id
				}}).then((pengarang)=>{
					res.json(pengarang);
				});
			} else {
				res.status(200).send('update Sucess with id '+ id);
			}
		}
	})
}

module.exports.deletePengarang = (req,res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				var id = req.params.id;
				Buku.destroy({
					where:{id: id}
				}).then((pengarang)=>{
					res.json(pengarang);
				});
			} else {
				res.sendStatus(200).send('Delete Sucess with id '+ id);
			}
		}
	})
}