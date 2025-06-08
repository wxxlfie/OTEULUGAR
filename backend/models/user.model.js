const bcrypt = require("bcrypt");
const sequelize = require("sequelize");
const conexao = require("../config/database");

const User = conexao.define(
  "user",
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
    tableName: "user",
    timestamps: true,
  }
);

User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((error) => {
      throw new Error("Erro ao gerar o hash: " + error.message);
    });
});

User.beforeUpdate((user, options) => {
  if (user.changed("password")) {
    return bcrypt
      .hash(user.password, 10)
      .then((hash) => {
        user.password = hash;
      })
      .catch((error) => {
        throw new Error("Erro ao gerar o hash: " + error.message);
      });
  }
});

User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
