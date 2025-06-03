import { Link } from "react-router-dom";
import logo from "/logo.png";
import React from "react";

function Navbar() {
  return (
    <>
      <div class="fixed-top">
        <nav class="navbar navbar-expand-lg bg-body-white">
          <div class="container-fluid">
            <Link to="/login" class="icon">
              <i class="bi bi-person-circle"></i>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/homepageprof">
                    Sou Psicólogo
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Consultas
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/marcacao_create">
                      Criar consultas
                    </Link>
                  </div>
                </li>
                <Link class="navbar-brand d-none d-lg-block" to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <li class="nav-item">
                  <Link class="nav-link" to="/profissionais">
                    Profissionais
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Registar/login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
