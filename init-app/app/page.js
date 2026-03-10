"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Home() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");

  const buscarCep = async () => {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await resposta.json();

    console.log(json.bairro);
    console.log(json.estado);
    console.log(json.localidade);
    console.log(json.uf);
    // bairro
    // estado
    // localidade
    // uf

    setEndereco(json.logradouro || "");
    setBairro(json.bairro || "");
    setEstado(json.estado || "");
    setLocalidade(json.localidade || "");
    setUf(json.uf || "");
  };

  return (
    <>
      <main className="container">
        <div className="row mt-5 ">
          <div className="col-6">
            <img
              src="/undraw_map-dark_g9xq.svg"
              alt="Imagem 1"
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <form>
              <div className="mb-3 form-group">
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

              <div className="mb-3">
                <label htmlFor="bairro" className="form-label">
                  Bairro
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bairro"
                  value={bairro}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="estado" className="form-label">
                  Estado
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="estado"
                  value={estado}
                  readOnly
                />
              </div>

              {/* localidade */}

              <div className="mb-3">
                <label htmlFor="localidade" className="form-label">
                  Localidade
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="localidade"
                  value={localidade}
                  readOnly
                />
              </div>

              {/* uf */}

              <div className="mb-3">
                <label htmlFor="uf" className="form-label">
                  Uf
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="uf"
                  value={uf}
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
