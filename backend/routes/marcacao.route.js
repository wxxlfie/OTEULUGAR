const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const marcacaoController = require("../controllers/marcacao.controller");

//endpoints da entidade "marcacao"
router.post("/marcacao", marcacaoController.createMarcacao); //middleware.checkToken,

router.get("/marcacoes", marcacaoController.getAllMarcacoes); //middleware.checkToken

router.put("/marcacao/:id", marcacaoController.updateMarcacao); //middleware.checkToken

router.delete("/marcacao/:id", marcacaoController.deleteMarcacao); //middleware.checkToken

router.get("/marcacao/:id", marcacaoController.getMarcacaoById); //middleware.checkToken

module.exports = router;
