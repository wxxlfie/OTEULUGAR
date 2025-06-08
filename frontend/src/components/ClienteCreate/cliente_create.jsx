import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import Navbar from "../Navbar/index_prof";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

const ClienteCreate = () => {
  const { id } = useParams();

  const [cliente, setCliente] = useState({
    nome: "",
    tipo_consulta: "",
    formato_consulta: "",
    horario: "",
    notas: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const nav = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (id && token) {
      axios
        .get(`http://localhost:5000/api/v1/cliente/${id}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        })
        .then((res) => {
          console.log(res.data);
          setCliente(res.data.data);
        })
        .catch(() => setError("Erro ao carregar dados do cliente."));
    }
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nome") return;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`http://localhost:5000/api/v1/cliente/${id}`, cliente, {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        })
        .then(() => {
          setSuccess(true);
          setTimeout(() => nav("/clientes"), 1500);
        })
        .catch(() => setError("Erro ao editar clientes."));
    } else {
      console.log(token);
      axios
        .post(`http://localhost:5000/api/v1/cliente`, cliente, {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        })
        .then(() => {
          setSuccess(true);
          setTimeout(() => nav("/clientes"), 1500);
        })
        .catch((error) => {
          console.log(error);
          setError(
            error.response?.data?.message || "Erro ao criar um cliente."
          );
        });
    }
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            mt: { xs: 2, md: 8 },
            p: { xs: 2, md: 4 },
            borderRadius: 3,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            {id ? "Editar Cliente" : "Criar Novo Cliente"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Nome"
              name="nome"
              value={cliente.nome ?? ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Tipo de Consulta"
              name="tipo_consulta"
              value={cliente.tipo_consulta ?? ""}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Formato da consulta"
              name="formato_consulta"
              value={cliente.formato_consulta ?? ""}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Horário"
              name="horario"
              value={cliente.horario ?? ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Notas"
              name="notas"
              value={cliente.notas ?? ""}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              {id ? "Guardar Alterações" : "Criar Cliente"}
            </Button>
          </Box>
        </Paper>
        <Snackbar
          open={!!success}
          autoHideDuration={2000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {id
              ? "Cliente editado com sucesso!"
              : "Cliente criado com sucesso!"}
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!error}
          autoHideDuration={4000}
          onClose={() => setError("")}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setError("")}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default ClienteCreate;
