// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const profController = require('../controller/profController');

// Rota de login
router.post('/', profController.Create);
router.get('/id', profController.getById);
router.get('/all', profController.getAll);
router.delete('/delete', profController.deleteController);

module.exports = router;
