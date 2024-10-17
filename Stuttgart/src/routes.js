const express = require('express');
const router = express.Router();

/**Importarção do Controller */
const ClienteController = require('./Controllers/ClienteController');
const VeiculoController = require('./Controllers/VeiculoController'); // Importa o VeiculoController

/**Tratamento das Rotas dos Clientes */
router.get('/cliente', ClienteController.listarClientes);
router.post('/cliente/autenticar', ClienteController.autenticarCliente); // Mudei para post
router.post('/cliente', ClienteController.adicionarCliente);
router.put('/cliente/:id', ClienteController.atualizarCliente);
router.delete('/cliente/:id', ClienteController.deletarCliente);

/**Tratamento das Rotas dos Veiculos */
router.get('/veiculos', VeiculoController.listarVeiculos);
router.post('/veiculos', VeiculoController.adicionarVeiculo);
router.put('/veiculos/:id', VeiculoController.editarVeiculo);
router.delete('/veiculos/:id', VeiculoController.removerVeiculo);


module.exports = router;