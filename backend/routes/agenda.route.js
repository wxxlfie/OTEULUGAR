const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const agendaController = require("../controllers/agenda.controller");

//endpoints da entidade "agenda"
router.post("/agenda", middleware.checkToken, agendaController.createAgenda);

router.get("/agendas", middleware.checkToken, agendaController.getAllcreateAgendas);

router.put("/agenda/:id", middleware.checkToken, agendaController.updatecreateAgenda);

router.delete("/agenda/:id", middleware.checkToken, agendaController.deletecreateAgenda);

router.get("/agenda/:id", middleware.checkToken, agendaController.getcreateAgendaById);


module.exports = router;