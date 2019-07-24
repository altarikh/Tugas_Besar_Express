const express = require('express');

const router = express.Router();

const keranjangController = require('../controllers/keranjang');

const auth = require('../configs/auth');

router.get('/', keranjangController.getKeranjang);

router.get('/buku', auth.verifyToken, keranjangController.getBuku);

router.post('/orderBuku', auth.verifyToken, keranjangController.postOrderBuku);

module.exports = router;