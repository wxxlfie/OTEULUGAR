import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");
  const [remember, setRemember] = useState(false);

  const nav = useNavigate();
  const { login, token } = useContext(AuthContext);

  async function HandleLogin(e) {
    e.preventDefault();
    setMessage("");
    setLoad(true);

    try {
      await login(email, password);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessage("Erro ao autenticar o utilizador.");
      //console.error("Erro ao autenticar o utilizador:", error);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    if (token) {
      nav("/perfil");
    }
  }, [token, nav]);

  return (
    <>
      <Navbar />
      <div class="form bg-dark">
        <h1>Login</h1>
        <form>
          <div class="mb-3 mt-4">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
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
          <Link to="/registar">Não tenho conta</Link>
          <Link to="/perfil" class="btn btn-primary mt-3">
            Login
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
