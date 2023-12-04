import React from "react";
import { LogoCITi1 } from "../assets";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
      <img src={LogoCITi1.src} alt="" style={{ width: "25%"}}/>
      <h1>Next.js Boilerplate</h1>
      <p>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by CITi
      </p>
    </div>
  );
}
