import React, { useState } from "react";
import { HomeContainer } from "./style";
import { Button, TextField } from "@mui/material";

export default function Home() {
  const [cont, setCont] = useState(0);

  function handleSubmit() {
    setCont(cont + 1);
    console.log('Entrei no submit');
    console.log('Contagem atual:', cont);
  }

  return (
    <HomeContainer>
      <h2>Formulário de login</h2>
      <label htmlFor="email">E-mail</label>
      <TextField id="email" variant="outlined" />
      <label htmlFor="password">Senha</label>
      <TextField id="password" variant="outlined" />
      <Button variant="contained" style={{ marginTop: '10px' }} onClick={handleSubmit}>
        Entrar
      </Button>
      <p>Clicado {cont} vezes</p>
    </HomeContainer>
  );
}
