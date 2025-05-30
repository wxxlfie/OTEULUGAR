const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const marcacaoController = require("../controllers/marcacao.controller");

//endpoints da entidade "marcacao"
router.post(
  "/marcacao",
  middleware.checkToken,
  marcacaoController.createMarcacao
);

router.get(
  "/marcacoes",
  middleware.checkToken,
  marcacaoController.getAllcreateMarcacoes
);

router.put(
  "/marcacao/:id",
  middleware.checkToken,
  marcacaoController.updatecreateMarcacao
);

router.delete(
  "/marcacao/:id",
  middleware.checkToken,
  marcacaoController.deletecreateMarcacao
);

router.get(
  "/marcacao/:id",
  middleware.checkToken,
  marcacaoController.getcreateMarcacaoById
);

module.exports = router;
