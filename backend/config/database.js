const sequelize = require("sequelize");

const conexao = new sequelize("oteulugar", "root", "wolf1216", {
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = conexao;
