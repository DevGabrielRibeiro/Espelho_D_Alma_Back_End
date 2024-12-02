const db = require('../config');

const userModel = {
  getUserByEmail: async (email, senha)  => {
    const [rows] = await db.query('SELECT * FROM alunos WHERE email = ? AND senha = ?', [email, senha]);
    if (rows.length > 0) {
      return rows[0];
    }
    return null; 
  },

  createUser: async (user) => {
    const [rows] = await db.query(
      'INSERT INTO alunos (nome, cpf, email, senha, fk_id_unidade, cargo) VALUES (?, ?, ?, ?, ?, ?)',
      [user.nome, user.cpf, user.email, user.senha, user.unidade, 'Aluno']
    );
    
    return rows.insertId;
  },
  getUserById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Alunos WHERE id_aluno = ?', [id.id]);
    return rows[0];
  },

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Alunos');
    return rows;
  },

  delete: async (id) => {
    const [rows] = await db.query('DELETE FROM Alunos WHERE id_aluno = ?', [id.id]);
    return rows[0];
  },
  
};

module.exports = userModel;
