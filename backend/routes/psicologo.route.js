const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const psicologoController = require("../controllers/psicologo.controller");

//endpoints da entidade "psicologo"
router.post("/psicologo", middleware.checkToken, psicologoController.createPsicologo);

router.get("/psicologos", middleware.checkToken, psicologoController.getAllcreatePsicologos);

router.put("/psicologo/:id", middleware.checkToken, psicologoController.updatecreatePsicologo);

router.delete("/psicologo/:id", middleware.checkToken, psicologoController.deletecreatePsicologo);

router.get("/psicologo/:id", middleware.checkToken, psicologoController.getcreatePsicologoById);


module.exports = router;