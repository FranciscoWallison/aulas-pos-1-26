'use client';

export default function Home() {
  let titulo = "Olá mundo!";

  let criar = "Criar";
  let deletear = "Deletar";
  let consultar = "Consultar";
  let atualizar = "Atualizar";

  const btnCriar = () => {
    alert("Criar");
  }

  const btnDeletar = () => {
    alert("Deletar");
  }

  const btnConsultar = () => {
    alert("Consultar");
  }

  const btnAtualizar = () => {
    alert("Atualizar");
  }

  return (
    <>
      <h1>{titulo}</h1>
      <Btn texto={criar} onAction={btnCriar} />
      <Btn texto={deletear} onAction={btnDeletar} />
      <Btn texto={consultar} onAction={btnConsultar} />
      <Btn texto={atualizar} onAction={btnAtualizar} />
    </>
  );
}

function Btn(props) {
  return <button onClick={props.onAction}>{props.texto}</button>;
}
