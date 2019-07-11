const express = require('express');

const router = express.Router();

const pengarangController = require('../controllers/pengarang');

router.get('/', pengarangController.getAllPengarang);
router.post('/', pengarangController.postPengarang);
router.put('/:id', pengarangController.putPengarang);
router.delete('/:id', pengarangController.deletePengarang);

module.exports = router;