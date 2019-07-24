const express = require('express');

const router = express.Router();

const kategoriController = require('../controllers/kategori');
const auth = require('../configs/auth');


router.get('/', kategoriController.getAllKategori);
router.post('/', auth.verifyToken, kategoriController.postKategori);
router.put('/:id', auth.verifyToken,kategoriController.putKategori);
router.delete('/:id', auth.verifyToken, kategoriController.deleteKategori);

module.exports = router;