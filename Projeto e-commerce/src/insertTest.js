// insertTest.js
const { sequelize } = require('./src/config/database');
const Cliente = require('./src/models/clienteModel');

const testInsertion = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.');

        // Sincroniza o modelo com o banco de dados
        await Cliente.sync();

        // Insere um novo cliente
        const novoCliente = await Cliente.create({
            nome: 'João Silva',
            sexo: 'M',
            cpf: '12345678901',
            telefone: '1234567890',
            celular: '0987654321',
            email: 'joao.silva@example.com',
            senha: 'senhaSegura',
            enderecoId: 1, // Altere conforme necessário
        });

        console.log('Novo cliente inserido:', novoCliente.toJSON());
    } catch (error) {
        console.error('Erro ao inserir cliente:', error);
    } finally {
        await sequelize.close(); // Fecha a conexão
    }
};

testInsertion();