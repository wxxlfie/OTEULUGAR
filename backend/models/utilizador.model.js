const sequelize = require("sequelize");
const conexao = require("../config/database");

let Utilizador = conexao.define("utilizador",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        psicologo_id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        morada: {
            type: sequelize.STRING,
            allowNull: true
        },
        nif: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        email: {
            type: sequelize.STRING,
            allowNull: true
        },
        data_registo: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        data_atualizacao: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        password: {
            type: sequelize.STRING,
            allowNull: true
        },
        contacto: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        dta_nascimento: {
            type: sequelize.INTEGER,
            allowNull: true
        },
    },
    {
        tableName: "utilizador",
        timestamps: true
    }
);

module.exports = Utilizador;
