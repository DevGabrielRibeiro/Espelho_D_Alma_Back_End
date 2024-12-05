//src/services/authService.js
const agendamentoModel = require('../model/agendamentoModel');
const sendEmail = require('../utils/email');
const sendEmailCancel = require('../utils/emailCancel');
const sendEmailConfirm = require('../utils/emailConfirm');

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

    // Formata a data para o formato YYYY-MM-DD (para salvar no banco de dados)
    const diaAgendamentoISO = dataAtual.toISOString().split('T')[0];

    // Formata a data para o padrão brasileiro (DD/MM/YYYY)
    const diaAgendamentoBR = dataAtual.toLocaleDateString('pt-BR'); // Exemplo: "04/12/2024"

    // Atualiza o agendamento com as duas datas (ISO para o banco e BR para enviar ao front-end)
    agendamento.dia_agendamento = diaAgendamentoISO;  // Para salvar no banco
    agendamento.dia_agendamento_br = diaAgendamentoBR;  // Para enviar para o front-end

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

  updateStatusServiceCancel: async (agendamentoId, novoStatus, agend) => {
    console.log(agend);
    const statusValidos = ['Cancelado'];
    if (!statusValidos.includes(novoStatus)) {
      throw new Error("Status inválido");
    }
  
    const agendamentoAtualizado = await agendamentoModel.updateStatusModelCancel(agendamentoId, novoStatus);
    await sendEmailCancel.emailCancel(agend);
    
    
    if (!agendamentoAtualizado) throw new Error("Agendamento não encontrado");
  
    return agendamentoAtualizado;
  },

  updateStatusServiceConfrim: async (agendamentoId, novoStatus, agend) => {
    console.log(agend);
    const statusValidos = ['Confirmado'];
    if (!statusValidos.includes(novoStatus)) {
      throw new Error("Status inválido");
    }
  
    const agendamentoAtualizado = await agendamentoModel.updateStatusModelConfirm(agendamentoId, novoStatus);
    await sendEmailConfirm.emailConfirm(agend);
    
    
    if (!agendamentoAtualizado) throw new Error("Agendamento não encontrado");
  
    return agendamentoAtualizado;
  }
};

module.exports = agendamentoService;