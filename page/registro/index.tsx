import React, { useState } from "react";
import {
  InputAdornment,
  IconButton,
  Button,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomTextField from "../../components/atoms/index";

const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;
    if (email.trim() === "") {
      setErrorEmail("El correo es obligatorio");
      isValid = false;
    } else {
      setErrorEmail("");
    }

    if (password.trim() === "") {
      setErrorPassword("La contraseña es obligatoria");
      isValid = false;
    } else {
      setErrorPassword("");
    }

    if (isValid) {
      console.log(
        "Formulario enviado con correo:",
        email,
        "y contraseña:",
        password
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(0deg, rgba(16,16,16,1) 0%, rgba(37,37,37,1) 100%)",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "300px",
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginBottom: "20px" }}>
          <object
            width={150}
            data="/public/Main-logo.svg"
            type="image/svg+xml"
          ></object>
        </Box>

        <CustomTextField
          id="outlined-email"
          label="Correo o usuario"
          variant="outlined"
          color="success"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
            marginBottom: "20px",
          }}
          error={!!errorEmail}
          helperText={errorEmail}
        />

        <CustomTextField
          id="outlined-password"
          label="Contraseña"
          variant="outlined"
          color="success"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "100%",
            marginBottom: "10px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ color: "white" }} />
                  ) : (
                    <Visibility sx={{ color: "white" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!errorPassword}
          helperText={errorPassword}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", marginTop: "10px", background: "#77c043" }}
        >
          Iniciar sesión
        </Button>

        <Box sx={{ textAlign: "center", marginTop: "10px" }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" underline="hover" sx={{ color: "#77c043" }}>
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Registro;
