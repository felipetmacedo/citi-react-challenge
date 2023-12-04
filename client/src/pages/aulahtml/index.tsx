import React, { useState } from "react";

export default function Home() {
  const [cont, setCont] = useState(0);

  function handleSubmit() {
    console.log("Entered handleSubmit");
    setCont(cont + 1);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
      <h2>Formulário de login</h2>
      <input type="text" id="email" placeholder="E-mail" style={{ margin: "8px 0" }}/>
      <input type="password" id="password" placeholder="Senha" style={{ margin: "8px 0" }}/>
      <button onClick={handleSubmit}>
        Entrar
      </button>
      <p>Clicado {cont} vezes</p>
    </div>
  );
}
