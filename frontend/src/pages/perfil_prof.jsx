import NavbarProf from "../components/navbar/index_prof";
import Footer from "../components/footer/index";
import { Link } from "react-router-dom";
import imagem5 from "../Assets/Imagens/imagem5.jpg";
import React from "react";

const PerfilProf = () => {
  return (
    <>
      <NavbarProf />
      <div class="container_perfil">
        <div class="perfil">
          <div class="form-floating mb-3">
            <div class="foto_perfil">
              <img
                src={imagem5}
                class="img-thumbnail"
              />
            </div>
          </div>
          <div class="form-floating mb-3">
            <input type="text" placeholder="Coloque o seu nome" />
          </div>
          <div class="form-floating mb-3">
            <input type="text" placeholder="Coloque a sua data de nascimento" />
          </div>
          <div class="form-floating mb-3">
            <input type="email" placeholder="Coloque o seu e-mail" />
          </div>
          <div class="form-floating mb-3">
            <input type="tel" placeholder="Coloque o seu contacto" />
          </div>
          <div class="form-floating mb-3">
            <input type="tel" placeholder="Coloque o seu nif" />
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control2"
              id="floatingTextarea"
              name="horario"
            ></textarea>
            <label for="floatingTextarea">Comentários</label>
          </div>
          <Link to="">
            <input type="submit" value="Guardar" class="btn btn-outline-dark" />
          </Link>
          <Link to="/login_prof">Logout</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PerfilProf;
