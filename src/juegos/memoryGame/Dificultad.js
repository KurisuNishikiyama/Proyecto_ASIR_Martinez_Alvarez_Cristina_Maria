import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/micss.css';

const Dificultad = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">Juego de Memoria</div>
      <div className="sidebar">
        <ul>
        <li><button onClick={() => navigate("/AppMemory")}>Fácil</button></li>
        <li><button onClick={() => navigate("/AppMemoryIntermedio")}>Intermedio</button></li>
        <li><button onClick={() => navigate("/AppMemoryDificil")}>Difícil</button></li>
        </ul>
      </div>
      <div className="content">Elige una dificultad:</div>
    </>
  );
};

export default Dificultad;