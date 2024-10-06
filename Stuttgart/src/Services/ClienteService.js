const db = require('../db');

class ClienteService {
    // Método para listar todos os clientes
    static async listarTodos() {
        try {
            const query = 'SELECT * FROM clientes'; // Consulta SQL para listar todos os clientes
            const [rows] = await db.execute(query); // Executa a consulta e retorna os resultados
            return rows;
        } catch (error) {
            throw new Error(`Erro ao listar clientes: ${error.message}`);
        }
    }


    /**------------------------------------------------------------------------------------------------------------------------------ */
    // Método para adicionar um novo cliente (Pessoa Física ou Jurídica)
    static async adicionar(clienteData) {
        const {
            tipo, // 'F' para Pessoa Física, 'J' para Pessoa Jurídica
            nome,
            telefone,
            celular,
            email,
            senha,
            logradouro,
            numero,
            municipio,
            cidade,
            estado,
            sexo,
            cpf,
            dataNascimento,
            rg,
            nacionalidade,
            estadoCivil,
            cnpj,
            razaoSocial,
            inscricaoEstadual
        } = clienteData;

        const connection = await db.getConnection(); // Inicia uma conexão
        await connection.beginTransaction(); // Inicia a transação

        try {
            // Obter o último ID da tabela 'clientes'
            const [lastIdResult] = await connection.execute('SELECT MAX(id) AS lastId FROM clientes');
            const lastId = lastIdResult[0].lastId || 0; // Se não houver registros, começar do 0
            const newId = lastId + 1; // Novo ID

            // Comando SQL para inserir o cliente na tabela 'clientes'
            const clienteQuery = `
            INSERT INTO clientes 
            (id, nome, telefone, celular, email, senha, logradouro, numero, municipio, cidade, estado, dataCriacao, status, tipo) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), 'ativo', ?)
        `;

            await connection.execute(clienteQuery, [
                newId,
                nome,
                telefone,
                celular,
                email,
                senha,
                logradouro,
                numero,
                municipio,
                cidade,
                estado,
                tipo
            ]);


            // Inserir dados específicos para Pessoa Física
            if (tipo === 'F') {
                const pessoaFisicaQuery = `
                INSERT INTO pessoa_fisica (cliente_id, cpf, dataNascimento, rg, nacionalidade, estadoCivil) 
                VALUES (?, ?, ?, ?, ?, ?)
            `;

                await connection.execute(pessoaFisicaQuery, [
                    newId, // Referência ao ID do cliente
                    cpf,
                    dataNascimento,
                    rg,
                    nacionalidade,
                    estadoCivil
                ]);
            }
            // Inserir dados específicos para Pessoa Jurídica
            else if (tipo === 'J') {
                const pessoaJuridicaQuery = `
                INSERT INTO pessoa_juridica (cliente_id, cnpj, razaoSocial, inscricaoEstadual) 
                VALUES (?, ?, ?, ?)
            `;

                await connection.execute(pessoaJuridicaQuery, [
                    newId, // Referência ao ID do cliente
                    cnpj,
                    razaoSocial,
                    inscricaoEstadual
                ]);
            }

            // Confirma a transação
            await connection.commit();

            return { id: newId, nome, email }; // Retorna os dados do cliente

        } catch (error) {
            // Rollback em caso de erro
            await connection.rollback();
            throw error; // Lança o erro para tratamento externo
        } finally {
            connection.release(); // Libera a conexão de volta para o pool
        }
    }

    /**------------------------------------------------------------------------------------------------------------------------------ */

    // Método para editar um cliente existente
    static async editar(id, clienteAtualizado) {
        try {
            // Verifica se o cliente com o ID fornecido existe
            const clienteExistente = await this.buscarPorId(id);
            if (!clienteExistente) {
                return null; // Cliente não encontrado
            }

            console.log(clienteAtualizado)

            // Atualiza os dados na tabela clientes
            const query = `
                UPDATE clientes 
                SET 
                    nome = ?, 
                    telefone = ?, 
                    celular = ?, 
                    email = ?, 
                    senha = ?, 
                    logradouro = ?, 
                    numero = ?, 
                    municipio = ?, 
                    cidade = ?, 
                    estado = ?, 
                    status = ?, 
                    tipo = ?
                WHERE id = ?`;

            const [resultado] = await db.query(query, [
                clienteAtualizado.nome,
                clienteAtualizado.telefone,
                clienteAtualizado.celular,
                clienteAtualizado.email,
                clienteAtualizado.senha,
                clienteAtualizado.logradouro,
                clienteAtualizado.numero,
                clienteAtualizado.municipio,
                clienteAtualizado.cidade,
                clienteAtualizado.estado,
                clienteAtualizado.status,
                clienteAtualizado.tipo,
                id
            ]);

            // Verifica se a atualização foi bem-sucedida
            if (resultado.affectedRows === 0) {
                return null; // Indica que o cliente não foi atualizado
            }

            // Atualiza os dados na tabela PF
        if (clienteAtualizado.tipo === 'F') {
            const queryPF = `
                UPDATE pessoa_fisica 
                SET 
                    cpf = ?, 
                    dataNascimento = ?, 
                    rg = ?, 
                    nacionalidade = ?, 
                    estadoCivil = ? 
                WHERE cliente_id = ?`; // Mantém 'cliente_id'

            /*await db.query(queryPF, [
                clienteAtualizado.cpf,
                clienteAtualizado.dataNascimento,
                clienteAtualizado.rg,
                clienteAtualizado.nacionalidade,
                clienteAtualizado.estadoCivil,
                id // Aqui 'id' deve referir-se ao cliente_id
            ]);*/
        }

            // Retorna os dados atualizados
            return { id, ...clienteAtualizado };
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw new Error('Erro ao atualizar cliente.'); // Lança um erro que pode ser tratado na camada superior
        }


    }

    // Método para buscar um cliente por ID
    static async buscarPorId(id) {
        const query = 'SELECT * FROM clientes WHERE id = ?';
        const [resultados] = await db.query(query, [id]);

        if (resultados.length === 0) {
            return null; // Cliente não encontrado
        }

        return resultados[0]; // Retorna o cliente encontrado
    }
}
module.exports = ClienteService;