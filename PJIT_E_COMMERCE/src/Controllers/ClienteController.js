// Exemplo de como pode ser o seu ClienteController.js
const ClienteService = require('../Services/ClienteService');

const ClienteController = {
    inserir: async (req, res) => {
        const { nome, tipo, telefone, celular, email, senha, endereco   } = req.body; // Extrai os campos do corpo da requisição
        console.log('Dados recebidos:', { nome, tipo, telefone, celular, email, senha, endereco });

        // Verifica se todos os campos são fornecidos
        if (nome && tipo && telefone && celular && email && senha && endereco) {
            try {
                const clienteCodigo = await ClienteService.inserir(nome,tipo, telefone, celular, email, senha, endereco );
                // Responde com os dados inseridos
                res.json({
                    result: {
                        nome,
                        tipo,
                        telefone,
                        celular,
                        email,
                        endereco
                    }
                });
            } catch (error) {
                res.status(500).json({
                    error: `Erro ao inserir cliente: ${error.message}`
                });
            }
        } else {
            res.status(400).json({
                error: 'Todos os campos são obrigatórios'
            });
        }
    }
};

module.exports = ClienteController;
