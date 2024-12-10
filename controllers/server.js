const express = require('express');
const cors = require('cors');

// Importando rotas
const clientesRoutes = require('./routes/clientesRoutes');
const professorRoutes = require('./routes/professorRoutes');
const telefoneRoutes = require('./routes/telefoneRoutes');
const veiculosRoutes = require('./routes/veiculosRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para JSON

// Registrando rotas
app.use('/clientes', clientesRoutes);  // Rotas para clientes
app.use('/professor', professorRoutes);  // Rotas para professorRoutes
app.use('/telefone', telefoneRoutes);    // Rotas para telefone
app.use('/veiculos', veiculosRoutes);    // Rotas para veiculos

// Configuração do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});