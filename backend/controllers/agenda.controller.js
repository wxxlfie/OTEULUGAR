const Agenda = require("../models/agenda.model");

const endpointsFunction = {};

//Método que cria uma agenda

endpointsFunction.createAgenda = async (req, res) => {
  const { nome, tipo_consulta, formato_consulta, horario, cliente_id } =
    req.body;
  console.log(nome, tipo_consulta, formato_consulta, horario, cliente_id);
  try {
    const dados = await Agenda.create({
      nome: nome,
      tipo_consulta: tipo_consulta,
      formato_consulta: formato_consulta,
      horario: horario,
      cliente_id: cliente_id,
    });

    res.status(201).json({
      status: "success",
      message: "Agenda criada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Ocorreu um erro ao criar uma agenda.",
      data: null,
    });
  }
};

//Método que lista todas as agendas

endpointsFunction.getAllAgendas = async (req, res) => {
  try {
    const dados = await Agenda.findAll();

    res.status(200).json({
      status: "success",
      message: "Lista de agendas.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar agendas.",
      data: null,
    });
  }
};

//Método que atualiza uma agenda

endpointsFunction.updateAgenda = async (req, res) => {
  const { id } = req.params;
  const { nome, tipo_consulta, formato_consulta, horario, cliente_id } =
    req.body;

  try {
    const dados = await Agenda.update(
      {
        nome: nome,
        tipo_consulta: tipo_consulta,
        formato_consulta: formato_consulta,
        horario: horario,
        cliente_id: cliente_id,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Agenda não encontrada.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Agenda atualizada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao atualizar a agenda.",
      data: null,
    });
  }
};

//Método que elimina uma agenda

endpointsFunction.deleteAgenda = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Agenda.destroy({
      where: { id: id },
    });

    res.status(204).json({
      status: "success",
      message: "Agenda apagada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao apagar a agenda.",
      data: null,
    });
  }
};

//Método que lista uma agenda pelo seu respetivo ID

endpointsFunction.getAgendaById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Agenda.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Agenda não encontrada.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Agenda encontrada com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar a agenda.",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
