const { json } = require('body-parser');
const db = require('../db');

class ClienteService {
    // Método para listar todos os clientes
    static async listarTodos() {
        try {
            const [rows] = await db.query('SELECT * FROM clientes');
            return rows; // Retorna a lista de clientes
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            throw error; // Lança o erro para ser tratado no controlador
        }
    }

    // Método para buscar um cliente por email e senha
    static async buscarPorEmailESenha(email, senha) {
        try {

            // Cria a query SQL
            const query = 'SELECT * FROM clientes WHERE ClienteEmail = ? AND ClienteSenha = ?';

            // Executa a consulta
            const [rows] = await db.execute(query, [email, senha]);

            // Verifica se o cliente foi encontrado
            if (rows.length > 0) {
                const { ClienteSenha, ...clienteSemSenha } = rows[0]; // Remove a senha do retorno
                return clienteSemSenha; // Retorna o primeiro cliente encontrado sem a senha
            }

            return null; // Retorna null se não encontrar nenhum cliente
        } catch (error) {
            throw new Error('Erro ao buscar cliente: ' + error.message); // Lança erro para ser tratado no controller
        }
    }


    // Método para adicionar um novo cliente
    static async adicionar(clienteData) {
        const {
            ClienteNome,
            ClienteTelefone,
            ClienteCelular,
            ClienteEmail,
            ClienteSenha,
            ClienteLogradouro,
            ClienteNumero,
            ClienteMunicipio,
            ClienteCidade,
            ClienteEstado,
            ClienteSexo,
            ClienteCpf,
            ClienteDataNascimento,
            ClienteRg,
            ClienteNacionalidade,
            ClienteEstadoCivil,
        } = clienteData;

        try {

            const sql = `
                INSERT INTO clientes 
                (ClienteNome, ClienteTelefone, ClienteCelular, ClienteEmail, ClienteSenha, 
                ClienteLogradouro, ClienteNumero, ClienteMunicipio, ClienteCidade, 
                ClienteEstado, ClienteSexo, ClienteCpf, ClienteDataNascimento, ClienteRg, 
                ClienteNacionalidade, ClienteEstadoCivil) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const params = [
                ClienteNome,
                ClienteTelefone,
                ClienteCelular,
                ClienteEmail,
                ClienteSenha,
                ClienteLogradouro,
                ClienteNumero,
                ClienteMunicipio,
                ClienteCidade,
                ClienteEstado,
                ClienteSexo,
                ClienteCpf,
                ClienteDataNascimento,
                ClienteRg,
                ClienteNacionalidade,
                ClienteEstadoCivil,
            ];

            const [result] = await db.execute(sql, params);
            return { success: true, message: 'Cliente adicionado com sucesso!', clienteID: result.insertId }; // Retorna o ID gerado
        } catch (error) {
            // Tratamento de erro para duplicação de registros
            if (error.code === 'ER_DUP_ENTRY') {
                return {
                    success: false,
                    message: 'Cliente com CPF ou E-mail já existe.',
                };
            } else {
                console.error('Erro ao adicionar cliente:', error);
                throw new Error('Erro ao adicionar cliente: ' + error.message);
            }
        }
    }

    // Método para atualizar um cliente
    static async atualizarCliente(id, clienteAtualizado) {

        try {
            const { ClienteNome, ClienteTelefone, ClienteCelular, ClienteEmail, ClienteSenha,
                ClienteLogradouro, ClienteNumero, ClienteMunicipio, ClienteCidade,
                ClienteEstado, ClienteSexo, ClienteCpf, ClienteDataNascimento,
                ClienteRg, ClienteNacionalidade, ClienteEstadoCivil } = clienteAtualizado;

            const [result] = await db.query(
                `UPDATE clientes SET 
                    ClienteNome = ?, 
                    ClienteTelefone = ?, 
                    ClienteCelular = ?, 
                    ClienteEmail = ?, 
                    ClienteSenha = ?, 
                    ClienteLogradouro = ?, 
                    ClienteNumero = ?, 
                    ClienteMunicipio = ?, 
                    ClienteCidade = ?, 
                    ClienteEstado = ?, 
                    ClienteSexo = ?, 
                    ClienteCpf = ?, 
                    ClienteDataNascimento = ?, 
                    ClienteRg = ?, 
                    ClienteNacionalidade = ?, 
                    ClienteEstadoCivil = ? 
                WHERE ClienteID = ?`,
                [ClienteNome, ClienteTelefone, ClienteCelular, ClienteEmail, ClienteSenha,
                    ClienteLogradouro, ClienteNumero, ClienteMunicipio, ClienteCidade,
                    ClienteEstado, ClienteSexo, ClienteCpf, ClienteDataNascimento,
                    ClienteRg, ClienteNacionalidade, ClienteEstadoCivil, id]
            );

            return result.affectedRows > 0; // Retorna verdadeiro se uma linha foi afetada
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw error; // Lança o erro para ser tratado no controlador
        }
    }

    // Método para deletar um cliente com SQL direto
    static async deletarCliente(id) {
        try {
            // Executa a query para verificar se o cliente existe
            const [cliente] = await db.query('SELECT * FROM clientes WHERE id = ?', [id]);

            if (cliente.length === 0) {
                return false; // Cliente não encontrado
            }

            // Executa a query para deletar o cliente
            await db.query('DELETE FROM clientes WHERE id = ?', [id]);

            return true; // Deleção bem-sucedida
        } catch (error) {
            throw new Error("Erro ao deletar o cliente: " + error.message); // Lança o erro para o controller tratar
        }
    }

}
module.exports = ClienteService;