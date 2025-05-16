import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import { Link } from "react-router-dom";

const Login = () => {
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
