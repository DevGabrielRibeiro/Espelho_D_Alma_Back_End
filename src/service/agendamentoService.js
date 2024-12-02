//src/services/authService.js
const agendamentoModel = require('../model/agendamentoModel');
const sendEmail = require('../utils/email');

const agendamentoService = {
  createAgendamentoService: async (agendamento) => {
    // Recebe o nome do dia da semana
    const diaSemanaString = agendamento.dia_agendamento;  // Exemplo: "Segunda-feira"

    // Mapeamento dos dias da semana para índices (0 - Domingo, 1 - Segunda-feira, ..., 6 - Sábado)
    const diasDaSemana = {
      "Domingo": 0,
      "Segunda-feira": 1,
      "Terça-feira": 2,
      "Quarta-feira": 3,
      "Quinta-feira": 4,
      "Sexta-feira": 5,
      "Sábado": 6
    };

    // Obtém o índice do dia da semana (ex: "Segunda-feira" -> 1)
    const diaIndex = diasDaSemana[diaSemanaString];

    if (diaIndex === undefined) {
      throw new Error("Dia da semana inválido");
    }

    // Cria a data atual
    const dataAtual = new Date();

    // Calcula a diferença em dias para o próximo dia desejado
    const diaAtualIndex = dataAtual.getDay();  // 0 - Domingo, 1 - Segunda-feira, ..., 6 - Sábado
    let diasParaAdicionar = diaIndex - diaAtualIndex;

    // Se o dia desejado já passou na semana, adiciona 7 para pegar o próximo dia
    if (diasParaAdicionar <= 0) {
      diasParaAdicionar += 7;
    }

    // Define a data para o próximo dia da semana
    dataAtual.setDate(dataAtual.getDate() + diasParaAdicionar);

    // Formata a data para o formato YYYY-MM-DD
    const diaAgendamento = dataAtual.toISOString().split('T')[0];

    // Atualiza o agendamento com o novo valor
    agendamento.dia_agendamento = diaAgendamento;

    console.log(agendamento);  // Verifique o agendamento antes de salvar

    // Salva no banco e envia o email
    const createAgendamento = await agendamentoModel.createModel(agendamento);
    await sendEmail.email(agendamento);

    return { createAgendamento };
  },


  getByIDService: async (agendamento) => {
    const createAgendamento = await agendamentoModel.getByIdModel(agendamento);
    return { createAgendamento };
  },

  getAllService: async (agendamento) => {
    const createAgendamento = await agendamentoModel.getAllModel(agendamento);
    return { createAgendamento };
  },

  getAllServiceUser: async (agendamento) => {
    const createAgendamento = await agendamentoModel.getAllModelAluno(agendamento);
    return { createAgendamento };
  },

  deleteService: async (agendamento) => {
    const createAgendamento = await agendamentoModel.deleteModel(agendamento);
    return { createAgendamento };
  },
};

module.exports = agendamentoService;