const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const agendaController = require("../controllers/agenda.controller");

//endpoints da entidade "agenda"
router.post("/agenda", middleware.checkToken, agendaController.createAgenda);

router.get(
  "/agendas",
  middleware.checkToken,
  agendaController.getAllAgendas
);

router.put(
  "/agenda/:id",
  middleware.checkToken,
  agendaController.updateAgenda
);

router.delete(
  "/agenda/:id",
  middleware.checkToken,
  agendaController.deleteAgenda
);

router.get(
  "/agenda/:id",
  middleware.checkToken,
  agendaController.getAgendaById
);

module.exports = router;
