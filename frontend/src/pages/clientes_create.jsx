import Navbarprof from "../components/navbar/index_prof";
import Footer from "../components/footer/index";
import React from "react";

const ClienteCreate = () => {
  return (
    <>
      <Navbarprof />
      <form
        class="container position-absolute top-50 start-50 translate-middle"
        method="post"
        action="/clientes_create"
      >
        <div class="row">
          <div class="mb-3">
            <label for="nome" class="col-sm-2 col-form-label">
              Nome do cliente:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="nome"
                name="nome"
                placeholder="Coloque o nome do cliente"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="tipo_consulta" class="col-sm-2 col-form-label">
              Tipo de Consulta:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="tipo_consulta"
                name="tipo_consulta"
                placeholder="Individual, Casal ou EMDR"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="formato_consulta" class="col-sm-2 col-form-label">
              Formato da consulta:
            </label>
            <div class="col-sm-10">
              <input
                type="formato_consulta"
                class="form-control"
                id="formato_consulta"
                name="formato_consulta"
                placeholder="Presencial ou online"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="horario" class="col-sm-2 col-form-label">
              Horário:
            </label>
            <div class="col-sm-10">
              <input
                type="horario"
                class="form-control"
                id="horario"
                name="horario"
                placeholder="Coloque o horário escolhido pelo cliente"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="notas" class="col-sm-2 col-form-label">
              Notas:
            </label>
            <div class="col-sm-10">
              <input
                type="notas"
                class="form-control"
                id="notas"
                name="notas"
                placeholder="Opcional"
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="col-sm-6">
              <button type="submit" class="btn btn-primary">
                Criar novo cliente
              </button>
              <button type="reset" class="btn btn-secondary">
                Limpar
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default ClienteCreate;
