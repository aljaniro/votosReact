import "./App.css";
import Candidatos from "./component/candidatos";
const personas = [
  {
    nombre: "Ervigio",
    vacas: 3,
    imagen: "https://www.html6.es/img/rey_ervigio.png",
  },
  {
    nombre: "Atanagildo",
    vacas: 6,
    imagen: "https://www.html6.es/img/rey_atanagildo.png",
  },
  {
    nombre: "AtaÃºlfo",
    vacas: 11,
    imagen: "https://www.html6.es/img/rey_ataulfo.png",
  },
  {
    nombre: "Leogivildo",
    vacas: 2,
    imagen: "https://www.html6.es/img/rey_leogivildo.png",
  },
];
function App() {
  return (
    <div className="App">
      <p className="text-4xl" style={{ color: "goldenrod" }}>
        Seleccione su Candidato
      </p>
      <div className="container mx-auto">
        <div
          className="grid gap-6 place-items-center grid-cols-1 md:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1"
          style={{ marginTop: "30px" }}
        >
          <div className="selec">
            <Candidatos candidato1={personas[0]} />
          </div>
          <div className="selec">
            <Candidatos candidato1={personas[1]} />
          </div>
          <div className="selec">
            <Candidatos candidato1={personas[2]} />
          </div>
          <div className="selec">
            <Candidatos candidato1={personas[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
