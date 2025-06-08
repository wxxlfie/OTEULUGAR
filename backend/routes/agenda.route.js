const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const agendaController = require("../controllers/agenda.controller");

//endpoints da entidade "agenda"
router.post("/agenda", agendaController.createAgenda); //middleware.checkToken

router.get("/agendas", agendaController.getAllAgendas); //middleware.checkToken

router.put("/agenda/:id", agendaController.updateAgenda); //middleware.checkToken

router.delete("/agenda/:id", agendaController.deleteAgenda); //middleware.checkToken

router.get("/agenda/:id", agendaController.getAgendaById); //middleware.checkToken

module.exports = router;
