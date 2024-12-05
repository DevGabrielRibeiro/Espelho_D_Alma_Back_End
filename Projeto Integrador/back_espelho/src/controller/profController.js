// src/controllers/authController.js
const profService = require('../service/profService');

const profController = {
    
  Create: async (req, res) => {
    try {
        console.log(req.body);

      // Chama o serviço de login
      const prof  =  await profService.createUserService(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        message: 'Profissional criado!',
        prof
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
        console.log(req.body);

      // Chama o serviço de login
      const prof  =  await profService.getByID(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        prof
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {

      // Chama o serviço de login
      const prof  =  await profService.getAll();

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        prof
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  deleteController: async (req, res) => {
    try {

      // Chama o serviço de login
      const prof  =  await profService.deleteService(req.body);

      return res.status(200).json({
        message: `Profissional com o ID: ${req.body.id} foi deletado com sucesso!`
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};

module.exports = profController;
