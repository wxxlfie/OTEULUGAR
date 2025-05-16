import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import Carina from "../Assets/Imagens/Carina.jpg";
import Ana from "../Assets/Imagens/Ana.jpg";
import Fabio from "../Assets/Imagens/Fabio.jpeg";
import Joao from "../Assets/Imagens/Joao.jpg";
import Liliana from "../Assets/Imagens/Liliana.jpg";
import Luis from "../Assets/Imagens/Luis.jpg";
import Maria from "../Assets/Imagens/Maria.jpg";
import Pedro from "../Assets/Imagens/Pedro.jpg";
import Raquel from "../Assets/Imagens/Raquel.jpg";
import Soraia from "../Assets/Imagens/Soraia.jpg";

const Profissionais = () => {
  return (
    <>
      <Navbar />
      <div class="card_prof">
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Carina} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Carina Assunção</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Avaliação Psicológica
                  (Personalidade e Dinâmica Emocional) - Especialização em
                  Medicina Psicossomática
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 21560</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Fabio} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Fábio Pereira</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Psicoterapia (em formação) -
                  Hipnose Clínica (em formação)
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 24684</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Joao} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">João Silva</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Psicoterapia (em formação)
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 28548</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Liliana} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Liliana Marques</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Psicoterapia EMDR
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 22932</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Luis} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Luis Cunha</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Ansiedade e Depressão -
                  Coaching - Psicologia Organizacional e do Trabalho -
                  Aconselhamento Profissional/Carreira e dificuldades laborais
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 25513</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Maria} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Maria Matos</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Perturbações do Comportamento
                  Alimentar
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 28978</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Pedro} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Pedro Fernandes</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Avaliação e Reabilitação
                  Neuropsicológica da infância à idade adulta
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 23037</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Raquel} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Raquel Pinto</h5>
                <p class="card-text">
                  Psicologia Clínica e da Saúde - Neuropsicologia - Psicologia
                  Infanto-Juvenil - Perturbação de Hiperatividade e Défice de
                  Atenção
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Soraia} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Soraia Almeida</h5>
                <p class="card-text">Psicologia Clínica e da Saúde</p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 22494</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Ana} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Ana Fidalgo</h5>
                <p class="card-text">
                  Psicologia Clínica e Terapia de Casal - Sexologia Clínica -
                  Educação Afetivo-Sexual
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Nº de Cédula: 20735</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profissionais;
