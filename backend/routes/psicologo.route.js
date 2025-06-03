const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const psicologoController = require("../controllers/psicologo.controller");

//endpoints da entidade "psicologo"
router.post(
  "/psicologo",
  middleware.checkToken,
  psicologoController.createPsicologo
);

router.get(
  "/psicologos",
  middleware.checkToken,
  psicologoController.getAllPsicologos
);

router.put(
  "/psicologo/:id",
  middleware.checkToken,
  psicologoController.updatePsicologo
);

router.delete(
  "/psicologo/:id",
  middleware.checkToken,
  psicologoController.deletePsicologo
);

router.get(
  "/psicologo/:id",
  middleware.checkToken,
  psicologoController.getPsicologoById
);

module.exports = router;
