const Cliente = require("../models/cliente.model");

const endpointsFunction = {};

//Método que cria um cliente

endpointsFunction.createCliente = async (req, res) => {
  const { nome, tipo_consulta, formato_consulta, horario, notas } = req.body;
  console.log(nome, tipo_consulta, formato_consulta, horario, notas);
  try {
    const dados = await Cliente.create({
      nome: nome,
      tipo_consulta: tipo_consulta,
      formato_consulta: formato_consulta,
      horario: horario,
      notas: notas,
    });

    res.status(201).json({
      status: "success",
      message: "Cliente criado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Ocorreu um erro ao criar um cliente.",
      data: null,
    });
  }
};

//Método que lista todos os clientes

endpointsFunction.getAllClientes = async (req, res) => {
  try {
    const dados = await Cliente.findAll();

    res.status(200).json({
      status: "success",
      message: "Lista de clientes.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar clientes.",
      data: null,
    });
  }
};

//Método que atualiza um cliente

endpointsFunction.updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, tipo_consulta, formato_consulta, horario, notas } = req.body;

  try {
    const dados = await Agenda.update(
      {
        nome: nome,
        tipo_consulta: tipo_consulta,
        formato_consulta: formato_consulta,
        horario: horario,
        notas: notas,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Cliente não encontrado.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Cliente atualizado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao atualizar o cliente.",
      data: null,
    });
  }
};

//Método que elimina um cliente

endpointsFunction.deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Cliente.destroy({
      where: { id: id },
    });

    res.status(204).json({
      status: "success",
      message: "Cliente apagado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao apagar o cliente.",
      data: null,
    });
  }
};

//Método que lista um cliente pelo seu respetivo ID

endpointsFunction.getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Cliente.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Cliente não encontrado.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Cliente encontrado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar um cliente.",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
