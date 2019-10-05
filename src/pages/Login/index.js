import React, { useState } from "react";
import api from "../../services/api";

// import { Container } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState("petrovickg@hotmail.com");

  async function handSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", { email });
    const { _id } = response.data;
    localStorage.setItem("user", _id);
    history.push("/dashboard");
  }

  return (
    <>
      <p>
        Ofereca <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
