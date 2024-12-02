// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Rota de login
router.post('/', userController.Create);
router.get('/id', userController.getById);
router.get('/all', userController.getAll);
router.delete('/delete', userController.deleteController);
module.exports = router;
