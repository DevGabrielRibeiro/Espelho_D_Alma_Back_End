// src/controllers/authController.js
const unitService = require('../service/unitService');

const unitController = {
    
  create: async (req, res) => {
    try {
        console.log(req.body);

      // Chama o serviço de login
      const unit  =  await unitService.createUnitService(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        message: 'Unidade Registrada !',
        unit
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
        console.log(req.body);

      // Chama o serviço de login
      const unit  =  await unitService.getByID(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        unit
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {

      // Chama o serviço de login
      const unit  =  await unitService.getAll();

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        unit
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  deleteController: async (req, res) => {
    try {

      // Chama o serviço de login
      const unit  =  await unitService.deleteService(req.body);

      return res.status(200).json({
        message: `Unidade com o ID: ${req.body.id} foi deletado com sucesso!`
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};

module.exports = unitController;
