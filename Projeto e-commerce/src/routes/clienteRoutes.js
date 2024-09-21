// clienteRoutes.js

const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para criar um novo cliente
router.post('/', clienteController.createCliente);

module.exports = router;