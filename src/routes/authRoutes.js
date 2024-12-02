// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Rota de login
router.post('/', authController.login);

module.exports = router;
