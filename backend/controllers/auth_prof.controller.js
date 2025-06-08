const sequelize = require("../config/database");
const Prof = require("../models/prof.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

const endpointsFunction = {};

endpointsFunction.registerProf = async (req, res) => {
  const {
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    utilizador_id,
  } = req.body;
  console.log(
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    utilizador_id
  );

  try {
    const dados = await Prof.create({
      nome,
      morada,
      nif,
      email,
      password,
      contacto,
      dta_nascimento,
      utilizador_id,
    });

    res.status(200).json({
      success: true,
      message: "Utilizador criado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de autenticação.",
      data: null,
    });
  }
};

endpointsFunction.loginProf = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Email ou senha inválidos.",
      });
    }

    // Compara a senha fornecida com o hash armazenado
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(403).json({
        success: false,
        message: "Email ou senha inválidos.",
      });
    }

    // Gera o token JWT
    const token = jwt.sign({ email: user.email }, config.secret, {
      expiresIn: config.timer,
    });

    res.status(200).json({
      success: true,
      message: "Autenticação realizada com sucesso.",
      AccessToken: token,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de autenticação.",
    });
  }
};

endpointsFunction.refreshTokenProf = async (req, res) => {
  const { token } = req.body;

  try {
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token não fornecido.",
      });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Token inválido ou expirado.",
        });
      }

      const newToken = jwt.sign({ email: decoded.email }, config.secret, {
        expiresIn: config.timer,
      });

      res.status(200).json({
        success: true,
        message: "Token renovado com sucesso.",
        AccessToken: newToken,
      });
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de renovação do token.",
    });
  }
};

endpointsFunction.logoutProf = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logout realizado com sucesso.",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de logout.",
    });
  }
};

module.exports = endpointsFunction;
