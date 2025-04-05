const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const clienteController = require("../controllers/cliente.controller");

//endpoints da entidade "cliente"
router.post("/cliente", middleware.checkToken, clienteController.createCliente);

router.get("/clientes", middleware.checkToken, clienteController.getAllcreateClientes);

router.put("/cliente/:id", middleware.checkToken, clienteController.updatecreateCliente);

router.delete("/cliente/:id", middleware.checkToken, clienteController.deletecreateCliente);

router.get("/cliente/:id", middleware.checkToken, clienteController.getcreateClienteById);


module.exports = router;