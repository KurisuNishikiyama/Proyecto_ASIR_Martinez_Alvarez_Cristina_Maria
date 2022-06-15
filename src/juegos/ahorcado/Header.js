import React, {Component} from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/micss.css';

const Header = (props) => {
  const navigate = useNavigate();
//Vincula las funciones resetear y numeroIntentos al encabezado y botón.
      return (
        <header> 
          <div>
          <div className="header">Juego del Ahorcado</div>
          <button onClick={() => navigate("/Categorias")} className="sidebar">Elegir categoria</button>
          </div>
        </header>
      );
    };

    export default Header;