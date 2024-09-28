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

/*const ClienteService = {
    inserir: async (telefone, celular, email, senha, endereco, tipo) => {
        try {

            // Obtém o último ID da tabela Cliente
            const [lastIdRows] = await db.query('SELECT MAX(ID) AS lastId FROM Cliente');
            const newId = (lastIdRows[0].lastId || 0) + 1; // Incrementa o ID
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

            // Retorna o último ID inserido
            const [rows] = await db.query('SELECT LAST_INSERT_ID() as id');
            return rows[0].id; // Retorna o ID do cliente inserido

        } catch (error) {
            throw new Error('Erro ao inserir cliente: ' + error.message);
        }
    }
};

module.exports = ClienteService;*/


const ClienteService = {
    inserir: async (telefone, celular, email, senha, endereco, tipo) => {
        try {
            // Obtém o último ID da tabela Cliente
            const [lastIdRows] = await db.query('SELECT MAX(ID) AS lastId FROM Cliente');
            const newId = (lastIdRows[0].lastId || 0) + 1; // Incrementa o ID

            // SQL para inserir o cliente com o novo ID
            const query = `
                INSERT INTO Cliente (ID, Telefone, Celular, Email, Senha, Endereco, Tipo)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;

            // Executando a query com o novo ID e os dados do cliente
            await db.execute(query, [
                newId,
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
