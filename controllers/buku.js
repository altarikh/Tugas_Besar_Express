const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Buku = require('../models/buku');


module.exports.getAllBuku = (req, res) => {
		Buku.findAll().then((buku) =>{
		res.json(buku);
	}).catch((error) => {
		throw error;
	})
}
module.exports.getBuku = (req,res) =>{
	Buku.findByPk(req.params.id).then((buku) => {
		res.json(buku);
	}).catch((error) => {
		throw error;
	})
}
module.exports.postBuku =(req,res) =>{
		jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles']=="admin") {
						Buku.create({
								 name: req.body.name,
								 price :req.body.price,
								 kategoriId :req.body.kategoriId,
								penerbitId: req.body.penerbitId,
						        pengarangId: req.body.pengarangId

						})
						.then(buku => {
								res.json(buku);
						});
				}else{
					res.sendStatus(403);
				}
			}
		});
}
module.exports.putBuku = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				Buku.update({
				name: req.body.name,
				price :req.body.price,
			 	kategoriId :req.body.kategoriId,
				penerbitId: req.body.penerbitId,
				pengarangId: req.body.pengarangId

				}, {where:{id: req.params.id
				}}).then((buku)=>{
					res.json(buku);
				});
			} else {
				res.status(200).send('update Sucess with id '+ id);
			}
		}
	})
}

module.exports.deleteBuku = (req,res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				var id = req.params.id;
				Buku.destroy({
					where:{id: id}
				}).then((buku)=>{
					res.json(buku);
				});
			} else {
				res.sendStatus(200).send('Delete Sucess with id '+ id);
			}
		}
	})
}