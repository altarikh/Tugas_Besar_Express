const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Penerbit = require('../models/penerbit');

module.exports.getAllPenerbit = (req, res) => {

	Penerbit.findAll().then((penerbit) =>{
		res.json(penerbit);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postPenerbit =(req,res) =>{	
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles'] == "admin") {
						Penerbit.create({
								nama_penerbit: req.body.name_penerbit,
								alamat: req.body.alamat

						})
						.then(penerbit => {
								res.json(penerbit);
						});
				}else{
					res.json(403);
				}
			}
		})
}
module.exports.putPenerbit = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				Penerbit.update({
				nama_penerbit: req.body.name_penerbit,
				alamat: req.body.alamat


				}, {where:{id: req.params.id
				}}).then((penerbit)=>{
					res.json(penerbit);
				});
			} else {
				res.status(200).send('update Sucess with id '+ id);
			}
		}
	})
}

module.exports.deletePenerbit = (req,res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				var id = req.params.id;
				Penerbit.destroy({
					where:{id: id}
				}).then((penerbit)=>{
					res.json(penerbit);
				});
			} else {
				res.sendStatus(200).send('Delete Sucess with id '+ id);
			}
		}
	})
}