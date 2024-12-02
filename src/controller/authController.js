// src/controllers/authController.js
const authService = require('../service/authService');

const authController = {
    
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;

      // Chama o serviço de login
      const { token, user } = await authService.login(email, senha);

      // Retorna o token e o usuário autenticado
      return res.status(200).json({
        message: 'Login bem-sucedido',
        user,
        token
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
};

module.exports = authController;
