const db = require('../db');

class veiculoService {

    // Método para listar todos os veículos usando uma query SQL
    static async listarTodos() {
        try {
            // Executa uma query SQL para selecionar todos os veículos
            const [results] = await db.query('SELECT * FROM veiculos');
            return results; // Retorna os resultados da consulta
        } catch (error) {
            // Em caso de erro, lança uma exceção para ser tratada no controller
            throw new Error('Erro ao listar veículos: ' + error.message);
        }
    }

    // Método para adicionar um novo veículo
    static async adicionar(veiculo) {
        const { modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem } = veiculo;

        // Busca o maior ID atual na tabela Veiculos
        const queryMaxId = `SELECT MAX(id) as maxId FROM Veiculos`;

        try {
            const [rows] = await db.query(queryMaxId);
            let novoId = 1; // Se não houver registros, começamos do ID 1

            if (rows.length > 0 && rows[0].maxId !== null) {
                novoId = rows[0].maxId + 1; // Incrementa o maior ID atual
            }

            // Prepara a query de inserção com o ID definido manualmente
            const queryInsert = `
                INSERT INTO Veiculos (id, modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            // Executa a query de inserção
            const [result] = await db.query(queryInsert, [
                novoId, modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem
            ]);

            return { id: novoId, ...veiculo }; // Retorna os dados do veículo adicionado, incluindo o ID gerado
        } catch (error) {
            throw new Error('Erro ao adicionar veículo: ' + error.message);
        }
    }

    static async editar(id, veiculo) {
        const { modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem } = veiculo;

        // Prepara a query para atualizar os dados do veículo
        const query = `
            UPDATE Veiculos
            SET modelo = ?, fabricante = ?, ano_fabricacao = ?, ano_modelo = ?, placa = ?, valor = ?, cor = ?, potencia = ?, tamanho_do_aro = ?, estado_registro = ?, quilometragem = ?
            WHERE id = ?
        `;

        try {
            // Executa a query de atualização
            const [result] = await db.query(query, [modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem, id]);

            // Verifica se alguma linha foi afetada (atualizada)
            if (result.affectedRows > 0) {
                return { id, ...veiculo }; // Retorna os dados atualizados do veículo
            } else {
                return null; // Retorna null se o veículo não foi encontrado
            }
        } catch (error) {
            throw new Error('Erro ao atualizar veículo: ' + error.message);
        }
    }

    // Método para remover um veículo existente
    static async remover(id) {
        // Prepara a query para deletar o veículo
        const query = `
            DELETE FROM Veiculos
            WHERE id = ?
        `;

        try {
            // Executa a query de deleção
            const [result] = await db.query(query, [id]);

            // Verifica se alguma linha foi afetada (deletada)
            if (result.affectedRows > 0) {
                return true; // Retorna true se o veículo foi removido
            } else {
                return false; // Retorna false se o veículo não foi encontrado
            }
        } catch (error) {
            throw new Error('Erro ao remover veículo: ' + error.message);
        }
    }
}

module.exports = veiculoService;
