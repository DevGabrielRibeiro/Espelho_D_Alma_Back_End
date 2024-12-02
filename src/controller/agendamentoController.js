// src/controllers/agendamentoController.js
const agendamentoService = require('../service/agendamentoService');

const agendamentoController = {
    
  CreateController: async (req, res) => {
    try {
        console.log(req.body);

      // Chama o serviço de login
      const agendamento  =  await agendamentoService.createAgendamentoService(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        message: 'Agendamento Adicionado!',
        agendamento
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getByIdController: async (req, res) => {
    try {

      // Chama o serviço de login
      const agendamento  =  await agendamentoService.getByIDService(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        agendamento
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getAllController: async (req, res) => {
    try {
      console.log(req.params);
      // Chama o serviço de login
      const agendamento  =  await agendamentoService.getAllService(req.params);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        agendamento
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },


  getAllControllerAluno: async (req, res) => {
    try {
      console.log(req.params);


      console.log("AQUIIIIIIIIIIIII");
      // Chama o serviço de login
      const agendamento  =  await agendamentoService.getAllServiceUser(req.params);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        agendamento
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },


  deleteController: async (req, res) => {
    try {

      // Chama o serviço de login
      const agendamento  =  await agendamentoService.deleteService(req.body);

      return res.status(200).json({
        message: `O Agendamento com ID: ${req.body.id}, foi deletado com sucesso!`
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};

module.exports = agendamentoController;
