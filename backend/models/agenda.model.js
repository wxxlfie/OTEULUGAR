<<<<<<< HEAD
const sequelize = require("sequelize");
const conexao = require("../config/database");

let Agenda = conexao.define("agenda",
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
        tipo_consulta: {
            type: sequelize.STRING,
            allowNull: true
        },
        formato_consulta: {
            type: sequelize.STRING,
            allowNull: true
        },
        horario: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        cliente_id: {
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
    },
    {
        tableName: "agenda",
        timestamps: true
    }
);

module.exports = Agenda;
=======
const sequelize = require("sequelize");
const conexao = require("../config/database");

let Agenda = conexao.define("agenda",
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
        tipo_consulta: {
            type: sequelize.STRING,
            allowNull: true
        },
        formato_consulta: {
            type: sequelize.STRING,
            allowNull: true
        },
        horario: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        cliente_id: {
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
    },
    {
        tableName: "agenda",
        timestamps: true
    }
);

module.exports = Agenda;
>>>>>>> 7f5b62e2f51c382b5df45f9104fbce41bf7e0783
