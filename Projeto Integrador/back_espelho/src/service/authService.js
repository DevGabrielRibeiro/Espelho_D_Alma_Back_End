// src/services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
const profModel = require('../model/profModel');

const authService = {
  login: async (email, password) => {
    // Verifica se o usuário existe
    const user = await userModel.getUserByEmail(email, password);
    const prof = await profModel.getUserByEmailProf(email, password);
      
    if (user) {
      const token = jwt.sign(
        { user }, // Payload
        'secret_key', // Chave secreta
        { expiresIn: '1h' } // Expira em 1 hora
      );
      return { user,token };
    } 

    if(prof) {
      const token = jwt.sign(
        { prof }, // Payload
        'secret_key', // Chave secreta
        { expiresIn: '1h' } // Expira em 1 hora
      );
      return { user: prof, token };
    }

    if(!user && !prof) {
      throw new Error('Usuário ou senha inválidos');
    }
  }
};

module.exports = authService;
