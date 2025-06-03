import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
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

const MarcacaoCreate = () => {
  const { id } = useParams();

  const [marcacao, setMarcacao] = useState({
    nome_cliente: "",
    tipo_consulta: "",
    presencial_online: "",
    profissional: "",
    horario: "",
    utilizador_id: 0,
    psicologo_id: 0,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const nav = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (id && token) {
      axios
        .get(`http://localhost:5000/api/v1/marcacao/${id}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        })
        .then((res) => {
          console.log(res.data);
          setMarcacao(res.data.data);
        })
        .catch(() => setError("Erro ao carregar dados da marcação."));
    }
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nome_cliente") return;
    setMarcacao({ ...marcacao, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`http://localhost:5000/api/v1/marcacao/${id}`, marcacao, {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        })
        .then(() => {
          setSuccess(true);
          setTimeout(() => nav("/marcacao_index"), 1500);
        })
        .catch(() => setError("Erro ao editar marcações."));
    } else {
      console.log(token);
      axios
        .post(`http://localhost:5000/api/v1/marcacao`, marcacao, {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        })
        .then(() => {
          setSuccess(true);
          setTimeout(() => nav("/marcacao_index"), 1500);
        })
        .catch((error) => {
          console.log(error);
          setError(
            error.response?.data?.message || "Erro ao criar uma marcação."
          )}
        );
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: { xs: 2, md: 8 },
          p: { xs: 2, md: 4 },
          borderRadius: 3,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          {id ? "Editar Marcação" : "Criar Nova Marcação"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Nome"
            name="nome_cliente"
            value={"ssss"}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tipo de Consulta"
            name="tipo_consulta"
            value={marcacao.tipo_consulta ?? ""}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Presencial ou Online"
            name="presencial_online"
            value={marcacao.presencial_online ?? ""}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Profissional"
            name="profissional"
            value={marcacao.profissional ?? ""}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Horário"
            name="horario"
            value={marcacao.horario ?? ""}
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
            {id ? "Guardar Alterações" : "Criar Marcação"}
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
            ? "Marcação editada com sucesso!"
            : "Marcação criada com sucesso!"}
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
  );
};

export default MarcacaoCreate;
