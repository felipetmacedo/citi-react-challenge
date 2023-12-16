import React, { useState } from "react";
import { Mangue, LogoCITi2 } from "assets";

export default function Desafio() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [inputBorderStyle, setInputBorderStyle] = useState("#ced4da");
    const [passwordBorderStyle, setPasswordBorderStyle] = useState("#ced4da");
    
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

    const handleButtonHover = () => {
        setIsButtonHovered(!isButtonHovered);
    };

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
        setInputBorderStyle("#51E678"); 
    };
    
    const handleEmailBlur = () => {
        setIsEmailFocused(false);
        setInputBorderStyle("#ced4da"); 
    };
    
    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
        setPasswordBorderStyle("#51E678"); 
    };
    
    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
        setPasswordBorderStyle("#ced4da"); 
    };

    const containerStyle = {
        display: "flex",
        width: "1440px",
        height: "900px",
        margin: "0 auto",
        border: "20px solid #808080",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#FFF",
    };

    const leftSideStyle = {
        flex: "1",
        backgroundColor: "#f7fafc",
        position: "relative",
        padding: "20px", 
    };

    const rightSideStyle = {
        flex: "1",
        overflow: "hidden",
    };

    const logoCITiStyle = {
        width: "72px",
        height: "39px",
        top: "48px",
        left: "112px",
        position: "absolute", 
    };

    const fraseAcesseStyle = {
        width: "316px",
        height: "55px",
        fontFamily: "Titillium Web",
        top: "208px",
        fontSize: "36px",
        fontWeight: "bold", 
        lineHeight: "55px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#000", 
        left: "100px",
        position: "absolute",
        padding: "10px",
        whiteSpace: "nowrap", 
    };

    const inputStyle = {
        height: "54px",
        padding: "8px",
        borderRadius: "4px",
        border: `2px solid ${inputBorderStyle}`, 
        transition: "border-color 0.3s ease-in-out",
        marginBottom: "16px",
    };
    
    const passwordInputStyle = {
        ...inputStyle,
        border: `2px solid ${passwordBorderStyle}`, 
    };
  
    const frase2Style = {
        color: "#475569",
        marginTop: "258px",
        padding: "10px",
        boxSizing: "border-box",
        whiteSpace: "nowrap",
        marginLeft: "80px",
    };

    const buttonStyle = {
        width: "430px",
        height: "56px",
        padding: "16px 24px",
        borderRadius: "4px",
        gap: "10px",
        backgroundColor: isButtonHovered ? "#57FF86" : "#51E678",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out",
        border: "none", 
        marginleft: "-200px",
    };
    
    const entrarTextStyle = {
        width: "44px",
        height: "24px",
        fontFamily: "Titillium Web",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "24px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#fff", 
    };
    const caixaTextoStyle = {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        width: "450px",
        padding: "16px 12px",
        borderRadius: "4px",
        gap: "10px",
        left: "100px",
        position: "absolute",
    };
      
    const senhaLabelStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };
      
    const labelStyle = {
        fontSize: "14px",
        fontWeight: "600",
        color: "#1E293B",
        marginBottom: "8px",
        whiteSpace: "nowrap",
    };
      
    const esqueceuSenhaStyle = {
        fontSize: "14px",
        fontWeight: "600",
        width: "113px",
        height: "21px",
        fontFamily: "Titillium Web",
        lineHeight: "21px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#51E678",
        boxSizing: "border-box", 
    };

    return (
        <div style={containerStyle}>
            <div style={leftSideStyle}>
                <img src={LogoCITi2.src} alt="Logo CITi" style={logoCITiStyle} />
                <div style={fraseAcesseStyle}>Acesse a plataforma</div>
                <div style={frase2Style}>
                    Faça login ou registre-se para começar a construir<br /> seus projetos ainda hoje.
                </div>
                <div style={caixaTextoStyle}>
                    <div style={labelStyle}>E-mail</div>
                    <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        value={emailValue}
                        onChange={handleEmailChange}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailBlur}
                        style={inputStyle}
                    />
                  <div style={senhaLabelStyle}>
          <div style={labelStyle}>Senha</div>
          <div style={esqueceuSenhaStyle}>Esqueceu a senha?</div>
        </div>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={passwordValue}
                        onChange={handlePasswordChange}
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                        style={passwordInputStyle}/>
                    
          <button
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonHover}
            style={buttonStyle}>
            <span style={entrarTextStyle}>Entrar</span>
          </button>
                </div>
            </div>
            <div style={rightSideStyle}>
            <img src={Mangue.src} alt="Imagem Mangue" style={{ width: "100%", height: "100vh" }} />
            </div>
        </div>
    );
}