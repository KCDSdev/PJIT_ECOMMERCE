// src/model/clienteModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const Cliente = sequelize.define('Cliente', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING(1),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING(10),
    },
    celular: {
        type: DataTypes.STRING(11),
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    enderecoId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Alterado para INTEGER para compatibilidade
    },
    dataCriacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'clientes', // Nome da tabela no banco de dados
    timestamps: false, // Se você não quiser que o Sequelize adicione createdAt e updatedAt
});

// Sincroniza o modelo com o banco de dados (cuidado com isso em produção!)
Cliente.sync();

module.exports = Cliente;
