import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";

const MarcacaoCreate = () => {
  return (
    <>
      <Navbar />
      <form
        class="container position-absolute top-50 start-50 translate-middle"
        method="post"
        action="marcacao_create"
      >
        <div class="row">
          <div class="mb-3">
            <label for="nome_cliente" class="col-sm-2 col-form-label">
              Nome:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="nome_cliente"
                name="nome_cliente"
                placeholder="Coloque o seu nome"
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
            <label for="presencial_online" class="col-sm-2 col-form-label">
              Presencial ou Online:
            </label>
            <div class="col-sm-10">
              <input
                type="presencial_online"
                class="form-control"
                id="presencial_online"
                name="presencial_online"
                placeholder="Presencial ou Online"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="profissional" class="col-sm-2 col-form-label">
              Profissional:
            </label>
            <div class="col-sm-10">
              <input
                type="profissional"
                class="form-control"
                id="profissional"
                name="profissional"
                placeholder="Coloque o nome do psicólogo escolhido"
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
                placeholder="Coloque um horário à sua escolha"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="col-sm-6">
              <button type="submit" class="btn btn-primary">
                Criar nova consulta
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

export default MarcacaoCreate;
