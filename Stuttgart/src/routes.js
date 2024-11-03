const express = require('express');
const router = express.Router();

/** Importação do Controller */
const ClienteController = require('./Controllers/ClienteController');
const VeiculoController = require('./Controllers/VeiculoController'); 
const CompraController = require('./Controllers/CompraController');


/** Tratamento das Rotas dos Clientes */
router.get('/cliente', ClienteController.listarClientes);
router.post('/cliente/autenticar', ClienteController.autenticarCliente); // Mudei para post
router.post('/cliente/adicionarCliente', ClienteController.adicionarCliente);
router.put('/cliente/:id', ClienteController.atualizarCliente);
router.delete('/cliente/:id', ClienteController.deletarCliente);

/** Tratamento das Rotas dos Veículos */
router.get('/veiculos', VeiculoController.listarVeiculos);
router.post('/veiculos', VeiculoController.adicionarVeiculo);
router.put('/veiculos/:id', VeiculoController.editarVeiculo);
router.delete('/veiculos/:id', VeiculoController.removerVeiculo);

// Rota para criar uma compra
router.post('/compras/criarCompra', CompraController.criarCompra);

module.exports = router;
