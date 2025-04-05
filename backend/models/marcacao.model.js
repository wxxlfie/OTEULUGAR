const sequelize = require("sequelize");
const conexao = require("../config/database");

let Marcacao = conexao.define("marcacao",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_cliente: {
            type: sequelize.STRING,
            allowNull: false
        },
        tipo_consulta: {
            type: sequelize.STRING,
            allowNull: true
        },
        presencial_online: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        profissional: {
            type: sequelize.STRING,
            allowNull: true
        },
        utilizador_id: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        psicologo_id: {
            type: sequelize.INTEGER,
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
        observacoes: {
            type: sequelize.STRING,
            allowNull: true
        },
    },
    {
        tableName: "marcacao",
        timestamps: true
    }
);

module.exports = Marcacao;