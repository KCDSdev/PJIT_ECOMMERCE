const express = require('express');
const router = express.Router();

const ClienteController = require('./Controllers/ClienteController');

router.post('/cliente', ClienteController.inserir);

/*router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);

router.put('/carro/:codigo', CarroController.alterar);
router.delete('/carro/:codigo', CarroController.excluir);*/

module.exports = router;