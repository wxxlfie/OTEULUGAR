const sequelize = require("sequelize");
const conexao = require("../config/database");

const Utilizador = conexao.define(
  "utilizador",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    psicologo_id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    morada: {
      type: sequelize.STRING,
      allowNull: true,
    },
    nif: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: sequelize.STRING,
      allowNull: true,
    },
    contacto: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    dta_nascimento: {
      type: sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "utilizador",
    timestamps: true,
  }
);

module.exports = Utilizador;
