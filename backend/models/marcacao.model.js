<<<<<<< HEAD
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
            type: sequelize.STRING,
            allowNull: true
        },
        data_atualizacao: {
            type: sequelize.STRING,
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
=======
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
            type: sequelize.STRING,
            allowNull: true
        },
        data_atualizacao: {
            type: sequelize.STRING,
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
>>>>>>> 7f5b62e2f51c382b5df45f9104fbce41bf7e0783
