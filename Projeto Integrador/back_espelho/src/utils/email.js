const sgMail = require('@sendgrid/mail');

let key = "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"

sgMail.setApiKey(key)

const verificarEmail = {
    email: async (agendamento) => {
        // Criando o conteúdo HTML para o email
        console.log(agendamento);
        const msg = {
            to: agendamento.email, // Destinatário
            from: 'bielzin.senac2024@gmail.com', // Remetente
            cc: 'bielzin.senac2024@gmail.com',//Será enviado uma cópia para o email
            subject: 'Confirmação de Agendamento',
            text: 'Um agendamento foi solicitado.',
            html: `
                <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                            }
                            .email-container {
                                width: 100%;
                                max-width: 600px;
                                margin: 20px auto;
                                padding: 20px;
                                background-color: #fff;
                                border-radius: 8px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                            h1 {
                                color: #2c3e50;
                                text-align: center;
                            }
                            .card {
                                background-color: #ecf0f1;
                                padding: 20px;
                                border-radius: 8px;
                                margin-bottom: 20px;
                            }
                            .card p {
                                margin: 8px 0;
                                font-size: 16px;
                                color: #34495e;
                            }
                            .card strong {
                                color: #2980b9;
                            }
                            .footer {
                                text-align: center;
                                font-size: 14px;
                                color: #7f8c8d;
                                margin-top: 20px;
                            }
                            .button {
                                display: inline-block;
                                padding: 10px 20px;
                                background-color: #2980b9;
                                color: white;
                                text-decoration: none;
                                border-radius: 4px;
                                font-weight: bold;
                                margin-top: 20px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <h1>Confirmação de Agendamento</h1>
                            <div class="card">
                                <p><strong>Nome do Profissional:</strong>${agendamento.nome_profissional}</p>
                                <p><strong>Nome do Aluno:</strong>${agendamento.nome_aluno}</p>
                                <p><strong>Unidade de Atendimento:</strong>${agendamento.nome_unidade}</p>
                                <p><strong>Data do Atendimento:</strong> ${agendamento.dia_agendamento.split("T", 1)}</p>
                                <p><strong>Horário do Atendimento:</strong> ${agendamento.horario_agendamento}</p>
                                <p><strong>Status do Agendamento:</strong>${agendamento.status_agendamento}</p>
                            </div>
                            <div class="footer">
                                <p>Se você não realizou esse agendamento, entre em contato conosco imediatamente.</p>
                            </div>
                        </div>
                    </body>
                </html>
            `
        };

        try {
            await sgMail.send(msg);
            console.log('Email enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            if (error.response) {
                console.error(error.response.body);
            }
        }
    }
};

module.exports = verificarEmail;

