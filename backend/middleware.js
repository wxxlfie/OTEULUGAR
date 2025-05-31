const jwt = require("jsonwebtoken");
const config = require("./config/config.js");

//valida o token de autenticação a cada pedido endpoint
const checkToken = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];

  if (token != undefined && token.startWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  //token existe
  if (token) {
    jwt.verify(token, config.secret, (error, decoted) => {
      if (error) {
        return res.json({
          success: false,
          message: "Token é inválido",
        });
      } else {
        req.decoted = decoted;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: "O token é inválido",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};
