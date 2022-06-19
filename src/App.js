import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'; 

import Dificultad from "./juegos/memoryGame/Dificultad";
import Categorias from "./juegos/ahorcado/Categorias";
import Home from "./Home";
import AppMemory from "./juegos/memoryGame/AppMemory";
import AppMemoryIntermedio from "./juegos/memoryGame/AppMemoryIntermedio";
import AppMemoryDificil from "./juegos/memoryGame/AppMemoryDificil";
import AhorcadoInformatica from "./juegos/ahorcado/AhorcadoInformatica";
import AhorcadoCiencias from "./juegos/ahorcado/AhorcadoCiencias";
import AhorcadoIngles from "./juegos/ahorcado/AhorcadoIngles";
import AhorcadoGeografia from "./juegos/ahorcado/AhorcadoGeografia";
import './css/estiloMG.css';
function App() {

  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>
            Home
          </Link>
          &nbsp;|&nbsp;
          <Link className="nav-item nav-link" to={"/dificultad"}>
            Memory Game
          </Link>
          &nbsp;|&nbsp;
          <Link className="nav-item nav-link" to={"/Categorias"}>
            Juego del ahorcado
          </Link>
          &nbsp;|&nbsp;
        </div>
      </nav>
      <br></br>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/dificultad" element={<Dificultad />}></Route>
          <Route path="/Categorias" element={<Categorias />}></Route>
          <Route path="/AppMemory" element={<AppMemory id="1"/>}></Route>
          <Route path="/AppMemoryIntermedio" element={<AppMemoryIntermedio id="2" />}></Route>
          <Route path="/AppMemoryDificil" element={<AppMemoryDificil id="3" />}></Route>
          <Route path="/AhorcadoInformatica" element={<AhorcadoInformatica id="4" />}></Route>
          <Route path="/AhorcadoCiencias" element={<AhorcadoCiencias id="5" />}></Route>
          <Route path="/AhorcadoIngles" element={<AhorcadoIngles id="6" />}></Route>
          <Route path="/AhorcadoGeografia" element={<AhorcadoGeografia id="7" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
