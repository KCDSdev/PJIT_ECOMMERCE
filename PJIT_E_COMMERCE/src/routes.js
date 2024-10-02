const express = require('express');
const router = express.Router();

const ClienteController = require('./Controllers/ClienteController');
const VeiculoController = require('./Controllers/VeiculoController'); // Importa o VeiculoController


router.post('/cliente', ClienteController.inserir);


// Rota para listar todos os veículos
router.get('/veiculos', VeiculoController.listarVeiculos);

// Rota para adicionar um novo veículo
router.post('/veiculos', VeiculoController.adicionarVeiculo);

/*// Rota para editar um veículo existente pelo ID
router.put('/veiculos/:id', VeiculoController.editarVeiculo);

// Rota para remover um veículo pelo ID
router.delete('/veiculos/:id', VeiculoController.removerVeiculo);*/


module.exports = router;