// Carregar as variáveis de ambiente do arquivo 'variables.env'
require('dotenv').config({ path: 'variables.env' });


// Importações necessárias
const express = require('express');
const cors = require('cors');

// Certifique-se de que você está importando o arquivo correto de rotas de clientes
// Se o arquivo 'clienteRoutes.js' estiver na pasta 'src/routes', use o caminho relativo correto.
const clienteRoutes = require('../Projeto e-commerce/src/model/clienteModel'); // Certifique-se de que o caminho está correto



// Criação da instância do servidor
const server = express();

// Middlewares
server.use(cors());
server.use(express.json()); // Para aceitar JSON
server.use(express.urlencoded({ extended: false })); // Para aceitar dados de formulários





//Usar formulario
const path = require('path');

// Serve o formulário HTML quando acessar /formulario
server.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html')); // Certifique-se de que o caminho está correto
});






// Usar as rotas de clientes
server.use('/api/clientes', clienteRoutes);


server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
