const db = require('../db');

const ClienteService = {
    inserir: async (nome, tipo, telefone, celular, email, senha, endereco) => {
        try {
            // Adicione logs para depuração
            console.log('Dados recebidos:', { nome, tipo, telefone, celular, email, senha, endereco });

            // Verifica se todos os campos estão definidos
            if (!nome || !tipo || !telefone || !celular || !email || !senha || !endereco) {
                throw new Error('Todos os campos devem ser preenchidos.');
            }

            // Obtém o último ID da tabela Cliente
            const [lastIdRows] = await db.query('SELECT MAX(ID) AS lastId FROM Cliente');
            const newId = (lastIdRows[0].lastId || 0) + 1; // Incrementa o ID

            // SQL para inserir o cliente com o novo ID
            const query = `
                INSERT INTO Cliente (ID, Nome, Telefone, Celular, Email, Senha, Endereco, Tipo)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;

            // Executando a query com o novo ID e os dados do cliente
            await db.execute(query, [
                newId,
                nome,
                telefone,
                celular,
                email,
                senha,
                endereco,
                tipo
            ]);

            return newId; // Retorna o novo ID do cliente inserido

        } catch (error) {
            throw new Error('Erro ao inserir cliente: ' + error.message);
        }
    }
};

module.exports = ClienteService;