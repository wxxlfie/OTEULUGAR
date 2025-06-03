import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import React from "react";

const Registar = () => {
  return (
    <>
      <Navbar />
      <div class="form bg-dark">
        <h1>Registar</h1>
        <form action="/auth.utilizador/register" method="post">
          <div class="mb-3 mt-4">
            <label for="exampleInputEmail1" class="form-label">
              Nome
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputNome1"
              name="nome"
            />
          </div>
          <div class="mb-3 mt-4">
            <label for="exampleInputEmail1" class="form-label">
              Data de nascimento
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputdtanascimento1"
              name="dta_nascimento"
            />
          </div>
          <div class="mb-3 mt-4">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="e_mail"
            />
          </div>
          <div class="mb-3 mt-4">
            <label for="exampleInputEmail1" class="form-label">
              Contacto
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputContacto1"
              name="contacto"
            />
          </div>
          <div class="mb-3 mt-4">
            <label for="exampleInputEmail1" class="form-label">
              Nif
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputNif1"
              name="nif"
            />
          </div>
          <div class="mb-3 mt-4">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Registar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Registar;
