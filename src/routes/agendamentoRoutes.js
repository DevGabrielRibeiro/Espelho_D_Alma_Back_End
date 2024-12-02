// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const agendamentoController = require('../controller/agendamentoController');


router.post('/', agendamentoController.CreateController);
router.get('/id', agendamentoController.getByIdController);
router.get('/all/:id_profissional', agendamentoController.getAllController);
router.get('/aluno/:id_aluno', agendamentoController.getAllControllerAluno);
router.delete('/delete', agendamentoController.deleteController);
module.exports = router;
