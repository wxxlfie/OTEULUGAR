const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const utilizadorController = require("../controllers/utilizador.controller");

//endpoints da entidade "utilizador"
router.post(
  "/utilizador",
  middleware.checkToken,
  utilizadorController.createUtilizador
);

router.get(
  "/utilizadores",
  middleware.checkToken,
  utilizadorController.getAllcreateUtilizadores
);

router.put(
  "/utilizador/:id",
  middleware.checkToken,
  utilizadorController.updatecreateUtilizador
);

router.delete(
  "/utilizador/:id",
  middleware.checkToken,
  utilizadorController.deletecreateUtilizador
);

router.get(
  "/utilizador/:id",
  middleware.checkToken,
  utilizadorController.getcreateUtilizadorById
);

module.exports = router;
