const express = require('express');

const router = express.Router();

const penerbitController = require('../controllers/penerbit');

router.get('/', penerbitController.getAllPenerbit);
router.post('/', penerbitController.postPenerbit);
router.put('/:id', penerbitController.putPenerbit);
router.delete('/:id', penerbitController.deletePenerbit);

module.exports = router;