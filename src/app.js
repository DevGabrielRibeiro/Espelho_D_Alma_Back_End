
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const unitRoutes = require('./routes/unitRoutes');
const profRoutes = require('./routes/profRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/unit', unitRoutes);
app.use('/api/prof', profRoutes);
app.use('/api/agendamento', agendamentoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
