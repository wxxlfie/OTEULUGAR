<<<<<<< HEAD
const sequelize = require("sequelize");
const conexao = require("../config/database");

let Cliente = conexao.define("cliente",
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
        notas: {
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
    },
    {
        tableName: "cliente",
        timestamps: true
    }
);

module.exports = Cliente;
=======
const sequelize = require("sequelize");
const conexao = require("../config/database");

let Cliente = conexao.define("cliente",
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
        notas: {
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
    },
    {
        tableName: "cliente",
        timestamps: true
    }
);

module.exports = Cliente;
>>>>>>> 7f5b62e2f51c382b5df45f9104fbce41bf7e0783
