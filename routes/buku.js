const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

const auth = require('../configs/auth');

router.get('/', bukuController.getAllBuku);
router.post('/', auth.verifyToken, bukuController.postBuku);
router.put('/:id',auth.verifyToken,bukuController.putBuku);
router.delete('/:id',auth.verifyToken,bukuController.deleteBuku);

module.exports = router;