const db = require('../config');

const profModel = {
  getUserByEmailProf: async (email, senha) => {
    const [rows] = await db.query('SELECT * FROM Profissionais WHERE email = ? AND senha = ?', [email, senha]);
    if (rows.length > 0) {
      return rows[0];
    }
    return null; 
  },

  createProf: async (prof) => {
    const [rows] = await db.query(
      'INSERT INTO Profissionais (nome, cpf, codigo_crp, email, senha, descricao, foto, tempo_na_area, cargo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [prof.nome, prof.cpf, prof.codigo_crp, prof.email, prof.senha, prof.descricao, '../img/avatar.png', prof.atuacao, 'Profissional']
    );
    
    return rows.insertId;
  },
  getUserById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Profissionais WHERE id_profissional = ?', [id.id]);
    return rows[0];
  },

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Profissionais');
    return rows;
  },

  delete: async (id) => {
    const [rows] = await db.query('DELETE FROM Profissionais WHERE id_profissional = ?', [id.id]);
    return rows[0];
  },
  
};

module.exports = profModel;
