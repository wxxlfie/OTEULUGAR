const sequelize = require("sequelize");
const conexao = require("../config/database");

const Agenda = conexao.define(
  "agenda",
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
      type: sequelize.STRING,
      allowNull: true,
    },
    cliente_id: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "agenda",
    timestamps: true,
  }
);

module.exports = Agenda;
