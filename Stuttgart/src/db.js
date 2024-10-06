const mysql = require('mysql2/promise'); // Certifique-se de usar a versão `promise`

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection()
    .then((connection) => {
        console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`);
        connection.release(); // Liberar a conexão para o pool
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    });

module.exports = pool;