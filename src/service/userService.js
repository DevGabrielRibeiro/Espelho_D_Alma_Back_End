// src/services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');

const userService = {
  createUserService: async (user) => {
    const createUser = await userModel.createUser(user);
    return { createUser };
  },
  
  getByID: async (user) => {
    const createUser = await userModel.getUserById(user);
    return { createUser };
  },

  getAll: async () => {
    const createUser = await userModel.getAll();
    return { createUser };
  },

  deleteService: async (user) => {
    const createUser = await userModel.delete(user);
    return { createUser };
  }
};

module.exports = userService;
