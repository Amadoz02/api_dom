const express = require('express');
const router = express.Router();
const controller = require('../controllers/lenguajesController.js');

router.get('/', controller.getLenguajes);

module.exports = router;