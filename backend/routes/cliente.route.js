const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const clienteController = require("../controllers/cliente.controller");

//endpoints da entidade "cliente"
router.post("/cliente", middleware.checkToken, clienteController.createCliente);

router.get(
  "/clientes",
  middleware.checkToken,
  clienteController.getAllClientes
);

router.put(
  "/cliente/:id",
  middleware.checkToken,
  clienteController.updateCliente
);

router.delete(
  "/cliente/:id",
  middleware.checkToken,
  clienteController.deleteCliente
);

router.get(
  "/cliente/:id",
  middleware.checkToken,
  clienteController.getClienteById
);

module.exports = router;
