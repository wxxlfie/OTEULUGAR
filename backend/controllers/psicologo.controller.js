const Psicologo = require("../models/psicologo.model");

const endpointsFunction = {};

//Método que cria um psicólogo

endpointsFunction.createPsicologo = async (req, res) => {
  const {
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    utilizador_id,
    num_celuda,
    data_registo,
    data_atualizacao,
  } = req.body;
  console.log(
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    utilizador_id,
    num_celuda,
    data_registo,
    data_atualizacao
  );
  try {
    const dados = await Psicologo.create({
      nome: nome,
      morada: morada,
      nif: nif,
      email: email,
      password: password,
      contacto: contacto,
      dta_nascimento: dta_nascimento,
      utilizador_id: utilizador_id,
      num_celuda: num_celuda,
      data_registo: data_registo,
      data_regdata_atualizacaoisto: data_atualizacao,
    });

    res.status(201).json({
      status: "success",
      message: "Psicólogo criado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Ocorreu um erro ao criar um psicólogo.",
      data: null,
    });
  }
};

//Método que lista todos os psicólogos

endpointsFunction.getAllPsicologo = async (req, res) => {
  try {
    const dados = await Psicologo.findAll();

    res.status(200).json({
      status: "success",
      message: "Lista de psicólogos.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar psicólogos.",
      data: null,
    });
  }
};

//Método que atualiza um psicólogo

endpointsFunction.updatePsicologo = async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    morada,
    nif,
    email,
    password,
    contacto,
    dta_nascimento,
    utilizador_id,
    num_celuda,
    data_registo,
    data_atualizacao,
  } = req.body;

  try {
    const dados = await Psicologo.update(
      {
        nome: nome,
        morada: morada,
        nif: nif,
        email: email,
        password: password,
        contacto: contacto,
        dta_nascimento: dta_nascimento,
        utilizador_id: utilizador_id,
        num_celuda: num_celuda,
        data_registo: data_registo,
        data_regdata_atualizacaoisto: data_atualizacao,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Psicólogo não encontrado.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Psicólogo atualizado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao atualizar o psicólogo.",
      data: null,
    });
  }
};

//Método que elimina um psicólogo

endpointsFunction.deletePsicologo = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Psicologo.destroy({
      where: { id: id },
    });

    res.status(204).json({
      status: "success",
      message: "Psicólogo apagado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao apagar o psicólogo.",
      data: null,
    });
  }
};

//Método que lista um psicólogo pelo seu respetivo ID

endpointsFunction.getPsicologoById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Psicologo.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Psicólogo não encontrado.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Psicólogo encontrado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar um psicólogo.",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
