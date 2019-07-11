const express = require('express');

const router = express.Router();

const spesifikasiProdukController = require('../controllers/spesifikasi_produk');

router.get('/', spesifikasiProdukController.getAllSpesifikasiProduk);
router.post('/', spesifikasiProdukController.postSpesifikasiProduk);
router.put('/:id', spesifikasiProdukController.putSpesifikasiProduk);
router.delete('/:id', spesifikasiProdukController.deleteSpesifikasiProduk);

module.exports = router;