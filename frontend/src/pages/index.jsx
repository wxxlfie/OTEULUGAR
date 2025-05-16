import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import { Link } from "react-router-dom";
import imagem1 from "../Assets/Imagens/imagem1.jpg";
import imagem2 from "../Assets/Imagens/imagem2.jpg";
import imagem3 from "../Assets/Imagens/imagem3.jpg";
import imagem4 from "../Assets/Imagens/imagem4.jpg";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div class="container-lg">
        <section id="firts" class="first_img text-center position-relative">
          <img src={imagem1} alt="firts" class="img-fluid" />
          <div class="position-absolute top-50 start-0 end-0 translate-middle-y mx-auto">
            <h2 class="pb-3 text-light">Queres agendar uma consulta?</h2>
            <Link
              class="btn btn-dark text-light rounded-0 px-3 py-2"
              to="/marcacao_create"
            >
              Agendar
            </Link>
          </div>
        </section>
        <section id="about" class="text-center bg-success-subtle">
          <div class="about_us py-5 px-4 mx-auto">
            <h2>Sobre Nós</h2>
            <p>
              Duas psicólogas clínicas, apaixonadas pela arte da terapia,
              decidiram criar O Teu Lugar depois de se depararem, com alguma
              frequência, com experiências perturbadoras partilhadas no contexto
              dos cuidados de saúde e também na sua prática clínica, onde
              testemunharam relatos tanto comoventes como chocantes de pessoas
              de todo o país.
            </p>
          </div>
        </section>
        <section id="consult" class="text-center py-5">
          <h2>Tipos de Consultas</h2>
          <p>Escolhe a consulta ideal para ti</p>
          <div class="row">
            <div class="col-sm-4">
              <img src={imagem2} class="img-fluid" />
              <h3>Individual</h3>
            </div>
            <div class="col-sm-4">
              <img src={imagem3} class="img-fluid" />
              <h3>Casal</h3>
            </div>
            <div class="col-sm-4">
              <img src={imagem4} class="img-fluid" />
              <h3>EMDR</h3>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
