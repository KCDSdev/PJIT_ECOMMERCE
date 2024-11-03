const db = require('../db');

class CompraService {
    static async criarCompra({ clienteId, veiculoId, valorTotal, dataCompra, tipoPagamento }) {
        const connection = await db.getConnection(); // Obtendo uma conexão do pool
        try {
            await connection.beginTransaction();

            // Inserir a compra
            const [compraResult] = await connection.query(
                'INSERT INTO compras (clienteId, veiculoId, valorTotal, dataCompra) VALUES (?, ?, ?, ?)',
                [clienteId, veiculoId, valorTotal, dataCompra]
            );
            const compraId = compraResult.insertId;

            // Inserir o pagamento associado
            await connection.query(
                'INSERT INTO pagamentos (compraId, tipoPagamento, valor, statusPagamento) VALUES (?, ?, ?, ?)',
                [compraId, tipoPagamento, valorTotal, "Aprovado"]
            );

            // Confirma a transação
            await connection.commit();
            return compraId;
        } catch (error) {
            await connection.rollback(); // Reverte a transação em caso de erro
            throw error;
        } finally {
            connection.release(); // Libera a conexão de volta para o pool
        }
    }
}

module.exports = CompraService;