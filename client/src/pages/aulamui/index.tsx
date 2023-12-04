import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

export default function Home() {
  const [cont, setCont] = useState(0);

  function handleSubmit() {
    console.log("Entered handleSubmit");
    setCont(cont + 1);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px"
      }}
    >
      <Typography variant="h5">Formulário de login</Typography>
      <TextField id="email" variant="outlined" label="E-mail" margin="normal" />
      <TextField
        id="password"
        variant="outlined"
        label="Senha"
        margin="normal"
        type="password"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Entrar
      </Button>
      <Typography marginTop={1}>Clicado {cont} vezes</Typography>
    </Box>
  );
}
