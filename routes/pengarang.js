const express = require('express');

const router = express.Router();

const pengarangController = require('../controllers/pengarang');
const auth = require('../configs/auth');


router.get('/', pengarangController.getAllPengarang);
router.post('/',auth.verifyToken, pengarangController.postPengarang);
router.put('/:id',auth.verifyToken, pengarangController.putPengarang);
router.delete('/:id',auth.verifyToken, pengarangController.deletePengarang);

module.exports = router;