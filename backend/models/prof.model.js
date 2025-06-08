const bcrypt = require("bcrypt");
const sequelize = require("sequelize");
const conexao = require("../config/database");

const Prof = conexao.define(
  "prof",
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
    utilizador_id: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "prof",
    timestamps: true,
  }
);

Prof.beforeCreate((prof, options) => {
  return bcrypt
    .hash(prof.password, 10)
    .then((hash) => {
      prof.password = hash;
    })
    .catch((error) => {
      throw new Error("Erro ao gerar o hash: " + error.message);
    });
});

Prof.beforeUpdate((prof, options) => {
  if (prof.changed("password")) {
    return bcrypt
      .hash(prof.password, 10)
      .then((hash) => {
        prof.password = hash;
      })
      .catch((error) => {
        throw new Error("Erro ao gerar o hash: " + error.message);
      });
  }
});

Prof.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = Prof;
