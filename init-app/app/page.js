"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Home() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");

  const buscarCep = async () => {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await resposta.json();
    setEndereco(json.logradouro || "");
  };

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-6">
            <img src="/file.svg" alt="Imagem 1" className="img-fluid" />
          </div>
          <div className="col-6">
            <form>
              <div className="mb-3">
                <label htmlFor="cep" className="form-label">
                  CEP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  onBlur={buscarCep}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="endereco" className="form-label">
                  Endereço
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="endereco"
                  value={endereco}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
