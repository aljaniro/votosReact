import React, { useState } from "react";

function Candidatos(props) {
  const [voto, setvoto] = useState(0);
  const votar = () => {
    setvoto(voto + 1);
  };
  return (
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      style={{ height: "auto" }}
    >
      <h5
        class="mb-2 text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 "
        style={{ color: "goldenrod" }}
      >
        {props.candidato1.nombre}
      </h5>
      <a href="#!">
        <img class="rounded-t-lg" src={props.candidato1.imagen} alt="" />
      </a>
      <div class="p-6">
        <p
          class="mb-4 text-2xl text-neutral-600 dark:text-neutral-200"
          style={{ color: "goldenrod" }}
        >
          Come {props.candidato1.vacas} vacas al dia
        </p>
        <p
          class="mb-4 text-base text-neutral-600 dark:text-neutral-200"
          style={{ color: "goldenrod" }}
        >
          Ingrese su voto
        </p>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="inline-block rounded bg-red px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={votar}
          style={{
            background: "goldenrod",
            width: "50px",
            fontSize: "20px",
            textAlign: "center",
            padding: "0",
          }}
        >
          {voto}
        </button>
      </div>
    </div>
  );
}

export default Candidatos;

/*  <div>
      <div class="card" style={{width: "18rem"}}>
      <p class="card-title text-xl">{props.candidato1.nombre}</p>
      <p class="card-text">Come {props.candidato1.vacas} al dia</p>
      <button>aa</button>
  <img src={props.candidato1.imagen} class="card-img-top" alt="..."/>
  <div class="card-foot">
   

  <button type="button" class="btn btn-primary">Primary</button>
   
  </div>
</div>
      {console.log(props)}
    </div>*/
