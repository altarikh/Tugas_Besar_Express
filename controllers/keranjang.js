// require hela ka models kategori
const Keranjang = require('../models/keranjang');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


module.exports.postOrderBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles']=="user") {
						var bukuId = req.body.bukuId;
						var jumlah = req.body.jumlah;
						Keranjang.create({
								userId: authData['id'],
								bukuId : bukuId,
								jumlah : jumlah
						})
						.then(keranjang => {
								res.json(keranjang);
						});
				}else{
					res.sendStatus(403);
				}
			}
		});
}

module.exports.getBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			sendStatus(403);
		} else {
			res.json({
				message: 'ok',
				authData: authData
			})
		}
	})
}

module.exports.getKeranjang = (req, res) => {
	Keranjang.findAll().then((keranjang) => {
		res.json(keranjang);
	}).catch((error) => {
		throw error;
	})
}