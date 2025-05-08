const express = require('express');
const router = express.Router();
const controller = require('../controllers/generosController.js');

router.get('/', controller.getGeneros);

module.exports = router;