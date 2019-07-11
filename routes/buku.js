const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

router.get('/', bukuController.getIndexProduct);

module.exports = router;