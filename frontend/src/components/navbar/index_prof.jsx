import { Link } from "react-router-dom";
import logo from "/logo.png";

function NavbarProf() {
  return (
    <>
      <div class="fixed-top">
        <nav class="navbar navbar-expand-lg bg-body-white">
          <div class="container-fluid">
            <Link to="/login_prof" class="icon">
              <i class="bi bi-person-circle"></i>
            </Link>
            <Link class="navbar-brand d-lg-none" to="/homepageprof">
              <img
                src="../Imagens/cropped-oteulugarPrancheta-1.png"
                alt="logo"
              />
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
                  <Link class="nav-link" to="/">
                    Sou Cliente
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
                    Clientes
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/clientes_create">
                      Criar clientes
                    </Link>
                  </div>
                </li>
                <Link class="navbar-brand d-none d-lg-block" to="/login_prof">
                  <img src={logo} alt="logo" />
                </Link>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Agenda
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/agenda_create">
                      Criar marcações na agenda
                    </Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login_prof">
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

export default NavbarProf;
