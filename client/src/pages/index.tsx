import React from "react";
import { HomeContainer } from "./style";
import { LogoCITi } from "../assets";

export default function Home() {
  return (
    <HomeContainer>
      <img src={LogoCITi.src} alt="" />
      <h1>Next.js Boilerplate</h1>
      <p>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by CITi
      </p>
    </HomeContainer>
  );
}
