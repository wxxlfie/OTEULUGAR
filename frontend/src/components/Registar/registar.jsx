import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";

const Registar = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [morada, setMorada] = useState("");
  const [nif, setNif] = useState("");
  const [contacto, setContacto] = useState("");
  const [dta_nascimento, setDta_nascimento] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();
  const { token } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/v1/register`, {
        nome,
        morada,
        nif,
        email,
        password,
        contacto,
        dta_nascimento,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setSuccess(true);
          setTimeout(() => {
            useContext(() => {
              if (token) {
                nav("/");
              }
            }, [token, nav]);
          }, 5000);
        } else {
          setError(
            "Ocorreu um erro na criação da nova conta. Tente novamente mais tarde."
          );
        }
      })
      .catch((error) => {
        console.error(error, error.message);
        setError("Erro na ligação à API. ");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 3,
          boxShadow: 3,
          padding: 4,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 600, mb: 2, color: "#000" }}
        >
          Criar Conta
        </Typography>
        <Box component="form" onSubmit={handleRegister} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password ?? ""}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nome"
            type="text"
            value={nome ?? ""}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Morada"
            type="text"
            value={morada ?? ""}
            onChange={(e) => setMorada(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Nif"
            type="number"
            value={nif ?? ""}
            onChange={(e) => setNif(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Contacto"
            type="number"
            value={contacto ?? ""}
            onChange={(e) => setContacto(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Data de Nascimento"
            type="date"
            value={dta_nascimento ?? ""}
            onChange={(e) => setDta_nascimento(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registar
          </Button>
        </Box>

        <Snackbar
          open={!!success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Conta criada com sucesso! A redirecionar...
          </Alert>
        </Snackbar>

        <Snackbar
          open={!!error}
          autoHideDuration={6000}
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
      </Box>
    </Container>
  );
};

export default Registar;
