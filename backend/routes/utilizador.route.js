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
  utilizadorController.getAllUtilizadores
);

router.put(
  "/utilizador/:id",
  middleware.checkToken,
  utilizadorController.updateUtilizador
);

router.delete(
  "/utilizador/:id",
  middleware.checkToken,
  utilizadorController.deleteUtilizador
);

router.get(
  "/utilizador/:id",
  middleware.checkToken,
  utilizadorController.getUtilizadorById
);

module.exports = router;
