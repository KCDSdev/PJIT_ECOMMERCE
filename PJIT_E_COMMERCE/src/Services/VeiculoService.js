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

    static async adicionar(veiculo) {
        

        if (!veiculo.modelo || !veiculo.fabricante || !veiculo.ano_fabricacao || !veiculo.ano_modelo || !veiculo.placa || !veiculo.valor || !veiculo.cor || !veiculo.potencia || !veiculo.tamanho_do_aro || !veiculo.estado_registro || !veiculo.quilometragem) {
            throw new Error('Todos os campos são obrigatórios');
        }
    
        const query = `
            INSERT INTO veiculos (modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
    
        try {
            const [result] = await db.query(query, [veiculo.modelo, veiculo.fabricante, veiculo.ano_fabricacao, veiculo.ano_modelo, veiculo.placa, veiculo.valor, veiculo.cor, veiculo.potencia, veiculo.tamanho_do_aro, veiculo.estado_registro, veiculo.quilometragem]);
    

            if (result.insertId) {
                return { id: result.insertId, ...veiculo };
            } else {
                throw new Error('Erro ao adicionar veículo: ID não foi gerado.');
            }
        } catch (error) {
            console.error('Erro ao adicionar veículo:', error); // Adicione este log para ajudar na depuração
            throw new Error('Erro ao adicionar veículo: ' + error.message);
        }
    }
    
}

module.exports = veiculoService;
