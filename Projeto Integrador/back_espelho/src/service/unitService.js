// src/services/authService.js
const unitModel = require('../model/unitModel');

const unitService = {
  createUnitService: async (unit) => {
    const createUnit = await unitModel.createUnit(unit);
    return { createUnit };
  },

  getByID: async (unit) => {
    const createUnit = await unitModel.getUserById(unit);
    return { createUnit };
  },

  getAll: async () => {
    const createUnit = await unitModel.getAll();
    return { createUnit };
  },

  deleteService: async (unit) => {
    const createUnit = await unitModel.delete(unit);
    return { createUnit };
  },
};

module.exports = unitService;
