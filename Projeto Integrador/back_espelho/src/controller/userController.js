// src/controllers/authController.js
const userService = require('../service/userService');

const createController = {
    
  Create: async (req, res) => {
    try {
        console.log(req.body);

      // Chama o serviço de login
      const user  =  await userService.createUserService(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        message: 'Usário criado!',
        user
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
        console.log(req.body);

      // Chama o serviço de login
      const user  =  await userService.getByID(req.body);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        user
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {

      // Chama o serviço de login
      const user  =  await userService.getAll();

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        user
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  deleteController: async (req, res) => {
    try {

      // Chama o serviço de login
      const user  =  await userService.deleteService(req.body);

      return res.status(200).json({
        message: `Aluno com o ID: ${req.body.id} foi deletado com sucesso!`
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};

module.exports = createController;
