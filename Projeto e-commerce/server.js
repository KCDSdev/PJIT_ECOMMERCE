require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const cors = require('cors');
const clienteRoutes = require('../Projeto e-commerce/src/model/clienteModel'); // Certifique-se de que o caminho está correto

const server = express();
server.use(cors());
server.use(express.json()); // Para aceitar JSON
server.use(express.urlencoded({ extended: false })); // Para aceitar dados de formulários

// Usar as rotas de clientes
server.use('/api/clientes', clienteRoutes);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

