const sequelize = require("sequelize");
const conexao = require("../config/database");

let Psicologo = conexao.define("psicologo",
    {
        id: {
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
            type: sequelize.STRING,
            allowNull: true
        },
        data_atualizacao: {
            type: sequelize.STRING,
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
            type: sequelize.STRING,
            allowNull: true
        },
        utilizador_id: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        num_celuda: {
            type: sequelize.INTEGER,
            allowNull: true
        },
    },
    {
        tableName: "psicologo",
        timestamps: true
    }
);

module.exports = Psicologo;