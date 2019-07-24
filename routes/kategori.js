const express = require('express');

const router = express.Router();

const kateogirController = require('../controllers/kategori');

router.get('/', kateogirController.getAllKateogri);
router.post('/', kateogirController.postKateogri);
router.put('/:id', kateogirController.putKateogri);
router.delete('/:id', kateogirController.deleteKateogri);

module.exports = router;