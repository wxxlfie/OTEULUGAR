import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import "./assets/style.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/index";
import Marcacao from "./pages/marcacao";
import Perfil from "./pages/perfil";
import Profissionais from "./pages/profissionais";
import Registar from "./pages/registar";
import Login from "./pages/login";
import HomePageProf from "./pages/index_prof";
import LoginProf from "./pages/login_prof";
import PerfilProf from "./pages/perfil_prof";
import RegistarProf from "./pages/registar_prof";
import MarcacaoCreate from "./pages/marcacao_create";
import ClienteCreate from "./pages/clientes_create";
import AgendaCreate from "./pages/agenda_create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marcacao" element={<Marcacao />} />
        <Route path="/marcacao_create" element={<MarcacaoCreate />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/registar" element={<Registar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepageprof" element={<HomePageProf />} />
        <Route path="/login_prof" element={<LoginProf />} />
        <Route path="/perfil_prof" element={<PerfilProf />} />
        <Route path="/registar_prof" element={<RegistarProf />} />
        <Route path="/clientes_create" element={<ClienteCreate />} />
        <Route path="/agenda_create" element={<AgendaCreate />} />
      </Routes>
    </>
  );
}

export default App;
