"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Clientes() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  
  // Carregar usuários
  async function carregarUsuarios() {
    const res = await fetch("/api/clientes");
    const data = await res.json();
    setUsuarios(data);
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  // Preencher form para editar
  function editar(usuario) {
    setEditandoId(usuario.id);
    setNome(usuario.nome);
    setEmail(usuario.email);
    setSenha(usuario.senha);
  }

  // Criar ou Atualizar
  async function submit(e) {
    e.preventDefault();

    if (editandoId) {
      await fetch(`/api/clientes/${editandoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });
    } else {
      await fetch("/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });
    }

    setNome("");
    setEmail("");
    setSenha("");
    setEditandoId(null);
    carregarUsuarios();
  }

  // Deletar
  async function deletar(id) {
    await fetch(`/api/clientes/${id}`, { method: "DELETE" });
    carregarUsuarios();
  }

  return (
    <main className="container mt-5">
      <h1>Usuários</h1>

      {/* Formulário */}
      <form onSubmit={submit} className="row g-3 mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-primary w-100">
            {editandoId ? "Atualizar" : "Cadastrar"}
          </button>
        </div>
      </form>

      {/* Tabela */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => editar(usuario)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deletar(usuario.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
