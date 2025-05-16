import { Link } from "react-router-dom";

function footer() {
  return (
    <footer class="text-center p-4 fixed-bottom text-dark">
      © 2025
      <Link
        class="text-reset fw-bold text-dark"
        to="https://oteulugar.pt"
        target="_blank"
      >
        O TEU LUGAR.
      </Link>
      <Link class="text-decoration-none text-dark">
        Todos Os Direitos Reservados.
      </Link>
    </footer>
  );
}
export default footer;
