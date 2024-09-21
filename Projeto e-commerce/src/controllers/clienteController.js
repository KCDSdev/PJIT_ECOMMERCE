
// clienteController.js

const Cliente = require('./src/model/clienteModel');

// Função para criar um novo cliente
const createCliente = async (req, res) => {
    try {
        const { nome, sexo, cpf, telefone, celular, email, senha, enderecoId } = req.body;
        const novoCliente = await Cliente.create({
            nome,
            sexo,
            cpf,
            telefone,
            celular,
            email,
            senha,
            enderecoId
        });
        return res.status(201).json(novoCliente);
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        return res.status(500).json({ error: 'Erro ao criar cliente' });
    }
};

module.exports = {
    createCliente
};
