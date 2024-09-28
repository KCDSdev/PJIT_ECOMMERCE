//Aqui é inserido as query do db
const db = require('../db');



/*module.exports =
{
    /*inserir: async (telefone, celular, email, senha, data_Criacao, endereco, tipo) => {
        try {
            // SQL para inserir o cliente
            const query = `
                    INSERT INTO clientes (telefone, celular, email, senha, data_Criacao, endereco, tipo)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `;
            const values = [telefone, celular, email, senha, data_Criacao, endereco, tipo];

            const [result] = await db.execute(query, values); // Execute a query e obtenha o resultado

            return result.insertId; // Retorna o ID do cliente inserido
        } catch (error) {
            throw new Error('Erro ao inserir cliente: ' + error.message);
        }

    }
}*/

const ClienteService = {
    inserir: async (telefone, celular, email, senha, endereco, tipo) => {
        try {
            // SQL para inserir o cliente
            const query = `
                INSERT INTO cliente (telefone, celular, email, senha, endereco, tipo)
                VALUES (?, ?, ?, ?, ?, ?)
            `;

            // Separando as variáveis para cada campo
            const telefoneCliente = telefone;
            const celularCliente = celular;
            const emailCliente = email;
            const senhaCliente = senha;
            const enderecoCliente = endereco;
            const tipoCliente = tipo;
            
            // Executando a query com as variáveis separadas
            const [result] = await db.execute(query, [
                telefoneCliente,
                celularCliente,
                emailCliente,
                senhaCliente,
                enderecoCliente,
                tipoCliente
            ]);

            // Retorna o ID (codigo) gerado pelo banco
            return result.insertId;
        } catch (error) {
            throw new Error('Erro ao inserir cliente: ' + error.message);
        }
    }
};

module.exports = ClienteService;