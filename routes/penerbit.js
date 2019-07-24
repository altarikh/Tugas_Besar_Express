const express = require('express');

const router = express.Router();

const penerbitController = require('../controllers/penerbit');
const auth = require('../configs/auth');


router.get('/', penerbitController.getAllPenerbit);
router.post('/',auth.verifyToken, penerbitController.postPenerbit);
router.put('/:id', auth.verifyToken,penerbitController.putPenerbit);
router.delete('/:id', auth.verifyToken,penerbitController.deletePenerbit);

module.exports = router;