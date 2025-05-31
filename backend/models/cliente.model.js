const sequelize = require("sequelize");
const conexao = require("../config/database");

const Cliente = conexao.define(
  "cliente",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    tipo_consulta: {
      type: sequelize.STRING,
      allowNull: true,
    },
    formato_consulta: {
      type: sequelize.STRING,
      allowNull: true,
    },
    horario: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    notas: {
      type: sequelize.STRING,
      allowNull: true,
    },
    data_registo: {
      type: sequelize.STRING,
      allowNull: true,
    },
    data_atualizacao: {
      type: sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "cliente",
    timestamps: true,
  }
);

module.exports = Cliente;
