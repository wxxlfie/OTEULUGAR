const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const clienteController = require("../controllers/cliente.controller");

//endpoints da entidade "cliente"
router.post("/cliente", clienteController.createCliente); //middleware.checkToken

router.get("/clientes", clienteController.getAllClientes); //middleware.checkToken

router.put("/cliente/:id", clienteController.updateCliente); //middleware.checkToken

router.delete("/cliente/:id", clienteController.deleteCliente); //middleware.checkToken

router.get("/cliente/:id", clienteController.getClienteById); //middleware.checkToken

module.exports = router;
