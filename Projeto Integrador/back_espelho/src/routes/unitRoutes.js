// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const unitController = require('../controller/unitController');

// Rota de login
router.post('/', unitController.create);
router.get('/id', unitController.getById);
router.get('/all', unitController.getAll);
router.delete('/delete', unitController.deleteController);

module.exports = router;
