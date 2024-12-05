const db = require('../config');

const unitModel = {
  getUserById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Unidades_Senac WHERE id_unidade = ?', [id.id]);
    return rows[0];
  },

  createUnit: async (unit) => {
    const [rows] = await db.query(
      'INSERT INTO Unidades_Senac (nome, cep, email, endereco, telefone) VALUES (?, ?, ?, ?, ?)',
      [unit.nome, unit.cep, unit.email, unit.endereco, unit.telefone]
    );
    
    return rows.insertId;
  },

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Unidades_Senac');
    return rows;
  },

  delete: async (id) => {
    const [rows] = await db.query('DELETE FROM Unidades_Senac WHERE id_unidade = ?', [id.id]);
    return rows[0];
  },
  
};

module.exports = unitModel;
