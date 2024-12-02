const db = require('../config');

const agendamentoModel = {
  createModel: async (agendamento) => {
    const [rows] = await db.query('INSERT INTO agendamentos (fk_id_aluno, fk_id_profissional, fk_id_unidade, horario_agendamento, dia_agendamento, obs, status_agendamento) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [agendamento.fk_id_aluno, agendamento.fk_id_profissional, agendamento.fk_id_unidade, agendamento.horario_agendamento, agendamento.dia_agendamento, agendamento.obs, agendamento.status_agendamento]
    );
    return rows.insertId;
  },
  getByIdModel: async (id) => {
    const [rows] = await db.query('SELECT * FROM Agendamentos WHERE id_agendamento = ?', [id.id]);
    return rows[0];
  },

  getAllModel: async (id) => {
    console.log(id);
    const [rows] = await db.query(`SELECT 
 alunos.id_aluno AS id_aluno,
    alunos.nome AS nome_aluno,
    profissionais.id_profissional AS id_profissional,
    profissionais.nome AS nome_profissional,
    unidades_Senac.id_unidade AS id_unidade,
    unidades_Senac.nome AS nome_unidade,
    agendamentos.dia_agendamento AS dia_agendamento,
    agendamentos.horario_agendamento AS horario_agendamento,
    agendamentos.status_agendamento AS status_agendamento
FROM 
    agendamentos
INNER JOIN 
    alunos ON agendamentos.fk_id_aluno = alunos.id_aluno
INNER JOIN 
    profissionais ON agendamentos.fk_id_profissional = profissionais.id_profissional
INNER JOIN 
    unidades_senac ON agendamentos.fk_id_unidade = unidades_senac.id_unidade
WHERE profissionais.id_profissional = ?
    `,[id.id_profissional])
    return rows;
  },


  getAllModelAluno: async (id) => {
    console.log(id);
    const [rows] = await db.query(`SELECT 
 alunos.id_aluno AS id_aluno,
    alunos.nome AS nome_aluno,
    profissionais.id_profissional AS id_profissional,
    profissionais.nome AS nome_profissional,
    unidades_Senac.id_unidade AS id_unidade,
    unidades_Senac.nome AS nome_unidade,
    agendamentos.dia_agendamento AS dia_agendamento,
    agendamentos.horario_agendamento AS horario_agendamento,
    agendamentos.status_agendamento AS status_agendamento
FROM 
    agendamentos
INNER JOIN 
    alunos ON agendamentos.fk_id_aluno = alunos.id_aluno
INNER JOIN 
    profissionais ON agendamentos.fk_id_profissional = profissionais.id_profissional
INNER JOIN 
    unidades_senac ON agendamentos.fk_id_unidade = unidades_senac.id_unidade
WHERE alunos.id_aluno = ?
    `,[id.id_aluno])
    return rows;
  },

  deleteModel: async (id) => {
    const [rows] = await db.query('DELETE FROM Agendamentos WHERE id_agendamento = ?', [id.id]);
    return rows[0];
  },
};

module.exports = agendamentoModel;
