import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/micss.css';

const Header = (props) => {
  const navigate = useNavigate();
  //Vincula las funciones resetear y numeroIntentos al encabezado y botón.
  return (
    <div>
      <div className="header">Juego de Memoria</div>
      <div className="sidebar">
      <ul>
      <li>Intentos: {props.numeroIntentos}</li>
      <li><button onClick={props.resetear}>Reiniciar</button></li>
      <li><button onClick={() => navigate("/Dificultad")}>Elegir dificultad</button>
      </li>
      </ul>
      </div>
    </div>
  );
};

export default Header;
