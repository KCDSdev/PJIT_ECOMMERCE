// config/database.js
const { Sequelize } = require('sequelize');

// Configurações do banco de dados
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // ou 'mariadb', se for o caso
    logging: false,   // Mude para console.log se quiser ver os logs das consultas
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados foi bem-sucedida!');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
};

// Testa a conexão com o banco de dados
testConnection();

module.exports = sequelize;
