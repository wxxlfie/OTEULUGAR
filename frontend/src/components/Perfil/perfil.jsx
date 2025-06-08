import * as React from "react";
import Navbar from "../Navbar/index";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

const Perfil = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            label="Nome"
            id="filled-start-adornment"
            sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
            variant="filled"
          />
          <TextField
            label="E-mail"
            id="filled-start-adornment"
            sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
            variant="filled"
          />
          <FormControl
            sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <TextField
            label="Nif"
            id="filled-start-adornment"
            sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
            variant="filled"
          />
          <TextField
            label="Contacto"
            id="filled-start-adornment"
            sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
            variant="filled"
          />
          <TextField
            label="Data de Nascimento"
            id="filled-start-adornment"
            sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
            variant="filled"
          />
        </div>
      </Box>
      <Button
        href="/perfil"
        sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
        variant="outlined"
      >
        Guardar
      </Button>
      <Button
        href="/"
        sx={{ backgroundColor: "#fff", m: 1, width: "25ch" }}
        variant="outlined"
      >
        Voltar
      </Button>
    </>
  );
};

export default Perfil;
