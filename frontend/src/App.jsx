import "./App.css";
import "./assets/style.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/index";
import Perfil from "./components/Perfil/perfil";
import Profissionais from "./components/Profissionais/profissionais";
import Registar from "./components/Registar/registar";
import Login from "./components/Login/login";
import HomePageProf from "./components/IndexProf/index_prof";
import LoginProf from "./components/LoginProf/login_prof";
import PerfilProf from "./components/PerfilProf/perfil_prof";
import RegistarProf from "./components/RegistarProf/registar_prof";
import MarcacaoCreate from "./components/MarcacaoCreate/marcacao_create";
import MarcacaoIndex from "./components/MarcacaoIndex/marcacao_index";
import ClienteCreate from "./components/ClienteCreate/cliente_create";
import ClienteIndex from "./components/ClienteIndex/cliente_index";
import AgendaCreate from "./components/AgendaCreate/agenda_create";
import AgendaIndex from "./components/AgendaIndex/agenda_index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marcacoes">
          <Route index element={<MarcacaoIndex />} />
          <Route path="create" element={<MarcacaoCreate />} />
          <Route path="edit/:id" element={<MarcacaoCreate />} />
        </Route>
        <Route path="/agendas">
          <Route index element={<AgendaIndex />} />
          <Route path="create" element={<AgendaCreate />} />
          <Route path="edit/:id" element={<AgendaCreate />} />
        </Route>
        <Route path="/clientes">
          <Route index element={<ClienteIndex />} />
          <Route path="create" element={<ClienteCreate />} />
          <Route path="edit/:id" element={<ClienteCreate />} />
        </Route>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/register" element={<Registar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepageprof" element={<HomePageProf />} />
        <Route path="/login_prof" element={<LoginProf />} />
        <Route path="/perfil_prof" element={<PerfilProf />} />
        <Route path="/register_prof" element={<RegistarProf />} />
      </Routes>
    </>
  );
}

export default App;
