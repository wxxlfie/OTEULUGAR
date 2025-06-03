const sequelize = require("sequelize");
const conexao = require("../config/database");

const Marcacao = conexao.define(
  "marcacao",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_cliente: {
      type: sequelize.STRING,
      allowNull: false,
    },
    tipo_consulta: {
      type: sequelize.STRING,
      allowNull: true,
    },
    presencial_online: {
      type: sequelize.STRING,
      allowNull: true,
    },
    profissional: {
      type: sequelize.STRING,
      allowNull: true,
    },
    utilizador_id: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    psicologo_id: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    horario: {
      type: sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "marcacao",
    timestamps: true,
  }
);

module.exports = Marcacao;
