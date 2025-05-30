const Marcacao = require("../models/marcacao.model");

const endpointsFunction = {};

//Método que cria uma marcação

endpointsFunction.createMarcacao = async (req, res) => {
  const {
    nome_cliente,
    tipo_consulta,
    presencial_online,
    profissional,
    utilizador_id,
    psicologo_id,
    data_registo,
    data_atualizacao,
    observacoes,
  } = req.body;
  console.log(
    nome_cliente,
    tipo_consulta,
    presencial_online,
    profissional,
    utilizador_id,
    psicologo_id,
    data_registo,
    data_atualizacao,
    observacoes
  );
  try {
    const dados = await Marcacao.create({
      nome_cliente: nome_cliente,
      tipo_consulta: tipo_consulta,
      presencial_online: presencial_online,
      profissional: profissional,
      utilizador_id: utilizador_id,
      psicologo_id: psicologo_id,
      data_registo: data_registo,
      data_regdata_atualizacaoisto: data_atualizacao,
      observacoes: observacoes,
    });

    res.status(201).json({
      status: "success",
      message: "Marcação criada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Ocorreu um erro ao criar uma marcação.",
      data: null,
    });
  }
};

//Método que lista todas as marcações

endpointsFunction.getAllMarcacao = async (req, res) => {
  try {
    const dados = await Marcacao.findAll();

    res.status(200).json({
      status: "success",
      message: "Lista de marcações.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar marcações.",
      data: null,
    });
  }
};

//Método que atualiza uma marcação

endpointsFunction.updateMarcacao = async (req, res) => {
  const { id } = req.params;
  const {
    nome_cliente,
    tipo_consulta,
    presencial_online,
    profissional,
    utilizador_id,
    psicologo_id,
    data_registo,
    data_atualizacao,
    observacoes,
  } = req.body;

  try {
    const dados = await Marcacao.update(
      {
        nome_cliente: nome_cliente,
        tipo_consulta: tipo_consulta,
        presencial_online: presencial_online,
        profissional: profissional,
        utilizador_id: utilizador_id,
        psicologo_id: psicologo_id,
        data_registo: data_registo,
        data_regdata_atualizacaoisto: data_atualizacao,
        observacoes: observacoes,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Marcação não encontrada.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Marcação atualizada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao atualizar a marcação.",
      data: null,
    });
  }
};

//Método que elimina uma marcação

endpointsFunction.deleteMarcacao = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Marcacao.destroy({
      where: { id: id },
    });

    res.status(204).json({
      status: "success",
      message: "Marcação apagada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao apagar a marcação.",
      data: null,
    });
  }
};

//Método que lista uma marcação pelo seu respetivo ID

endpointsFunction.getMarcacaoById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Marcacao.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Marcação não encontrada.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Marcação encontrada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar a marcação.",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
