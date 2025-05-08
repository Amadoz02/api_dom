const express = require('express');
const router = express.Router();
const controller = require('../controllers/ciudadesController.js');

router.get('/', controller.getCiudades);

module.exports = router;