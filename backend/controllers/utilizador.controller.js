const Utilizador = require("../models/utilizador.model");

const endpointsFunction = {};

//Método que cria um utilizador

endpointsFunction.createUtilizador = async (req, res) => {
  const {
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    psicologo_id,
  } = req.body;
  console.log(
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    psicologo_id
  );
  try {
    const dados = await Utilizador.create({
      nome: nome,
      morada: morada,
      nif: nif,
      email: email,
      password: password,
      contacto: contacto,
      dta_nascimento: dta_nascimento,
      psicologo_id: psicologo_id,
    });

    res.status(201).json({
      status: "success",
      message: "Utilizador criado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Ocorreu um erro ao criar um utilizador.",
      data: null,
    });
  }
};

//Método que lista todos os utilizadores

endpointsFunction.getAllUtilizadores = async (req, res) => {
  try {
    const dados = await Utilizador.findAll();

    res.status(200).json({
      status: "success",
      message: "Lista de utilizadores.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar utilizadores.",
      data: null,
    });
  }
};

//Método que atualiza um utilizador

endpointsFunction.updateUtilizador = async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    psicologo_id,
  } = req.body;

  try {
    const dados = await Utilizador.update(
      {
        nome: nome,
        morada: morada,
        nif: nif,
        email: email,
        password: password,
        contacto: contacto,
        dta_nascimento: dta_nascimento,
        psicologo_id: psicologo_id,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Utilizador não encontrado.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Utilizador atualizado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao atualizar o utilizador.",
      data: null,
    });
  }
};

//Método que elimina um utilizador

endpointsFunction.deleteUtilizador = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Utilizador.destroy({
      where: { id: id },
    });

    res.status(204).json({
      status: "success",
      message: "Utilizador apagado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao apagar utilizador.",
      data: null,
    });
  }
};

//Método que lista um utilizador pelo seu respetivo ID

endpointsFunction.getUtilizadorById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Utilizador.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Utilizador não encontrado.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Utilizador encontrado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar um utilizador.",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
