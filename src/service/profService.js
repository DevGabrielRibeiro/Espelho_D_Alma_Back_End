// src/services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const profModel = require('../model/profModel');

const profService = {
  createUserService: async (prof) => {
    const createProf = await profModel.createProf(prof);
    return { createProf };
  },
  
  getByID: async (prof) => {
    const createProf = await profModel.getUserById(prof);
    return { createProf };
  },

  getAll: async () => {
    const createProf = await profModel.getAll();
    return { createProf };
  },

  deleteService: async (prof) => {
    const createProf = await profModel.delete(prof);
    return { createProf };
  }
};

module.exports = profService;
